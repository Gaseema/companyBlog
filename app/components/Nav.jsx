import React from 'react';

const Nav = () => (
  (
    <nav className="nav top-bar">
      <a className="toggle-nav " href="# ">&#9776;</a>
      <div className="nav-mobile ">
        <ul className="left ">
          <li>
            <a href="./index.html" style={{ fontFamily: 'Orbitron, sans-serif;color:#FFA905' }}>COMPANY</a>
          </li>
        </ul>
        <ul className="right ">
          <li><a href="./blogPost" className="switch"> DESIGN </a></li>
          <li><a href="./blogPost.html" className="switch"> PHOTOGRAPHY </a></li>
          <li><a href="./blogPost.html" className="switch"> FASHION </a></li>
          <li><a href="./blogPost.html" className="switch"> FEATURES </a></li>
        </ul>
      </div>
    </nav>
  )
);

export default Nav;

