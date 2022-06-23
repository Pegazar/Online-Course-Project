import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="row pt-5">
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 footer-items">
                <h5>Get In Touch</h5>
                <p>
                  <i className="fa-solid fa-location-dot" />
                  <span>123 Street, New York, USA</span>
                </p>
                <p>
                  <i className="fa-solid fa-phone" />
                  <span>+012 345 67890</span>
                </p>
                <p>
                  <i className="fa-solid fa-envelope" />
                  <span>info@example.com</span>
                </p>
                <div className="footer-social">
                  <a href="#" className="mx-1">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="#" className="mx-1">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a href="#" className="mx-1">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a href="#" className="mx-1">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 footer-link">
                <h5>Our Courses</h5>
                <div>
                  <a href="#">
                    <i className="fa-solid fa-angle-right" />
                    <span>Web Design</span>
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-angle-right" />
                    <span>Apps Design</span>
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-angle-right" />
                    <span>Marketing</span>
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-angle-right" />
                    <span>Research</span>
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-angle-right" />
                    <span>SEO</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 footer-area">
            <h5>Newsletter</h5>
            <p>
              Rebum labore lorem dolores kasd est, et ipsum amet et at kasd,
              ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor
              duo eirmod sea justo no lorem est diam
            </p>
            <div className="w-100">
              <div className="input-group ft-input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email Address"
                />
                <div>
                  <button>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="btn-secondary m-0"/>
      <div className="footer-last">
          <div className="row">
            <div className="col-lg-6 text-md-left mb-3 mb-md-0">
                <p>
                  <span>© </span>
                  <a href="#">Domain Name</a>
                  <span>. All Rights Reserved. Designed by </span>
                  <a href="#">Yusif Feyzullazade</a>
                </p>
            </div>
            <div className="col-lg-6 footer-ul text-center text-md-right" >
                <ul className="d-inline-flex">
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                </ul>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
