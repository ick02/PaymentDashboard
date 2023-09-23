import React from 'react';
import './Login.css'; // Import the CSS file

const Login = () => {
  return (
    <div className="login-box">
      <h1>Login to your account</h1>
      <input type="email" placeholder="xxx@yyy.com" />
      <input type="password" placeholder="********" />
      <input type="checkbox" id="remember" />
      <label htmlFor="remember">Remember Me</label>
      <button>Login</button>
      <a href="#">New to Magic? Sign Up</a>
    </div>
  );
};

export default Login;
