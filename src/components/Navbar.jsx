import React from 'react';
import { Link } from 'react-router-dom';
//import logo from '../assets/logo.png'; // Make sure to place your logo file in src/assets


const Navbar = () => (
  <nav className="navbar">
     <div className="navbar-banner"> 
      {/* <img scr ="ParksideConey/parkside/src/Screenshot 2024-06-24 095006.png"  />  */}
      {/* <image href="ParksideConey/parkside/src/Screenshot 2024-06-24 095006.png" /> */}
      <h1>Parkside Coney Island</h1>
     
    </div>
    <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;

