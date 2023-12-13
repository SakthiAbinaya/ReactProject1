import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  return (
    <div class="a">
    <div className="login-container">
    <h2>MEDICO HOSPITALS</h2>
      <h2>Login</h2>
      <form method="post">
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button><br></br><br></br>
        <Link to="/RegistrationPage">Register</Link>
      </form>
    </div>
    </div>
  );
}

export default LoginPage;
