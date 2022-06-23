import React from "react";
import headerbg from "../../img/page-header.jpg";
import team1 from "../../img/team-1.jpg";
import team2 from "../../img/team-2.jpg";
import team3 from "../../img/team-3.jpg";
import team4 from "../../img/team-4.jpg";
import { Link } from "react-router-dom";
import "./TeamWrapper.css";
import "./Team.css";

const TeamWrapper = () => {
  return (
    <div className="TeamWrapper ">
      <div className="team-bg ">
        <div className="t-img-box">
          <img src={headerbg} alt="" />
          <span></span>
          <div className="t-wrapper-title">
            <h3>Teachers</h3>
            <div className="d-flex">
              <p>
                <Link to="/">Home</Link>
              </p>
              <i className="fa-solid fa-angles-right" />
              <p className="text-uppercase text-white">Teachers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5 mt-90">
        <div className="team-title ">
          <h5>Teachers</h5>
          <h1>Meet Our Teachers</h1>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-30">
            <div className="team-item">
              <div className="team-img">
                <img className="img-fluid" src={team1} alt="" />
                <div className="team-social-overlay">
                  <div className="team-social">
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-items">
                <h5>Jhon Doe</h5>
                <p>Web Designer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-30">
            <div className="team-item">
              <div className="team-img">
                <img className="img-fluid" src={team2} alt="" />
                <div className="team-social-overlay">
                  <div className="team-social">
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-items">
                <h5>Jhon Doe</h5>
                <p>Web Designer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-30">
            <div className="team-item">
              <div className="team-img">
                <img className="img-fluid" src={team3} alt="" />
                <div className="team-social-overlay">
                  <div className="team-social">
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-items">
                <h5>Jhon Doe</h5>
                <p>Web Designer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-30">
            <div className="team-item">
              <div className="team-img">
                <img className="img-fluid" src={team4} alt="" />
                <div className="team-social-overlay">
                  <div className="team-social">
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-items">
                <h5>Jhon Doe</h5>
                <p>Web Designer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img className="img-fluid" src={team1} alt="" />
                <div className="team-social-overlay">
                  <div className="team-social">
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-items">
                <h5>Jhon Doe</h5>
                <p>Web Designer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img className="img-fluid" src={team2} alt="" />
                <div className="team-social-overlay">
                  <div className="team-social">
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-items">
                <h5>Jhon Doe</h5>
                <p>Web Designer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img className="img-fluid" src={team3} alt="" />
                <div className="team-social-overlay">
                  <div className="team-social">
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-items">
                <h5>Jhon Doe</h5>
                <p>Web Designer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img className="img-fluid" src={team4} alt="" />
                <div className="team-social-overlay">
                  <div className="team-social">
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a href="#" className="mx-1">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-items">
                <h5>Jhon Doe</h5>
                <p>Web Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamWrapper;
