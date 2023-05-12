import "./Footer.scss";
import facebook from "../assets/image/facebook.svg";
import instagram from "../assets/image/instagram.svg";
import linkedin from "../assets/image/linkedin.svg";
import twitter from "../assets/image/twitter.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_title">
            <Link to="/" className="menu-link" onClick={handleLinkClick}>
              <h1>AHouse</h1>
            </Link>

            <p>© 2023</p>
          </div>
          <div className="footer_links">
            <a href="https://facebook.com/">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://twitter.com/">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://instagram.com/">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
