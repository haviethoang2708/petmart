import React from 'react';
import '../style/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Pet Mart</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">Giới thiệu</a></li>
          <li><a href="#pets">Các giống chó</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#contact">Liên lạc</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
