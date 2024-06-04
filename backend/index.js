const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const port = 5000;

// Initialize PostgreSQL pool
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "smartsewa",
//   password: "",
  port: 5432,
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Test Database Connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to database');
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log('Test query result:', result.rows[0]);
  });
});
// Signup endpoint
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query =
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *";
    const values = [username, email, hashedPassword];
    const result = await pool.query(query, values);

    // Generate JWT token
    const token = jwt.sign({ userId: result.rows[0].id }, "your_secret_key");

    res.json({ token });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "An error occurred during signup" });
  }
});

// Signin endpoint
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const query = "SELECT * FROM users WHERE email = $1";
    const result = await pool.query(query, [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, "your_secret_key");

    res.json({ token });
  } catch (error) {
    console.error("Error during signin:", error);
    res.status(500).json({ error: "An error occurred during signin" });
  }
});

// Home endpoint
app.get("/home", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  try {
    // Verify JWT token
    const decoded = jwt.verify(token, "your_secret_key");
    const userId = decoded.userId;

    // Fetch user data from the database
    const query = "SELECT * FROM users WHERE id = $1";
    const result = await pool.query(query, [userId]);
    const user = result.rows[0];

    res.json({ message: `Welcome home, ${user.username}!` });
  } catch (error) {
    console.error("Error during home request:", error);
    res.status(401).json({ error: "Unauthorized" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
