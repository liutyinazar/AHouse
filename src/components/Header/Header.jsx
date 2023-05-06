import "./Header.scss";
// import { useState } from "react";

import logo from "../assets/image/logo.svg";
import profile from "../assets/image/profile.svg";
import language_img from "../assets/image/language.svg";

const Header = () => {
  // const [localLanguage, setLanguage] = useState("ua");

  // const changeLanguage = () => {
  //   setLanguage("en");
  // };

  return (
    <header className="header">
      <div className="logo">
        <a href="/#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="menu">
        <a href="/#" className="menu-link">
          Продаж
        </a>
        <a href="/#" className="menu-link">
          Оренда
        </a>
        <a href="/#" className="menu-link">
          Про Нас
        </a>
        <a href="/#" className="menu-link">
          Реклама
        </a>
        <a href="/#" className="menu-link">
          Зв'язатись з нами
        </a>
      </div>
      <div className="profile">
        <a href="/#" className="menu-link">
          <img src={profile} alt="profile" />
        </a>

        <a href="/#" className="menu-link">
          <img src={language_img} alt="language" />
        </a>
        {/* <div className="language_button">
          <a href="/#">UA</a>
          <a href="/#">EN</a>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
