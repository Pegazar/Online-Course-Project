import React from 'react'
import Contact from '../Contact/Contact'
import Testimonial from '../Testimonial/Testimonial'
import About from './About'
import "./AboutWrapper.css"
import headerbg from "../../img/page-header.jpg"
import { Link } from "react-router-dom";

const AboutWrapper = () => {
  return (
    <div className="AboutWrapper">
        <div className="about-bg">
            <div className="a-img-box">
                <img src={headerbg} alt=""/>
                <span></span>
                <div className="a-wrapper-title">
                    <h3>About</h3>
                    <div className="d-flex">
                        <p>
                            <Link to="/">Home</Link>
                        </p>
                        <i className="fa-solid fa-angles-right"/>
                        <p className="text-uppercase text-white">About</p>
                    </div>
                </div>
            </div>
        </div>
        <About/>
        <Contact/>
        <Testimonial/>
    </div>
  )
}

export default AboutWrapper