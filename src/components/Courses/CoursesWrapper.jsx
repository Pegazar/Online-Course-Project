import React from 'react'
import Work from '../Work/Work'
import Courses from './Courses'
import "./CoursesWrapper.css"
import headerbg from "../../img/page-header.jpg"
import { Link } from "react-router-dom";

const CoursesWrapper = () => {
  return (
    <div className="CoursesWrapper">
        <div className="courses-bg">
            <div className="c-img-box">
                <img src={headerbg} alt=""/>
                <span></span>
                <div className="c-wrapper-title">
                    <h3>Courses</h3>
                    <div className="d-flex">
                        <p>
                            <Link to="/">Home</Link>
                        </p>
                        <i className="fa-solid fa-angles-right"/>
                        <p className="text-uppercase text-white">Courses</p>
                    </div>
                </div>
            </div>
        </div>
        <Work/>
        <Courses />
    </div>
  )
}

export default CoursesWrapper