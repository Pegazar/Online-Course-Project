import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Thumbs } from "swiper";
import carousel from "../../img/carousel-1.jpg";
import carousel2 from "../../img/carousel-2.jpg";
import carousel3 from "../../img/carousel-3.jpg";
import "./Heading.css";
import "swiper/css";
import "swiper/css/pagination";
import "bootstrap";

const Heading = () => {
  return (
    <>
      <div className="heading">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          loop={true}
          thumbs={true}
          autoplay={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay, Thumbs]}
          className="mySwiper swiper-res"
        >
          <SwiperSlide>
            <div className="img-box">
              <img src={carousel} alt="" />
              <span></span>
            </div>
            <div className="heading-wrapper">
              <div className="h-item">
                <div className="h-items">
                  <h5>Best online courses</h5>
                  <h1>
                    Best Education From <br />
                    Your Home
                  </h1>
                  <a href="#" className="a-btn">Learn More</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-box">
              <img src={carousel2} alt="" />
              <span></span>
            </div>
            <div className="heading-wrapper">
              <div className="h-item">
                <div className="h-items">
                  <h5>Best online courses</h5>
                  <h1>
                    Best Online Learning <br />
                    Platform
                  </h1>
                  <a href="#" className="a-btn">Learn More</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-box">
              <img src={carousel3} alt="" />
              <span></span>
            </div>
            <div className="heading-wrapper">
              <div className="h-item">
                <div className="h-items">
                  <h5>Best online courses</h5>
                  <h1>
                    New Way To Learn <br />
                    From Home
                  </h1>
                  <a href="#" className="a-btn">Learn More</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Heading;
