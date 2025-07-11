import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username === "suraj" && formData.password === "1234") {
      alert("Login Successfully");
      navigate("/Home");
    } else {
      alert(" Invalid username or password");
    }
  };

  return (
    <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>

          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>
    </div>
  );
};

export default Login;

