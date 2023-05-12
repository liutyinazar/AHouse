import "./Header.scss";
import { useState } from "react";

import logo from "../assets/image/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const burgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="menu-link">
          <img src={logo} alt="logo" />
          <h1>AHouse</h1>
        </Link>
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <Link to="/" className="menu-link">
          Продаж
        </Link>
        <Link to="/" className="menu-link">
          Оренда
        </Link>
        <Link to="/" className="menu-link">
          Про Нас
        </Link>
        <Link to="/" className="menu-link">
          Реклама
        </Link>
        <Link to="/" className="menu-link">
          Зв'язатись з нами
        </Link>
        <Link to="/login" className="menu-link login">
          Увійти
        </Link>
      </div>
      <div className="burger">
        <button className="burger_btn" onClick={burgerMenu}>
          <span className="burger_span"></span>
          <span className="burger_span"></span>
          <span className="burger_span"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
