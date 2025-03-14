import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const navMenu = navMenuRef.current;

    const toggleMenu = (e) => {
      e.stopPropagation();
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    };

    const closeMenu = (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }
    };

    hamburger.addEventListener("click", toggleMenu);
    document.addEventListener("click", closeMenu);

    return () => {
      hamburger.removeEventListener("click", toggleMenu);
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <div className="body">
      <nav className="navbar">
        <div className="logo">Brand</div>
        <div className="hamburger" id="hamburger" ref={hamburgerRef}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="nav-menu" id="nav-menu" ref={navMenuRef}>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink to="#" className="dropdown-toggle">
              Challenges
            </NavLink>
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/challenge-of-the-month" activeClassName="active">
                  Challenge of the Month
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pages/challenges/p-challenge"
                  activeClassName="active"
                >
                  Previous Challenges
                </NavLink>
              </li>
              <li className="nested-dropdown">
                <NavLink to="#" className="nested-toggle">
                  Marketing
                </NavLink>
                <ul className="nested-menu">
                  <li>
                    <NavLink to="/marketing/seo" activeClassName="active">
                      SEO
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/marketing/smm" activeClassName="active">
                      SMM
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
