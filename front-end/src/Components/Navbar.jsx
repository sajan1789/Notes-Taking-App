import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import '../Styles/Navbar.css'; // Create a separate CSS file for Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">My App</Link>
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/notes" className="navbar-link">Your Notes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
