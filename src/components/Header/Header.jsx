import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar/Navbar'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
        <div className="h-wrapper">
            <div className="h-left">
                <h1>
                    <Link to="/">
                        <span>E</span>COURSES
                    </Link>
                </h1>
            </div>
            <div className="h-right">
                <div className="r-elements">
                    <FontAwesomeIcon className="icon" icon={faLocationDot} />
                    <div className="e-left">
                        <h6>Our Office</h6>
                        <small>123 Street, New York, USA</small>
                    </div>
                </div>
                <div className="r-elements">
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                    <div className="e-left">
                        <h6>Email Us</h6>
                        <small>info@example.com</small>
                    </div>
                </div>
                <div className="r-elements">
                    <FontAwesomeIcon className="icon" icon={faPhoneFlip} /> 
                    <div className="e-left">
                        <h6>Call Us</h6>
                        <small>+012 345 6789</small>
                    </div>
                </div>
            </div>
        </div>
        <Navbar />
    </div>
  )
}

export default Header