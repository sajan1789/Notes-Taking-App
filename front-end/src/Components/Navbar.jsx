import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Styles/Navbar.css'; 

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
            <Link to="/addnotes" className="navbar-link">Add-Notes</Link>
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
