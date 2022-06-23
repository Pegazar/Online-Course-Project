import React from "react";
import "./BlogDetail.css";
import "./BlogGrid.css";
import headerbg from "../../img/page-header.jpg";
import { Link } from "react-router-dom";
import user from "../../img/user.jpg";
import blog80 from "../../img/blog-80x80.jpg";
import carousel from "../../img/carousel-1.jpg";
import blog1 from "../../img/blog-1.jpg";

const BlogDetail = () => {
  return (
    <div className="BlogDetail">
      <div className="blogdetail-bg">
        <div className="bt-img-box">
          <img src={headerbg} alt="" />
          <span></span>
          <div className="bt-wrapper-title">
            <h3>Single</h3>
            <div className="d-flex">
              <p>
                <Link to="/">Home</Link>
              </p>
              <i className="fa-solid fa-angles-right" />
              <p className="text-uppercase text-white">Single</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-90">
        <div className="row">
          <div className="col-lg-8">
            <div className="bt-about mb-5">
              <h6>Jan 01, 2050</h6>
              <h1>
                Vero ipsum sea justo dolore eirmod amet dolor tempor lorem
              </h1>
              <img className="img-fluid" src={carousel} alt="" />
              <p>
                Sadipscing labore amet rebum est et justo gubergren. Et eirmod
                ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus
                rebum et lorem magna kasd, stet amet magna accusam consetetur
                eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et.
                Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                aliquyam ut et vero clita. Diam sea sea no sed dolores diam
                nonumy, gubergren sit stet no diam kasd vero.
              </p>
              <p>
                Voluptua est takimata stet invidunt sed rebum nonumy stet, clita
                aliquyam dolores vero stet consetetur elitr takimata rebum
                sanctus. Sit sed accusam stet sit nonumy kasd diam dolores,
                sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo
                sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo
                et, clita lorem sit vero amet amet est dolor elitr, stet et no
                diam sit. Dolor erat justo dolore sit invidunt.
              </p>
              <h2>Est dolor lorem et ea</h2>
              <img className="img-fluid w-50 float-left" src={blog1} alt="" />
              <p>
                Diam dolor est labore duo invidunt ipsum clita et, sed et lorem
                voluptua tempor invidunt at est sanctus sanctus. Clita dolores
                sit kasd diam takimata justo diam lorem sed. Magna amet sed
                rebum eos. Clita no magna no dolor erat diam tempor rebum
                consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No
                at tempor sea diam kasd, takimata ea nonumy elitr sadipscing
                gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit
                amet ut ut, voluptua diam dolores at sadipscing stet. Clita
                dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores
                takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et,
                magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus
                ut consetetur et. Et duo tempor sea kasd clita ipsum et.
                Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed
                sadipscing no justo et eos labore, gubergren ipsum magna dolor
                lorem dolore, elitr aliquyam takimata sea kasd dolores diam,
                amet et est accusam labore eirmod vero et voluptua. Amet labore
                clita duo et no. Rebum voluptua magna eos magna, justo gubergren
                labore sit.
              </p>
              <p>
                Diam dolor est labore duo invidunt ipsum clita et, sed et lorem
                voluptua tempor invidunt at est sanctus sanctus. Clita dolores
                sit kasd diam takimata justo diam lorem sed. Magna amet sed
                rebum eos. Clita no magna no dolor erat diam tempor rebum
                consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No
                at tempor sea diam kasd, takimata ea nonumy elitr sadipscing
                gubergren erat.
              </p>
            </div>
            <div className="bt-comment">
              <h3>3 Comments</h3>
              <div className="media">
                <img className="img-fluid" src={user} alt="" />
                <div className="media-body">
                  <h6>
                    John Doe
                    <small>
                      <i> 01 Jan 2045 at 12:00pm</i>
                    </small>
                  </h6>
                  <p>
                    Diam amet duo labore stet elitr ea clita ipsum, tempor
                    labore accusam ipsum et no at. Kasd diam tempor rebum magna
                    dolores sed sed eirmod ipsum. Gubergren clita aliquyam
                    consetetur sadipscing, at tempor amet ipsum diam tempor
                    consetetur at sit.
                  </p>
                  <button className="btn btn-sm btn-secondary">Reply</button>
                </div>
              </div>
              <div className="media">
                <img className="img-fluid" src={user} alt="" />
                <div className="media-body">
                  <h6>
                    John Doe
                    <small>
                      <i> 01 Jan 2045 at 12:00pm</i>
                    </small>
                  </h6>
                  <p>
                    Diam amet duo labore stet elitr ea clita ipsum, tempor
                    labore accusam ipsum et no at. Kasd diam tempor rebum magna
                    dolores sed sed eirmod ipsum. Gubergren clita aliquyam
                    consetetur sadipscing, at tempor amet ipsum diam tempor
                    consetetur at sit.
                  </p>
                  <button className="btn btn-sm btn-secondary">Reply</button>
                  <div className="media">
                    <img className="img-fluid" src={user} alt="" />
                    <div className="media-body">
                      <h6>
                        John Doe
                        <small>
                          <i> 01 Jan 2045 at 12:00pm</i>
                        </small>
                      </h6>
                      <p>
                        Diam amet duo labore stet elitr ea clita ipsum, tempor
                        labore accusam ipsum et no at. Kasd diam tempor rebum
                        magna dolores sed sed eirmod ipsum. Gubergren clita
                        aliquyam consetetur sadipscing, at tempor amet ipsum
                        diam tempor consetetur at sit.
                      </p>
                      <button className="btn btn-sm btn-secondary">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bt-form">
                <h3>Leave a comment</h3>
                <form action="">
                    <div className="form-group">
                        <label for="name">Name *</label>
                        <input type="text" name="name" className="form-control"  />
                    </div>
                    <div className="form-group">
                        <label for="email">Email *</label>
                        <input type="email" name="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="website">Website</label>
                        <input type="url" name="website" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="message">Message *</label>
                        <textarea name="message" cols="30" rows="5" className="form-control"></textarea>
                    </div>
                    <div>
                        <button>Leave Comment</button>
                    </div>
                </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="bg-box">
                  <img className="img-fluid rounded-circle" src={user} alt="" />
                  <h3>John Doe</h3>
                  <h3>Tag Cloud</h3>
                  <p>
                    Conset elitr erat vero dolor ipsum et diam, eos dolor lorem,
                    ipsum sit no ut est ipsum erat kasd amet elitr
                  </p>
                </div>
                <div className="bg-searchbar">
                  <form action="#">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Keyword"
                      />
                      <div className="input-group-append">
                        <span>
                          <i className="fa-solid fa-magnifying-glass" />
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

export default BlogDetail;
