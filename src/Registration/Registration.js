import React from 'react';
import './Registration.css'; // Import the CSS file


const Registration = () => {
  return (
    <div className="container">
      <div className="form">
        <div className="dot"></div>
        <h2 className="form-name">Create a New Account</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <div className="checkbox">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/login_page.php">Log in</a></p>
      </div>
    </div>
  );
};

export default Registration;
