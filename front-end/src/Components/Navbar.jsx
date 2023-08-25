import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Styles/Navbar.css'; 
import { login ,logout} from '../Redux/action';
import { useSelector,useDispatch} from "react-redux";
const Navbar = () => {
  const {user}=useSelector((store)=>store.authReducer)
  const dispatch=useDispatch()
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">My App</Link>
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
         { user ?<Link  className="navbar-link" onClick={()=>dispatch(logout())}>Logout</Link> :<Link to="/login" className="navbar-link">Login</Link> }
          </li>
          <li className="navbar-item">
            <Link to="/addnotes" className="navbar-link">Add-Notes</Link>
          </li>
          <li className="navbar-item">
            <Link to="/notes" className="navbar-link">Your Notes</Link>
          </li>
         {user ? <li className="navbar-item">
            <Link to="/notes" className="navbar-link">{user.split(' ')[0]}</Link>
          </li>:null} 
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
