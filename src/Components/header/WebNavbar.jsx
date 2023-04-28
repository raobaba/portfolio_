import React from "react";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";
import "./Header.css";
import MobileNavbar from "./MobileNavbar";

function WebNavbar({func,sidebar}) {
  return (
    <div id='container' className="container nav-link.home">
      <div className="name nav-menu nav-link.home">
        <p>
          Rajan <span>Kumar</span>
        </p>
      </div>
      <div className="details">
        <div className="links_container nav-menu">
          <Link
            className="button nav-menu nav-link.home"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button>HOME</button>
          </Link>
          <Link
            className="button nav-menu nav-link.home"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
          >
            <button>ABOUT</button>
          </Link>
          <Link
            className="button nav-menu nav-link.home"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <button>SKILLS</button>
          </Link>
          <Link
            className="button nav-menu nav-link.home"
            activeClass="active"
            to="certificates"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <button>CERTIFICATE</button>
          </Link>
          <Link
            className="button nav-menu nav-link.home"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <button>PROJECT</button>
          </Link>
          <Link
            className="button nav-menu nav-link.home"
            activeClass="active"
            to="github"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <button>GITHUB</button>
          </Link>
          <Link
            className="button nav-menu nav-link.home"
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button>CONTACT</button>
          </Link>
        </div>
        <div className="mobile_menu_bars nav-link.home" style={{marginLeft:"15px"}} onClick={func}>
          <MobileNavbar sidebar={sidebar}></MobileNavbar>
        </div>
      </div>
    </div>
  );
}

export default WebNavbar;
