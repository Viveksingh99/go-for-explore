import Image from "next/image";
import React from "react";

const UpcomingTrips = () => {
  return (
    <>
      <section className="upcoming">
        <div className="container">
          <div className="section-title mb-6 mx-auto text-center">
            {/* <h4 class="mb-1 theme1">Top Offers</h4> */}
            <h2 className="mb-1">
              Upcoming <span className="theme">Trips</span> Packages
            </h2>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
    </p> */}
          </div>
          <div className="row justify-content-center">
            <div className="upcoming-trips-slider">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a href="https://go4explore.com/trips/kazakhstan-5d4n"></a>
                <div className="trend-item box-shadow rounded">
                  <a href="https://go4explore.com/trips/kazakhstan-5d4n">
                    <div className="trend-image position-relative">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/10635320231113122348.png"
                        alt="upcoming-trips"
                      />
                      <div className="color-overlay" />
                    </div>
                  </a>
                  <div className="trend-content position-relative">
                    <a href="https://go4explore.com/trips/kazakhstan-5d4n">
                      <div className="trend-meta bg-theme white px-3 py-2 rounded">
                        <div className="entry-author">
                          <span className="">
                            <i className="bi bi-clock-fill" />5 Days 4 Nights
                          </span>
                        </div>
                      </div>
                    </a>
                    <h3 className="mb-1">
                      <a href="https://go4explore.com/trips/kazakhstan-5d4n" />
                      <a href="https://go4explore.com/trips/kazakhstan-5d4n">
                        Kazakhstan- 5D4N
                      </a>
                    </h3>
                    <p className=" border-b pb-2 mb-1" />
                    <div className="entry-meta">
                      <div className="entry-author d-flex align-items-center">
                        <p className="mb-0">₹45000 | Per person</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer"></a>
                <div className="trend-item box-shadow rounded">
                  <a href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer">
                    <div className="trend-image position-relative">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/39972720231024132811.png"
                        alt="upcoming-trips"
                      />
                      <div className="color-overlay" />
                    </div>
                  </a>
                  <div className="trend-content position-relative">
                    <a href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer">
                      <div className="trend-meta bg-theme white px-3 py-2 rounded">
                        <div className="entry-author">
                          <span className="">
                            <i className="bi bi-clock-fill" />6 Days 5 Nights
                          </span>
                        </div>
                      </div>
                    </a>
                    <h3 className="mb-1">
                      <a href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer" />
                      <a href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer">
                        Rajasthan Backpacking- Udaipur Jodhpur Jaisalmer
                      </a>
                    </h3>
                    <p className=" border-b pb-2 mb-1" />
                    <div className="entry-meta">
                      <div className="entry-author d-flex align-items-center">
                        <p className="mb-0">
                          <s>₹ 21499</s> ₹19999 | Per person
                        </p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a href="https://go4explore.com/trips/vietnam-signature-10d9n"></a>
                <div className="trend-item box-shadow rounded">
                  <a href="https://go4explore.com/trips/vietnam-signature-10d9n">
                    <div className="trend-image position-relative">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/396320230630111014.png"
                        alt="upcoming-trips"
                      />
                      <div className="ribbon ribbon-top-left">
                        <span className="fw-bold">₹5000 OFF</span>
                      </div>
                      <div className="color-overlay" />
                    </div>
                  </a>
                  <div className="trend-content position-relative">
                    <a href="https://go4explore.com/trips/vietnam-signature-10d9n">
                      <div className="trend-meta bg-theme white px-3 py-2 rounded">
                        <div className="entry-author">
                          <span className="">
                            <i className="bi bi-clock-fill" />
                            10 Days 9 Nights
                          </span>
                        </div>
                      </div>
                    </a>
                    <h3 className="mb-1">
                      <a href="https://go4explore.com/trips/vietnam-signature-10d9n" />
                      <a href="https://go4explore.com/trips/vietnam-signature-10d9n">
                        Vietnam Signature - 10D9N
                      </a>
                    </h3>
                    <p className=" border-b pb-2 mb-1" />
                    <div className="entry-meta">
                      <div className="entry-author d-flex align-items-center">
                        <p className="mb-0">
                          <s>₹ 75000</s> ₹70000 | Per person
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a href="https://go4explore.com/trips/leh-ladakh-with-turtuk"></a>
                <div className="trend-item box-shadow rounded">
                  <a href="https://go4explore.com/trips/leh-ladakh-with-turtuk">
                    <div className="trend-image position-relative">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/36351120230330170705.png"
                        alt="upcoming-trips"
                      />
                      <div className="ribbon ribbon-top-left">
                        <span className="fw-bold">₹5500 OFF</span>
                      </div>
                      <div className="color-overlay" />
                    </div>
                  </a>
                  <div className="trend-content position-relative">
                    <a href="https://go4explore.com/trips/leh-ladakh-with-turtuk">
                      <div className="trend-meta bg-theme white px-3 py-2 rounded">
                        <div className="entry-author">
                          <span className="">
                            <i className="bi bi-clock-fill" />7 Days 6 Nights
                          </span>
                        </div>
                      </div>
                    </a>
                    <h3 className="mb-1">
                      <a href="https://go4explore.com/trips/leh-ladakh-with-turtuk" />
                      <a href="https://go4explore.com/trips/leh-ladakh-with-turtuk">
                        Leh Ladakh with Turtuk
                      </a>
                    </h3>
                    <p className=" border-b pb-2 mb-1" />
                    <div className="entry-meta">
                      <div className="entry-author d-flex align-items-center">
                        <p className="mb-0">
                          <s>₹ 27000</s> ₹21500 | Per person
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a href="https://go4explore.com/trips/meghalaya-backpacking"></a>
                <div className="trend-item box-shadow rounded">
                  <a href="https://go4explore.com/trips/meghalaya-backpacking">
                    <div className="trend-image position-relative">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/33104120220720040415.png"
                        alt="upcoming-trips"
                      />
                      <div className="color-overlay" />
                    </div>
                  </a>
                  <div className="trend-content position-relative">
                    <a href="https://go4explore.com/trips/meghalaya-backpacking">
                      <div className="trend-meta bg-theme white px-3 py-2 rounded">
                        <div className="entry-author">
                          <span className="">
                            <i className="bi bi-clock-fill" />6 Days 5 Nights
                          </span>
                        </div>
                      </div>
                    </a>
                    <h3 className="mb-1">
                      <a href="https://go4explore.com/trips/meghalaya-backpacking" />
                      <a href="https://go4explore.com/trips/meghalaya-backpacking">
                        Meghalaya Backpacking
                      </a>
                    </h3>
                    <p className=" border-b pb-2 mb-1" />
                    <div className="entry-meta">
                      <div className="entry-author d-flex align-items-center">
                        <p className="mb-0">₹21000 | Per person</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip"></a>
                <div className="trend-item box-shadow rounded">
                  <a href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip">
                    <div className="trend-image position-relative">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/15700420230330171626.png"
                        alt="upcoming-trips"
                      />
                      <div className="ribbon ribbon-top-left">
                        <span className="fw-bold">₹7000 OFF</span>
                      </div>
                      <div className="color-overlay" />
                    </div>
                  </a>
                  <div className="trend-content position-relative">
                    <a href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip">
                      <div className="trend-meta bg-theme white px-3 py-2 rounded">
                        <div className="entry-author">
                          <span className="">
                            <i className="bi bi-clock-fill" />9 Days 8 Nights
                          </span>
                        </div>
                      </div>
                    </a>
                    <h3 className="mb-1">
                      <a href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip" />
                      <a href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip">
                        Manali Leh Backpacking Bike Trip
                      </a>
                    </h3>
                    <p className=" border-b pb-2 mb-1" />
                    <div className="entry-meta">
                      <div className="entry-author d-flex align-items-center">
                        <p className="mb-0">
                          <s>₹ 37000</s> ₹30000 | Per person
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a href="https://go4explore.com/trips/winter-spiti"></a>
                <div className="trend-item box-shadow rounded">
                  <a href="https://go4explore.com/trips/winter-spiti">
                    <div className="trend-image position-relative">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/20380220200228132700.png"
                        alt="upcoming-trips"
                      />
                      <div className="color-overlay" />
                    </div>
                  </a>
                  <div className="trend-content position-relative">
                    <a href="https://go4explore.com/trips/winter-spiti">
                      <div className="trend-meta bg-theme white px-3 py-2 rounded">
                        <div className="entry-author">
                          <span className="">
                            <i className="bi bi-clock-fill" />7 Days 6 Nights
                          </span>
                        </div>
                      </div>
                    </a>
                    <h3 className="mb-1">
                      <a href="https://go4explore.com/trips/winter-spiti" />
                      <a href="https://go4explore.com/trips/winter-spiti">
                        Winter Spiti
                      </a>
                    </h3>
                    <p className=" border-b pb-2 mb-1" />
                    <div className="entry-meta">
                      <div className="entry-author d-flex align-items-center">
                        <p className="mb-0">₹17999 | Per person</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a href="https://go4explore.com/trips/chopta-tungnath-deoriatal"></a>
                <div className="trend-item box-shadow rounded">
                  <a href="https://go4explore.com/trips/chopta-tungnath-deoriatal">
                    <div className="trend-image position-relative">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/24503320230702175334.png"
                        alt="upcoming-trips"
                      />
                      <div className="color-overlay" />
                    </div>
                  </a>
                  <div className="trend-content position-relative">
                    <a href="https://go4explore.com/trips/chopta-tungnath-deoriatal">
                      <div className="trend-meta bg-theme white px-3 py-2 rounded">
                        <div className="entry-author">
                          <span className="">
                            <i className="bi bi-clock-fill" />3 Days 2 Nights
                          </span>
                        </div>
                      </div>
                    </a>
                    <h3 className="mb-1">
                      <a href="https://go4explore.com/trips/chopta-tungnath-deoriatal" />
                      <a href="https://go4explore.com/trips/chopta-tungnath-deoriatal">
                        Chopta-Tungnath-Deoriatal
                      </a>
                    </h3>
                    <p className=" border-b pb-2 mb-1" />
                    <div className="entry-meta">
                      <div className="entry-author d-flex align-items-center">
                        <p className="mb-0">
                          <s>₹ 6999</s> ₹6499 | Per person
                        </p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingTrips;
