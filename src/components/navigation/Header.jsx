import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <img
          src="https://coreit.themepanthers.com/demo/wp-content/uploads/2024/10/logo-white.png"
          alt="core it logo"
        />

        <div className="search">
          <p>Search...</p>
        </div>

        <div className="menus">
          <Link to="/">Home</Link>
          <Link to="Portfolio">Portfolio</Link>
          <Link to="Service">Services</Link>
          <Link to="Job">Jobs</Link>
          <Link to="Contact">Contacts</Link>
          <p className="android-menu">.......</p>
        </div>

        <div className="started">
          <p>Get Started</p>
        </div>

        <div className="country">
          <p>En</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
