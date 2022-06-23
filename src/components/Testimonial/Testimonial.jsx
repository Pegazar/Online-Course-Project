import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Thumbs } from "swiper";
import testimonial1 from "../../img/testimonial-1.jpg";
import testimonial2 from "../../img/testimonial-2.jpg";
import testimonial3 from "../../img/testimonial-3.jpg";
import "./Testimonial.css";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <div className="testimonial py-5">
      <div className="container py-5">
        <div className="testi-title">
          <h5>Testimonial</h5>
          <h1>What Say Our Students</h1>
        </div>
        <Swiper
          modules={[Pagination, Autoplay, Thumbs]}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          loop={true}
          autoplay={true}
          thumbs={true}
          className="mySwiper testi-res"
        >
          <SwiperSlide>
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="testimonial-item">
                  <div className="testimonial-items">
                    <i className="fa-solid fa-quote-left" />
                    <h4>
                      Dolor eirmod diam stet kasd sed. Aliqu rebum est eos.
                      Rebum elitr dolore et eos labore, stet justo sed est sed.
                      Diam sed sed dolor stet amet eirmod eos labore diam
                    </h4>
                    <img className="img-fluid" src={testimonial1} alt="" />
                    <h5>Client Name</h5>
                    <span>Profession</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="testimonial-item">
                  <div className="testimonial-items">
                    <i className="fa-solid fa-quote-left" />
                    <h4>
                      Dolor eirmod diam stet kasd sed. Aliqu rebum est eos.
                      Rebum elitr dolore et eos labore, stet justo sed est sed.
                      Diam sed sed dolor stet amet eirmod eos labore diam
                    </h4>
                    <img className="img-fluid" src={testimonial2} alt="" />
                    <h5>Client Name</h5>
                    <span>Profession</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="testimonial-item">
                  <div className="testimonial-items">
                    <i className="fa-solid fa-quote-left" />
                    <h4>
                      Dolor eirmod diam stet kasd sed. Aliqu rebum est eos.
                      Rebum elitr dolore et eos labore, stet justo sed est sed.
                      Diam sed sed dolor stet amet eirmod eos labore diam
                    </h4>
                    <img className="img-fluid" src={testimonial3} alt="" />
                    <h5>Client Name</h5>
                    <span>Profession</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
