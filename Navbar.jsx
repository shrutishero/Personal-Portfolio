import React from "react";
import "./Navbar.css";
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <h1>Protfolio</h1>
        </div>
        <ul className="menu">
          <li>
            <Link to= "home" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>

          <li>
            <Link to= "project" smooth={true} offset={0} duration={500}>
              Projects
            </Link>
          </li>

          <li>
            <Link to= "experience" smooth={true} offset={0} duration={500}>
              Experience
            </Link>
          </li>

          <li>
            <Link to= "contact" smooth={true} offset={0} duration={500}>
              Contact
            </Link>
          </li>
          </ul>
      </div>
    </>
  );
};

export default Navbar;
