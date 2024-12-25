import React from 'react';
import '../style/Header.css';
import { FaHome, FaDog, FaShoppingCart, FaEnvelope, FaSignInAlt, FaApple, FaUser, FaBaby, FaAmazon, FaCat, FaArrowAltCircleDown, FaAccusoft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaDongSign, FaUpRightAndDownLeftFromCenter } from 'react-icons/fa6';

function Header() {
  return (
    <header className="header">
      <h1>Pet Mart</h1>
      <nav>
        <ul className="nav-links">
          <li> <FaHome classname="icon"/><Link to="">Home</Link></li>
          <li> <FaAccusoft   classname="icon"/><Link to="/About">Giới thiệu</Link></li>
          <li> <FaShoppingCart  classname="icon"/><Link to="/Shop">Phụ Kiện</Link></li>
          <li> <FaCat classname="icon"/><Link to="/contact">Cẩm nang</Link></li>
          <li> <FaUser classname="icon"/><Link to="/Login">Đăng Nhập</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;






