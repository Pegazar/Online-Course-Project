import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import 'bootstrap';
import { Link } from "react-router-dom";


const Navbar = () => {
  const [click, setClick] = useState("s-wrap");
  const [active, setActive] = useState("ul-list");

  const handleClick = () => {
    if (click === "s-wrap") {
      setClick("s-wrap sub-click");
    } else {
      setClick("s-wrap");
    }
  };

  const navToggle = () =>{
    if (active === "ul-list") {
      setActive("ul-list ul-active");
    } else {
      setActive("ul-list");
    }
  }

  return (
    <div className="navbar">
      <div className="n-wrapper">
        <div className="n-left">
          <div className="sub-wrapper" onClick={handleClick}>
            <div className="subject ">
              <span>
                <FontAwesomeIcon icon={faBookOpen} />
              </span>
              <span>Subjects</span>
              <span>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </div>
            <div className={click}>
              <div className="sub-list">
                <div className="dropdown w-design">
                  <a href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Web Design
                    <span className="a-down">
                      <FontAwesomeIcon icon={faAngleDown} />
                    </span>
                  </a>
                  <div className="dropdown-menu web-item" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#">HTML</a>
                    <a className="dropdown-item" href="#">CSS</a>
                    <a className="dropdown-item" href="#">jQuery</a>
                  </div>
                </div>
                <a href="#">Apps Design</a>
                <a href="#">Marketing</a>
                <a href="#">Resarch</a>
                <a href="#">SEO</a>
              </div>
            </div>
          </div>
        </div>
        <div className="n-right">
          <ul className={active}>
            <li>
              <Link to="/" onClick={navToggle}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={navToggle} >About</Link>
            </li>
            <li>
              <Link to="/courses" onClick={navToggle} >Courses</Link>
            </li>
            <li>
              <Link to="/team" onClick={navToggle} >Teachers</Link>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" >
                Blog
              </a>
              <div className="dropdown-menu blog-drop" aria-labelledby="dropdownMenuLink">
                <Link to="/bloggrid" className="dropdown-item {link}" href="#" onClick={navToggle}>Blog Grid</Link>
                <Link to="/blogdetail" className="dropdown-item {link}" onClick={navToggle}>Blog Detail</Link>
              </div>
            </li>
            <li>
              <Link to="/contact" onClick={navToggle} >Contact</Link>
            </li>
          </ul>
          <div onClick={navToggle} className="nav-toggler">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <a className="n-button" href="#">Join Now</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
