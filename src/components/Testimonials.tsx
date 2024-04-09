"use client";
import Image from "next/image";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <>
      <section className="testimonails">
        <div className="container">
          <div className="section-title mb-6 text-center w-75 mx-auto">
            <h2 className="mb-1">Testimonials</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9 col-xl-8">
              <div className="testimonials-slider">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  slidesPerView={1}
                  autoplay={{ delay: 3000 }}
                >
                  <SwiperSlide>
                    <div>
                      <div className="gallery-item mb-4 rounded overflow-hidden">
                        <div className="gallery-image">
                          <Image
                            width={1000}
                            height={1000}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/testimonials.jpg"
                            alt="image"
                          />
                          <div className="popup-btn-box popup-btn">
                            <Image
                              width={1000}
                              height={1000}
                              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                              alt="image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="gallery-item mb-4 rounded overflow-hidden">
                        <div className="gallery-image">
                          <Image
                            width={1000}
                            height={1000}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/testimonials2.jpg"
                            alt="image"
                          />
                          <div className="popup-btn-box popup-btn" id="btn10">
                            <Image
                              width={1000}
                              height={1000}
                              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                              alt="image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
