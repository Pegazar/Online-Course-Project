import React from "react";
import "./BlogGrid.css";
import headerbg from "../../img/page-header.jpg";
import { Link } from "react-router-dom";
import "./Blog.css";
import blog1 from "../../img/blog-1.jpg";
import blog2 from "../../img/blog-2.jpg";
import blog3 from "../../img/blog-3.jpg";
import user from "../../img/user.jpg";
import blog80 from "../../img/blog-80x80.jpg";

const BlogGrid = () => {
  return (
    <div className="BlogGrid">
      <div className="bloggrid-bg">
        <div className="bg-img-box">
          <img src={headerbg} alt="" />
          <span></span>
          <div className="bg-wrapper-title">
            <h3>Blog</h3>
            <div className="d-flex">
              <p>
                <Link to="/">Home</Link>
              </p>
              <i className="fa-solid fa-angles-right" />
              <p className="text-uppercase text-white">Blog</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6 mb-30">
                <div className="blog-items">
                  <div className="blog-img-box">
                    <span></span>
                    <img className="img-fluid" src={blog1} alt="" />
                  </div>
                  <a href="#">
                    <h5>
                      Lorem elitr magna stet eirmod labore amet labore clita at
                      ut clita
                    </h5>
                    <p>Jan 01, 2050</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mb-30">
                <div className="blog-items">
                  <div className="blog-img-box">
                    <span></span>
                    <img className="img-fluid" src={blog2} alt="" />
                  </div>
                  <a href="#">
                    <h5>
                      Lorem elitr magna stet eirmod labore amet labore clita at
                      ut clita
                    </h5>
                    <p>Jan 01, 2050</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mb-30">
                <div className="blog-items">
                  <div className="blog-img-box">
                    <span></span>
                    <img className="img-fluid" src={blog3} alt="" />
                  </div>
                  <a href="#">
                    <h5>
                      Lorem elitr magna stet eirmod labore amet labore clita at
                      ut clita
                    </h5>
                    <p>Jan 01, 2050</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mb-30">
                <div className="blog-items">
                  <div className="blog-img-box">
                    <span></span>
                    <img className="img-fluid" src={blog1} alt="" />
                  </div>
                  <a href="#">
                    <h5>
                      Lorem elitr magna stet eirmod labore amet labore clita at
                      ut clita
                    </h5>
                    <p>Jan 01, 2050</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mb-30">
                <div className="blog-items">
                  <div className="blog-img-box">
                    <span></span>
                    <img className="img-fluid" src={blog2} alt="" />
                  </div>
                  <a href="#">
                    <h5>
                      Lorem elitr magna stet eirmod labore amet labore clita at
                      ut clita
                    </h5>
                    <p>Jan 01, 2050</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mb-30">
                <div className="blog-items">
                  <div className="blog-img-box">
                    <span></span>
                    <img className="img-fluid" src={blog3} alt="" />
                  </div>
                  <a href="#">
                    <h5>
                      Lorem elitr magna stet eirmod labore amet labore clita at
                      ut clita
                    </h5>
                    <p>Jan 01, 2050</p>
                  </a>
                </div>
              </div>
            </div>
            <nav aria-label="Page navigation" className="mb-30">
                <ul className="pagination pagination-lg justify-content-center mb-0">
                    <li className="page-item disabled">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item active">
                        <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="bg-box">
                    <img className="img-fluid rounded-circle" src={user} alt="" />
                    <h3>John Doe</h3>
                    <h3>Tag Cloud</h3>
                    <p>Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit no ut est  ipsum erat kasd amet elitr</p>
                </div>
                <div className="bg-searchbar">
                    <form action="#">
                        <div className="input-bg input-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Keyword"/>
                            <div className="input-group-append">
                                <span>
                                    <i className="fa-solid fa-magnifying-glass"/>
                                </span>
                            </div>
                        </div>      
                    </form>
                </div>
                <div className="bg-category">
                    <h3>Categories</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <a href="#">Web Design</a>
                            <span>150</span>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Web Development</a>
                            <span>131</span>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Online Marketing</a>
                            <span>78</span>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Keyword Research</a>
                            <span>56</span>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Email Marketing</a>
                            <span>98</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-post">
                    <h3>Recent Post</h3>
                    <a href="#">
                        <img className="img-fluid" src={blog80} alt="" />
                        <div className="pl-3">
                            <h6>Diam lorem dolore justo eirmod lorem dolore</h6>
                            <small>Jan01, 2050</small>
                        </div>
                    </a>
                    <a href="#">
                        <img className="img-fluid" src={blog80} alt="" />
                        <div className="pl-3">
                            <h6>Diam lorem dolore justo eirmod lorem dolore</h6>
                            <small>Jan01, 2050</small>
                        </div>
                    </a>
                    <a href="#">
                        <img className="img-fluid" src={blog80} alt="" />
                        <div className="pl-3">
                            <h6>Diam lorem dolore justo eirmod lorem dolore</h6>
                            <small>Jan01, 2050</small>
                        </div>
                    </a>
                </div>
                <div className="bg-tags">
                    <h3>Tag Cloud</h3>
                    <div className="tags">
                        <a href="#">Design</a>
                        <a href="#">Development</a>
                        <a href="#">Marketing</a>
                        <a href="#">SEO</a>
                        <a href="#">Writing</a>
                        <a href="#">Consulting</a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
