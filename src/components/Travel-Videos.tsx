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

const TravelVideos = () => {
  return (
    <>
      <section className="videos-gallery ">
        <div className="container">
          <div className="section-title mb-6 mx-auto text-center">
            <h2 className="mb-1">
              <span className="theme">Travel</span> Videos
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="travel-videos-slider">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={5}
                slidesPerView={4}
                autoplay={{ delay: 3000 }}
              >
                <SwiperSlide>
                  <div>
                    <div className="gallery-item mb-4 rounded overflow-hidden">
                      <div className="gallery-image">
                        <Image
                          width={1000}
                          height={1000}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 01.jpg"
                          alt="image"
                        />
                        <div className="popup-btn-box popup-btn" id="btn1">
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
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 02.jpg"
                          alt="image"
                        />
                        <div className="popup-btn-box popup-btn" id="btn2">
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
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 03.jpg"
                          alt="image"
                        />
                        <div className="popup-btn-box popup-btn" id="btn3">
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
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 04.jpg"
                          alt="image"
                        />
                        <div className="popup-btn-box popup-btn" id="btn4">
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
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 05.jpg"
                          alt="image"
                        />
                        <div className="popup-btn-box popup-btn" id="btn5">
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
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 06.jpg"
                          alt="image"
                        />
                        <div className="popup-btn-box popup-btn" id="btn6">
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
                      <div className="gallery-image" id="btn7">
                        <Image
                          width={1000}
                          height={1000}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 07.jpg"
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
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 08.jpg"
                          alt="image"
                        />
                        <div className="popup-btn-box popup-btn" id="btn8">
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
      </section>
    </>
  );
};

export default TravelVideos;
