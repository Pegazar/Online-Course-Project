import React from 'react'
import "./Courses.css"
import course1 from "../../img/course-1.jpg"
import course2 from "../../img/course-2.jpg"
import course3 from "../../img/course-3.jpg"
import course4 from "../../img/course-4.jpg"
import course5 from "../../img/course-5.jpg"
import course6 from "../../img/course-6.jpg"

const Courses = () => {
  return (
    <div className="courses">
        <div className="container">
            <div className="c-title">
                <h5>Courses</h5>
                <h1>Our Popular Courses</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6" >
                    <div className="c-card">
                        <img src={course1} alt="" />
                        <div className="course-items">
                            <div className="c-items">
                                <small>
                                    <i className="fa-solid fa-users"/>
                                    <span>25 Students</span>
                                </small>
                                <small>
                                    <i className="fa-regular fa-clock" />
                                    <span>01h 30m</span>
                                </small>
                            </div>
                            <a href="#">Web design & development courses for beginner</a>
                            <hr />
                            <div className="c-items-two">
                                <div className="rp-items">
                                    <h6>
                                        <i className="fa-solid fa-star"/>
                                        <span>4.5</span>
                                        <small>(250)</small>
                                    </h6>
                                    <h5>$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="c-card">
                        <img src={course2} alt="" />
                        <div className="course-items">
                            <div className="c-items">
                                <small>
                                    <i className="fa-solid fa-users"/>
                                    <span>25 Students</span>
                                </small>
                                <small>
                                    <i className="fa-regular fa-clock" />
                                    <span>01h 30m</span>
                                </small>
                            </div>
                            <a href="#">Web design & development courses for beginner</a>
                            <hr />
                            <div className="c-items-two">
                                <div className="rp-items">
                                    <h6>
                                        <i className="fa-solid fa-star"/>
                                        <span>4.5</span>
                                        <small>(250)</small>
                                    </h6>
                                    <h5>$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="c-card">
                        <img src={course3} alt="" />
                        <div className="course-items">
                            <div className="c-items">
                                <small>
                                    <i className="fa-solid fa-users"/>
                                    <span>25 Students</span>
                                </small>
                                <small>
                                    <i className="fa-regular fa-clock" />
                                    <span>01h 30m</span>
                                </small>
                            </div>
                            <a href="#">Web design & development courses for beginner</a>
                            <hr />
                            <div className="c-items-two">
                                <div className="rp-items">
                                    <h6>
                                        <i className="fa-solid fa-star"/>
                                        <span>4.5</span>
                                        <small>(250)</small>
                                    </h6>
                                    <h5>$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="c-card">
                        <img src={course4} alt="" />
                        <div className="course-items">
                            <div className="c-items">
                                <small>
                                    <i className="fa-solid fa-users"/>
                                    <span>25 Students</span>
                                </small>
                                <small>
                                    <i className="fa-regular fa-clock" />
                                    <span>01h 30m</span>
                                </small>
                            </div>
                            <a href="#">Web design & development courses for beginner</a>
                            <hr />
                            <div className="c-items-two">
                                <div className="rp-items">
                                    <h6>
                                        <i className="fa-solid fa-star"/>
                                        <span>4.5</span>
                                        <small>(250)</small>
                                    </h6>
                                    <h5>$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="c-card">
                        <img src={course5} alt="" />
                        <div className="course-items">
                            <div className="c-items">
                                <small>
                                    <i className="fa-solid fa-users"/>
                                    <span>25 Students</span>
                                </small>
                                <small>
                                    <i className="fa-regular fa-clock" />
                                    <span>01h 30m</span>
                                </small>
                            </div>
                            <a href="#">Web design & development courses for beginner</a>
                            <hr />
                            <div className="c-items-two">
                                <div className="rp-items">
                                    <h6>
                                        <i className="fa-solid fa-star"/>
                                        <span>4.5</span>
                                        <small>(250)</small>
                                    </h6>
                                    <h5>$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="c-card">
                        <img src={course6} alt="" />
                        <div className="course-items">
                            <div className="c-items">
                                <small>
                                    <i className="fa-solid fa-users"/>
                                    <span>25 Students</span>
                                </small>
                                <small>
                                    <i className="fa-regular fa-clock" />
                                    <span>01h 30m</span>
                                </small>
                            </div>
                            <a href="#">Web design & development courses for beginner</a>
                            <hr />
                            <div className="c-items-two">
                                <div className="rp-items">
                                    <h6>
                                        <i className="fa-solid fa-star"/>
                                        <span>4.5</span>
                                        <small>(250)</small>
                                    </h6>
                                    <h5>$99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses