import "./Footer1.css";
import React from "react";
import Button from "./Compo/Social_Media/SM1";
import Form from "./Compo/Newsletter/Newsletter";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="../../public/nexovex-high-resolution-logo.svg" alt="" />
          <h2 className="footer-title">Nexovex</h2>
          <p className="footer-motto">
            Innovating the future, one step at a time.
          </p>
          <div className="contact-sec">
            <h1>Contact us</h1>
            <div className="footer-socials">
              <Button />
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>
              {/* Make it */}
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li>
                <a href="#home">Arduino's Project</a>
              </li>
              <li>
                <a href="#about">Challenge of the Month</a>
              </li>
              <li>
                <a href="#services">Previous Challenges</a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3 className="footer-heading">Organisations</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="/About">Challenge Team</a>
              </li>

              <li>
                <a href="/">Hackathon's Organising Team</a>
              </li>
            </ul>
          </div>
          <div className="links">
            <h3 className="footer-heading">Organisations</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Hackathon's Organising Team</a>
              </li>
              <li>
                <a href="/About">Challenge Team</a>
              </li>
            </ul>
          </div>
          <div className="links">
            <h3 className="footer-heading">Legal and Policies</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/About">Terms and Condition</a>
              </li>
              <li>
                <a href="/About">Refund Policies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Nexovex. All rights reserved.
      </div>
    </footer>
  );
}
