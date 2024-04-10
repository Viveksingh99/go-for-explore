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

const ExploreTop = () => {
  return (
    <>
      <section className="best-saller">
        <div className="container">
          <div className="section-title mb-6 mx-auto text-center">
            <h2 className="mb-1">
              Explore <span className="theme">Top</span> Destinations
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="upcoming-trips-slider">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={5}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
              >
                <SwiperSlide>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <Link href="https://go4explore.com/trips/kazakhstan-5d4n"></Link>
                    <div className="trend-item box-shadow rounded">
                      <Link href="https://go4explore.com/trips/kazakhstan-5d4n">
                        <div className="trend-image position-relative">
                          <Image
                            width={800}
                            height={800}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/10635320231113122348.png"
                            alt="upcoming-trips"
                            style={{ width: 264, height: 148 }}
                          />
                          <div className="color-overlay" />
                        </div>
                      </Link>
                      <div className="trend-content position-relative">
                        <Link href="https://go4explore.com/trips/kazakhstan-5d4n">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />5 Days 4
                                Nights
                              </span>
                            </div>
                          </div>
                        </Link>
                        <h3 className="mb-1">
                          <Link href="https://go4explore.com/trips/kazakhstan-5d4n" />
                          <Link href="https://go4explore.com/trips/kazakhstan-5d4n">
                            Kazakhstan- 5D4N
                          </Link>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <span className="theme fw-bold fs-5">₹45000</span>{" "}
                              | Per person
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <Link href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer"></Link>
                    <div className="trend-item box-shadow rounded">
                      <Link href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer">
                        <div className="trend-image position-relative">
                          <Image
                            width={800}
                            height={800}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/39972720231024132811.png"
                            alt="upcoming-trips"
                            style={{ width: 264, height: 148 }}
                          />
                          <div className="color-overlay" />
                        </div>
                      </Link>
                      <div className="trend-content position-relative">
                        <Link href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />6 Days 5
                                Nights
                              </span>
                            </div>
                          </div>
                        </Link>
                        <h3 className="mb-1">
                          <Link href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer" />
                          <Link href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer">
                            Rajasthan Backpacking- Udaipur Jodhpur Jaisalmer
                          </Link>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <span className="theme fw-bold fs-5">₹21499</span>{" "}
                              | Per person
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <Link href="https://go4explore.com/trips/vietnam-signature-10d9n"></Link>
                    <div className="trend-item box-shadow rounded">
                      <Link href="https://go4explore.com/trips/vietnam-signature-10d9n">
                        <div className="trend-image position-relative">
                          <Image
                            width={800}
                            height={800}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/396320230630111014.png"
                            alt="upcoming-trips"
                            style={{ width: 264, height: 148 }}
                          />
                          <div className="ribbon ribbon-top-left">
                            <span className="fw-bold">₹5000 OFF</span>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </Link>
                      <div className="trend-content position-relative">
                        <Link href="https://go4explore.com/trips/vietnam-signature-10d9n">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />
                                10 Days 9 Nights
                              </span>
                            </div>
                          </div>
                        </Link>
                        <h3 className="mb-1">
                          <Link href="https://go4explore.com/trips/vietnam-signature-10d9n" />
                          <Link href="https://go4explore.com/trips/vietnam-signature-10d9n">
                            Vietnam Signature - 10D9N
                          </Link>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <span className="line-through">₹75000</span>
                              <span className="theme fw-bold fs-5">
                                {" "}
                                ₹70000
                              </span>{" "}
                              | | Per person
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <Link href="https://go4explore.com/trips/leh-ladakh-with-turtuk"></Link>
                    <div className="trend-item box-shadow rounded">
                      <Link href="https://go4explore.com/trips/leh-ladakh-with-turtuk">
                        <div className="trend-image position-relative">
                          <Image
                            width={800}
                            height={800}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/36351120230330170705.png"
                            alt="upcoming-trips"
                            style={{ width: 264, height: 148 }}
                          />
                          <div className="ribbon ribbon-top-left">
                            <span className="fw-bold">₹5500 OFF</span>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </Link>
                      <div className="trend-content position-relative">
                        <Link href="https://go4explore.com/trips/leh-ladakh-with-turtuk">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />7 Days 6
                                Nights
                              </span>
                            </div>
                          </div>
                        </Link>
                        <h3 className="mb-1">
                          <Link href="https://go4explore.com/trips/leh-ladakh-with-turtuk" />
                          <Link href="https://go4explore.com/trips/leh-ladakh-with-turtuk">
                            Leh Ladakh with Turtuk
                          </Link>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <span className="line-through">₹27000</span>
                              <span className="theme fw-bold fs-5">
                                {" "}
                                ₹21500
                              </span>{" "}
                              | | Per person
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <Link href="https://go4explore.com/trips/meghalaya-backpacking"></Link>
                    <div className="trend-item box-shadow rounded">
                      <Link href="https://go4explore.com/trips/meghalaya-backpacking">
                        <div className="trend-image position-relative">
                          <Image
                            width={800}
                            height={800}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/33104120220720040415.png"
                            alt="upcoming-trips"
                            style={{ width: 264, height: 148 }}
                          />
                          <div className="color-overlay" />
                        </div>
                      </Link>
                      <div className="trend-content position-relative">
                        <Link href="https://go4explore.com/trips/meghalaya-backpacking">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />6 Days 5
                                Nights
                              </span>
                            </div>
                          </div>
                        </Link>
                        <h3 className="mb-1">
                          <Link href="https://go4explore.com/trips/meghalaya-backpacking" />
                          <Link href="https://go4explore.com/trips/meghalaya-backpacking">
                            Meghalaya Backpacking
                          </Link>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <span className="theme fw-bold fs-5">₹21000</span>{" "}
                              | Per person
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <Link href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip"></Link>
                    <div className="trend-item box-shadow rounded">
                      <Link href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip">
                        <div className="trend-image position-relative">
                          <Image
                            width={800}
                            height={800}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/15700420230330171626.png"
                            alt="upcoming-trips"
                            style={{ width: 264, height: 148 }}
                          />
                          <div className="ribbon ribbon-top-left">
                            <span className="fw-bold">₹7000 OFF</span>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </Link>
                      <div className="trend-content position-relative">
                        <Link href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />9 Days 8
                                Nights
                              </span>
                            </div>
                          </div>
                        </Link>
                        <h3 className="mb-1">
                          <Link href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip" />
                          <Link href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip">
                            Manali Leh Backpacking Bike Trip
                          </Link>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <span className="line-through">₹37000</span>
                              <span className="theme fw-bold fs-5">
                                {" "}
                                ₹30000
                              </span>{" "}
                              | | Per person
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <Link href="https://go4explore.com/trips/winter-spiti"></Link>
                    <div className="trend-item box-shadow rounded">
                      <Link href="https://go4explore.com/trips/winter-spiti">
                        <div className="trend-image position-relative">
                          <Image
                            width={800}
                            height={800}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/20380220200228132700.png"
                            alt="upcoming-trips"
                            style={{ width: 264, height: 148 }}
                          />
                          <div className="color-overlay" />
                        </div>
                      </Link>
                      <div className="trend-content position-relative">
                        <Link href="https://go4explore.com/trips/winter-spiti">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />7 Days 6
                                Nights
                              </span>
                            </div>
                          </div>
                        </Link>
                        <h3 className="mb-1">
                          <Link href="https://go4explore.com/trips/winter-spiti" />
                          <Link href="https://go4explore.com/trips/winter-spiti">
                            Winter Spiti
                          </Link>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <span className="theme fw-bold fs-5">₹17999</span>{" "}
                              | Per person
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <Link href="https://go4explore.com/trips/chopta-tungnath-deoriatal"></Link>
                    <div className="trend-item box-shadow rounded">
                      <Link href="https://go4explore.com/trips/chopta-tungnath-deoriatal">
                        <div className="trend-image position-relative">
                          <Image
                            width={800}
                            height={800}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/24503320230702175334.png"
                            alt="upcoming-trips"
                            style={{ width: 264, height: 148 }}
                          />
                          <div className="color-overlay" />
                        </div>
                      </Link>
                      <div className="trend-content position-relative">
                        <Link href="https://go4explore.com/trips/chopta-tungnath-deoriatal">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />3 Days 2
                                Nights
                              </span>
                            </div>
                          </div>
                        </Link>
                        <h3 className="mb-1">
                          <Link href="https://go4explore.com/trips/chopta-tungnath-deoriatal" />
                          <Link href="https://go4explore.com/trips/chopta-tungnath-deoriatal">
                            Chopta-Tungnath-Deoriatal
                          </Link>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <span className="theme fw-bold fs-5">₹6999</span>{" "}
                              | Per person
                            </p>
                          </div>
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

export default ExploreTop;
