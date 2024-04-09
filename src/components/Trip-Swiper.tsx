"use client";
import Image from "next/image";
import Link from "next/link";
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

const TripSwiper = () => {
  return (
    <>
      <section className="py-5 my-lg-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="travel-gossips-slider">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  slidesPerView={1}
                  autoplay={{ delay: 3000 }}
                >
                  <SwiperSlide>
                    <Link href="https://go4explore.com/trip/kazakhstan-tour-packages">
                      <Image
                        width={1200}
                        height={1200}
                        className="img-fluid rounded"
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/23484720240316105741.png"
                        alt="travel-gossips"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link href="https://go4explore.com/trip/vietnam">
                      <Image
                        width={1200}
                        height={1200}
                        className="img-fluid rounded"
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/10613820240316105652.png"
                        alt="travel-gossips"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link href="https://go4explore.com/trip/thailand">
                      <Image
                        width={1200}
                        height={1200}
                        className="img-fluid rounded"
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/12127320240316105633.png"
                        alt="travel-gossips"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link href="https://go4explore.com/trip/bali">
                      <Image
                        width={1200}
                        height={1200}
                        className="img-fluid rounded"
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/36727320240316105558.png"
                        alt="travel-gossips"
                      />
                    </Link>
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

export default TripSwiper;
