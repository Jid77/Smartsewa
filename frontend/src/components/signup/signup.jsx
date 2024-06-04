// src/components/Signup.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../services/authServices"; // Sesuaikan dengan lokasi dan nama file yang benar
import cloudImage from "../../assets/Cloud.png"; // Pastikan gambar berada di folder yang benar
import "./signup.css"; // Pastikan file CSS telah diimpor dengan benar

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(username, email, password);
      navigate("/signin");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="backgroundCloud" />
      <div className="content">
        <div className="Judul">
          <h1>Daftar</h1>
          <p style={{ fontSize: "15px" }}>Hi, Ayo segera daftar di smartsewa</p>
        </div>
        <div className="form">
          <form onSubmit={handleSignup}>
            <div>
              <label style={{ color: "#454545" }}>
                Name: <br />
                <input
                  className="formData"
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
            </div>
            <div>
              <label style={{ color: "#454545" }}>
                Email: <br />
                <input
                  className="formData"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>
            <div>
              <label style={{ color: "#454545" }}>
                Kata Sandi: <br />
                <input
                  className="formData"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>
            <button className="buttonStart" type="submit">
              <b>Daftar</b>
            </button>
            <hr />
            <div>
              Sudah memiliki akun ?
              <Link to="/signin" style={{ color: "#90cbec" }}>
                <b> Masuk </b>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="backgroundCloudReverse" />
    </div>
  );
}

export default Signup;
