import React from 'react'
import "./Work.css"
import cat1 from "../../img/cat-1.jpg"
import cat2 from "../../img/cat-2.jpg"
import cat3 from "../../img/cat-3.jpg"
import cat4 from "../../img/cat-4.jpg"
import cat5 from "../../img/cat-5.jpg"
import cat6 from "../../img/cat-6.jpg"
import cat7 from "../../img/cat-7.jpg"
import cat8 from "../../img/cat-8.jpg"

const Work = () => {
  return (
    <div className="work">
        <div className="container">
            <div className="w-area">
                <h5>Subjects</h5>
                <h1>Explore Top Subjects</h1>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="w-cards">
                        <div className="w-img-box">
                            <img className="img-fluid" src={cat1} alt="" />
                            <span></span>
                        </div>
                        <a href="#">
                            <h4>Web Design</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="w-cards">
                        <div className="w-img-box">
                            <img className="img-fluid" src={cat2} alt="" />
                            <span></span>
                        </div>
                        <a href="#">
                            <h4>Development</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="w-cards">
                        <div className="w-img-box">
                            <img className="img-fluid" src={cat3} alt="" />
                            <span></span>
                        </div>
                        <a href="#">
                            <h4>Game Design</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="w-cards">
                        <div className="w-img-box">
                            <img src={cat4} alt="" />
                            <span></span>
                        </div>
                        <a href="#">
                            <h4>Apps Design</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="w-cards">
                        <div className="w-img-box">
                            <img src={cat5} alt="" />
                            <span></span>
                        </div>
                        <a href="#">
                            <h4>Marketing</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="w-cards">
                        <div className="w-img-box">
                            <img src={cat6} alt="" />
                            <span></span>
                        </div>
                        <a href="#">
                            <h4>Research</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="w-cards">
                        <div className="w-img-box">
                            <img src={cat7} alt="" />
                            <span></span>
                        </div>
                        <a href="#">
                            <h4>Content Writing</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="w-cards">
                        <div className="w-img-box">
                            <img src={cat8} alt="" />
                            <span></span>
                        </div>
                        <a href="#">
                            <h4>SEO</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work