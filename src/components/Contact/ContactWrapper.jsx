import React from 'react'
import "./ContactWrapper.css"
import headerbg from "../../img/page-header.jpg"
import { Link } from "react-router-dom";

const ContactWrapper = () => {
  return (
    <div className="ContactWrapper">
        <div className="contact-bg">
            <div className="contact-img-box">
                <img src={headerbg} alt=""/>
                <span></span>
                <div className="contact-wrapper-title">
                    <h3>Contact</h3>
                    <div className="d-flex">
                        <p>
                            <Link to="/">Home</Link>
                        </p>
                        <i className="fa-solid fa-angles-right"/>
                        <p className="text-uppercase text-white">Contact</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-90 ">
            <div className="con-title text-center mb-5">
                <h5>Contact</h5>
                <h1>Contact For Any Query</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-form">
                        <form action="#">
                            <div className="control-group">
                                <input 
                                    type="text" 
                                    className="form-control p-4 mb-3" 
                                    placeholder="Your Name" 
                                />
                            </div>
                            <div className="control-group">
                                <input 
                                    type="email" 
                                    className="form-control p-4 mb-3" 
                                    placeholder="Your Email" 
                                />
                            </div>
                            <div className="control-group">
                                <input 
                                    type="text" 
                                    className="form-control p-4 mb-3" 
                                    placeholder="Subject" 
                                />
                            </div>
                            <div className="control-group">
                                <textarea 
                                    rows="5"
                                    className="form-control p-4 mb-3" 
                                    placeholder="Message" 
                                />
                            </div>
                            <div className="text-center">
                                <button>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactWrapper