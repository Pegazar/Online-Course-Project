import React from 'react'
import "./Blog.css"
import blog1 from "../../img/blog-1.jpg"
import blog2 from "../../img/blog-2.jpg"
import blog3 from "../../img/blog-3.jpg"

const Blog = () => {
  return (
    <div className="blog py-5">
        <div className="container py-5">
            <div className="blog-title">
                <h5>Our Blog</h5>
                <h1>Latest From Our Blog</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div className="blog-items">
                        <div className="blog-img-box">
                            <span></span>
                            <img className="img-fluid" src={blog1} alt="" />
                        </div>
                        <a href="#">
                            <h5>Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                            <p>Jan 01, 2050</p>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="blog-items">
                        <div className="blog-img-box">
                            <span></span>
                            <img className="img-fluid" src={blog2} alt="" />
                        </div>
                        <a href="#">
                            <h5>Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                            <p>Jan 01, 2050</p>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="blog-items">
                        <div className="blog-img-box">
                            <span></span>
                            <img className="img-fluid" src={blog3} alt="" />
                        </div>
                        <a href="#">
                            <h5>Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                            <p>Jan 01, 2050</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog