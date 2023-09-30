import React, { useState, useRef } from "react";
import styles from "../css/login.module.css";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ goToHome }) => {
  const [formData, setFormData] = useState({
    teamName: "",
    password: "",
  });
  const showPasswordRef = useRef(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    goToHome(password);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleLogin();
    }
  };

  const { email, password } = formData;

  return (
    <div className={styles.loginForm} onKeyDown={handleKeyDown}>
      <h1> Login</h1>
      <form>
        <div className={styles.socialButtons}></div>

        <div className={styles.formGroup}>
          <label>Team Name</label>
          <input
            name="Name"
            id="teamName"
            label="teamName"
            placeholder="Enter"
            value={email}
            onChange={handleInputChange}
            type="teamName"
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            name="password"
            id="password"
            label="Password"
            placeholder="Enter your password"
            type={showPasswordRef.current ? "text" : "password"}
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button
          className={styles.loginButton}
          type="submit"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
