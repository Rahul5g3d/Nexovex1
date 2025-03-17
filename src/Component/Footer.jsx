import React from "react";
import "./Footer.css";
import Button from "./Compo/Social_Media/SM1";
import Form from "./Compo/Newsletter/Newsletter";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="upper_part">
          <div className="left">
            <img src="../../public/Assets/image copy.png" alt="" />
            <h1>Nexovex Technology</h1>
            <h5>BEYOND NEXT BEYOND LIMIT</h5>
            <hr />
            <h3>Contact Us</h3>
            <Button />
          </div>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Nexovex Technology All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
