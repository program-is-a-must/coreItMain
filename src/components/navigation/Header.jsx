import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <nav>
        <img
          src='https://coreit.themepanthers.com/demo/wp-content/uploads/2024/10/logo-white.png'
          alt='core it logo'
        />

        <div className='search'>
          <p>Search...</p>
        </div>

        <div className='menus'>
          <a href='Home.jsx'>Home</a>
          <a href='Portfolio.jsx'>Portfolio</a>
          <a href='Service.jsx'>Services</a>
          <a href='Job.jsx'>Jobs</a>
          <a href='Contact.jsx'>Contacts</a>
        </div>

        <div className='started'>
          <p>Get Started</p>
        </div>

        <div className='country'>
          <p>En</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
