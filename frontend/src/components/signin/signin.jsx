// src/components/Signin.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../services/authServices"; // Sesuaikan dengan lokasi dan nama file yang benar
import cloudImage from "../../assets/Cloud.png"; // Pastikan gambar berada di folder yang benar
import "./signin.css"; // Pastikan file CSS telah diimpor dengan benar

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      await signin(email, password);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="backgroundCloud" />
      <div className="content">
        <div className="Judul">
          <h1>Masuk</h1>
          <p style={{ fontSize: "15px" }}>Hi Selamat datang di Smartsewa</p>
        </div>
        <div className="form">
          <form onSubmit={handleSignin}>
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
            <div>
              <label className="labelForgotPassword">Lupa kata sandi?</label>
            </div>
            <button className="buttonStart" type="submit">
              <b>Masuk</b>
            </button>
            <hr />
            <div>
              Belum memiliki akun ?
              <Link to="/signup" style={{ color: "#90cbec" }}>
                <b> Daftar </b>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="backgroundCloudReverse" />
    </div>
  );
}

export default Signin;
