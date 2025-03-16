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
        <div className="logo">Nexovex</div>
        <div className="hamburger" id="hamburger" ref={hamburgerRef}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <li className="nav-menu" id="nav-menu" ref={navMenuRef}>
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
              {/* For Nexted one */}
              <li className="nested-dropdown">
                <li>
                  <NavLink to="/COM" activeClassName="active">
                    Challenge of the Month
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/COM_participate" activeClassName="active">
                    Participate
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/COM_Pwinner" activeClassName="active">
                    Previous Winners
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/COM_Rules" activeClassName="active">
                    Rules and Regulation
                  </NavLink>
                </li>
              </li>
            </ul>
          </li>
          {/* second Nav Bar */}
          <li className="dropdown">
            <NavLink to="#" className="dropdown-toggle">
              Hackathon
            </NavLink>
            <ul className="dropdown-menu">
              {/* For Nexted one */}
              <li className="nested-dropdown">
                <li>
                  <NavLink to="/U_events" activeClassName="active">
                    Upcoming Events
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/P_events" activeClassName="active">
                    Previous Events
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/H_Highlights" activeClassName="active">
                    Highlights
                  </NavLink>
                </li>
              </li>
            </ul>
          </li>
          {/* Learning */}

          <li className="dropdown">
            <NavLink to="#" className="dropdown-toggle">
              Learning
            </NavLink>
            <ul className="dropdown-menu">
              {/* For Nexted one */}
              <li className="nested-dropdown">
                <li>
                  <NavLink to="/COM" activeClassName="active">
                    Basic
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/COM_participate" activeClassName="active">
                    Advanced
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/COM_Pwinner" activeClassName="active">
                    Arduino's Projects
                  </NavLink>
                </li>
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
        </li>
      </nav>
    </div>
  );
};

export default NavBar;
