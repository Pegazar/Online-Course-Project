import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact">
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-7 mb-5 mb-lg-0">
                    <div className="contact-title">
                        <h5>Need any courses</h5>
                        <h1>30% Off For New Students</h1>
                    </div>
                    <p className="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                    <ul className="list-inline">
                        <li className="py-2">
                            <i className="fa-solid fa-check" />
                            <span>Labore eos amet dolor amet diam</span>
                        </li>
                        <li className="py-2">
                            <i className="fa-solid fa-check" />
                            <span>Etsea et sit dolor amet ipsum</span>
                        </li>
                        <li className="py-2">
                            <i className="fa-solid fa-check" />
                            <span>Diam dolor diam elitripsum vero.</span>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-5">
                    <div className="contact-box">
                        <div className="c-box-title">
                            <h1>Sign Up Now</h1>
                        </div>
                        <div className="form-area">
                            <form action="">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Your Name"
                                        required="required"
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Your Email"
                                        required="required"
                                    />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select form-control">
                                        <option selected>Select a course</option>
                                        <option value="1">Course 1</option>
                                        <option value="2">Course 2</option>
                                        <option value="3">Course 3</option>
                                    </select>
                                </div>
                                <div>
                                    <button type="submit">Sign Up Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact