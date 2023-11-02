import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar-container">
        <div className="logo-container">
          <div className="icon">
            <img className="lemon" src="./lemon.png" alt="lemona" />
          </div>
          <p className="page-name">covici</p>
        </div>
        <div className="navbar-menu">
          <ul>
            <li>
              <a>Updated</a>
            </li>
            <li>
              <a>Countries</a>
            </li>
            <li>
              <a>Death Rate</a>
            </li>
            <li>
              <a>Incubation</a>
            </li>
            <li>
              <a>Symptoms</a>
            </li>
          </ul>
        </div>
        <div className="profile__picture">
          <img className="picture" src="./profile.jpg" alt="picture" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
