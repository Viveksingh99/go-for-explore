import Hero from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        {/*---- HERO SECTION ----*/}
        <Hero/>
        {/*---- HERO SECTION ----*/}
        
        {/* TRIP CATEGORIES  */}
        <section className="categories">
          <div className="container">
            <div className="section-title mb-6 mx-auto text-center">
              <h2 className="mb-1">
                Trip <span className="theme">Categories</span>
              </h2>
            </div>
            <div className="trip-categories-slider">
              <div className="col-auto" style={{ textAlign: "center" }}>
                <div className="text-center who-are-we-steps mx-auto">
                  <a
                    className="moveto"
                    href="https://go4explore.com/trips-category/weekend-trips"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-100"
                      src="https://d2qa7a8q0vuocm.cloudfront.net/images/15267120230306143345.png"
                      alt="trekking"
                    />
                    <p className="fs-2md fw-bold mt-3">Weekend Trips</p>
                  </a>
                </div>
              </div>
              <div className="col-auto" style={{ textAlign: "center" }}>
                <div className="text-center who-are-we-steps mx-auto">
                  <a
                    className="moveto"
                    href="https://go4explore.com/trips-category/honeymoon-packages"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-100"
                      src="https://d2qa7a8q0vuocm.cloudfront.net/images/11725720200405174358.png"
                      alt="trekking"
                    />
                    <p className="fs-2md fw-bold mt-3">Honeymoon Packages</p>
                  </a>
                </div>
              </div>
              <div className="col-auto" style={{ textAlign: "center" }}>
                <div className="text-center who-are-we-steps mx-auto">
                  <a
                    className="moveto"
                    href="https://go4explore.com/trips-category/backpacking-trips"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-100"
                      src="https://d2qa7a8q0vuocm.cloudfront.net/images/39798620200405174840.png"
                      alt="trekking"
                    />
                    <p className="fs-2md fw-bold mt-3">Backpacking Trips</p>
                  </a>
                </div>
              </div>
              <div className="col-auto" style={{ textAlign: "center" }}>
                <div className="text-center who-are-we-steps mx-auto">
                  <a
                    className="moveto"
                    href="https://go4explore.com/trips-category/camping-trip"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-100"
                      src="https://d2qa7a8q0vuocm.cloudfront.net/images/30756620200405174916.png"
                      alt="trekking"
                    />
                    <p className="fs-2md fw-bold mt-3">Camping Trip</p>
                  </a>
                </div>
              </div>
              <div className="col-auto" style={{ textAlign: "center" }}>
                <div className="text-center who-are-we-steps mx-auto">
                  <a
                    className="moveto"
                    href="https://go4explore.com/trips-category/international-trips"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-100"
                      src="https://d2qa7a8q0vuocm.cloudfront.net/images/1819020200405174929.png"
                      alt="trekking"
                    />
                    <p className="fs-2md fw-bold mt-3">International Trips</p>
                  </a>
                </div>
              </div>
              <div className="col-auto" style={{ textAlign: "center" }}>
                <div className="text-center who-are-we-steps mx-auto">
                  <a
                    className="moveto"
                    href="https://go4explore.com/trips-category/trekking"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-100"
                      src="https://d2qa7a8q0vuocm.cloudfront.net/images/21029520200405174947.png"
                      alt="trekking"
                    />
                    <p className="fs-2md fw-bold mt-3">Trekking</p>
                  </a>
                </div>
              </div>
              <div className="col-auto" style={{ textAlign: "center" }}>
                <div className="text-center who-are-we-steps mx-auto">
                  <a
                    className="moveto"
                    href="https://go4explore.com/trips-category/corporate-trips"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-100"
                      src="https://d2qa7a8q0vuocm.cloudfront.net/images/13110120200405175000.png"
                      alt="trekking"
                    />
                    <p className="fs-2md fw-bold mt-3">Corporate Trips</p>
                  </a>
                </div>
              </div>
              <div className="col-auto" style={{ textAlign: "center" }}>
                <div className="text-center who-are-we-steps mx-auto">
                  <a
                    className="moveto"
                    href="https://go4explore.com/trips-category/road-trips"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-100"
                      src="https://d2qa7a8q0vuocm.cloudfront.net/images/29976920200405175031.png"
                      alt="trekking"
                    />
                    <p className="fs-2md fw-bold mt-3">Road Trips</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="trending pb-0 pt-6"
          style={{
            backgroundImage:
              "url(https://d2qa7a8q0vuocm.cloudfront.net/images/shape-1.png)",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="section-title mb-6 mx-auto text-center">
              <h2 className="mb-1">
                Best Trips Across <span className="theme">The Globe</span>
              </h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-5">
                <a href="https://go4explore.com/trip/vietnam">
                  <div className="trend-item1 mb-4">
                    <div className="trend-image position-relative rounded">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Vietnam.png"
                        alt="image"
                      />
                      <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                        <div className="trend-content-title">
                          <h3 className="mb-0 white">Vietnam</h3>
                        </div>
                      </div>
                      <div className="color-overlay" />
                    </div>
                  </div>
                </a>
                <a href="https://go4explore.com/trip/bali">
                  <div className="trend-item1 mb-4">
                    <div className="trend-image position-relative rounded">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Bali.png"
                        alt="image"
                      />
                      <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                        <div className="trend-content-title">
                          <h3 className="mb-0 white">Bali</h3>
                        </div>
                      </div>
                      <div className="color-overlay" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                    <a href="https://go4explore.com/trip/dubai">
                      <div className="trend-item1">
                        <div className="trend-image position-relative rounded">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Dubai.png"
                            alt="image"
                          />
                          <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                            <div className="trend-content-title">
                              <h3 className="mb-0 white">Dubai</h3>
                            </div>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                    <a href="https://go4explore.com/trip/kashmir">
                      <div className="trend-item1">
                        <div className="trend-image position-relative rounded">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Kashmir.png"
                            alt="image"
                          />
                          <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                            <div className="trend-content-title">
                              <h3 className="mb-0 white">Kashmir</h3>
                            </div>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                    <a href="https://go4explore.com/trip/kerala">
                      <div className="trend-item1">
                        <div className="trend-image position-relative rounded">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Kerala.png"
                            alt="image"
                          />
                          <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                            <div className="trend-content-title">
                              <h3 className="mb-0 white">Kerala</h3>
                            </div>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                    <a href="https://go4explore.com/trip/singapore">
                      <div className="trend-item1">
                        <div className="trend-image position-relative rounded">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Singapore.png"
                            alt="image"
                          />
                          <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                            <div className="trend-content-title">
                              <h3 className="mb-0 white">Singapore</h3>
                            </div>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
                    <a href="https://go4explore.com/trip/thailand">
                      <div className="trend-item1">
                        <div className="trend-image position-relative rounded">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Thailand.png"
                            alt="image"
                          />
                          <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                            <div className="trend-content-title">
                              <h3 className="mb-0 white">Thailand</h3>
                            </div>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                    <a href="https://go4explore.com/trip/himachal-pradesh-tour-packages">
                      <div className="trend-item1">
                        <div className="trend-image position-relative rounded">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Himachal-Pradesh.png"
                            alt="image"
                          />
                          <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                            <div className="trend-content-title">
                              <h3 className="mb-0 white">Himachal Pradesh</h3>
                            </div>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                    <a href="https://go4explore.com/trip/sri-lanka">
                      <div className="trend-item1">
                        <div className="trend-image position-relative rounded">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Sri-Lanka.png"
                            alt="image"
                          />
                          <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                            <div className="trend-content-title">
                              <h3 className="mb-0 white">Sri Lanka</h3>
                            </div>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                    <a href="https://go4explore.com/trip/maldives">
                      <div className="trend-item1">
                        <div className="trend-image position-relative rounded">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Maldives.png"
                            alt="image"
                          />
                          <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                            <div className="trend-content-title">
                              <h3 className="mb-0 white">Maldives</h3>
                            </div>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                    <a href="https://go4explore.com/trip/rajasthan">
                      <div className="trend-item1">
                        <div className="trend-image position-relative rounded">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Rajasthan.png"
                            alt="image"
                          />
                          <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                            <div className="trend-content-title">
                              <h3 className="mb-0 white">Rajasthan</h3>
                            </div>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                    <a href="https://go4explore.com/trip/azerbaijan">
                      <div className="trend-item1">
                        <div className="trend-image position-relative rounded">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/azerbaijan.png"
                            alt="image"
                          />
                          <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                            <div className="trend-content-title">
                              <h3 className="mb-0 white">Azerbaijan</h3>
                            </div>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                    <a href="https://go4explore.com/trip/turkey">
                      <div className="trend-item1">
                        <div className="trend-image position-relative rounded">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Turkey.png"
                            alt="image"
                          />
                          <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                            <div className="trend-content-title">
                              <h3 className="mb-0 white">Turkey</h3>
                            </div>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
                    <a href="https://go4explore.com/trip/georgia">
                      <div className="trend-item1">
                        <div className="trend-image position-relative rounded">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Georgia.png"
                            alt="image"
                          />
                          <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                            <div className="trend-content-title">
                              <h3 className="mb-0 white">Georgia</h3>
                            </div>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* UPCOMING TRIPS  */}
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
        {/* TRAVEL GOSSIPS */}
        <section className="py-5 my-lg-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="travel-gossips-slider">
                  <a href="https://go4explore.com/trip/kazakhstan-tour-packages">
                    <Image
                      width={100}
                      height={100}
                      className="img-fluid rounded"
                      src="https://d2qa7a8q0vuocm.cloudfront.net/images/23484720240316105741.png"
                      alt="travel-gossips"
                    />
                  </a>
                  <a href="https://go4explore.com/trip/vietnam">
                    <Image
                      width={100}
                      height={100}
                      className="img-fluid rounded"
                      src="https://d2qa7a8q0vuocm.cloudfront.net/images/10613820240316105652.png"
                      alt="travel-gossips"
                    />
                  </a>
                  <a href="https://go4explore.com/trip/thailand">
                    <Image
                      width={100}
                      height={100}
                      className="img-fluid rounded"
                      src="https://d2qa7a8q0vuocm.cloudfront.net/images/12127320240316105633.png"
                      alt="travel-gossips"
                    />
                  </a>
                  <a href="https://go4explore.com/trip/bali">
                    <Image
                      width={100}
                      height={100}
                      className="img-fluid rounded"
                      src="https://d2qa7a8q0vuocm.cloudfront.net/images/36727320240316105558.png"
                      alt="travel-gossips"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* BEST SELLERS  */}
        <section className="best-saller">
          <div className="container">
            <div className="section-title mb-6 mx-auto text-center">
              <h2 className="mb-1">
                Explore <span className="theme">Top</span> Destinations
              </h2>
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
                          style={{ width: 264, height: 148 }}
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
                          <p className="mb-0">
                            <span className="theme fw-bold fs-5">₹45000</span> |
                            Per person
                          </p>
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
                          style={{ width: 264, height: 148 }}
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
                            <span className="theme fw-bold fs-5">₹21499</span> |
                            Per person
                          </p>
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
                          style={{ width: 264, height: 148 }}
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
                          style={{ width: 264, height: 148 }}
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
                          style={{ width: 264, height: 148 }}
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
                          <p className="mb-0">
                            <span className="theme fw-bold fs-5">₹21000</span> |
                            Per person
                          </p>
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
                          style={{ width: 264, height: 148 }}
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
                          style={{ width: 264, height: 148 }}
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
                          <p className="mb-0">
                            <span className="theme fw-bold fs-5">₹17999</span> |
                            Per person
                          </p>
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
                          style={{ width: 264, height: 148 }}
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
                            <span className="theme fw-bold fs-5">₹6999</span> |
                            Per person
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* REQUEST CALL BACK  */}
        <section className="query">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-lg-5">
                <div className="query-content text-lg-start text-center">
                  <h4 className="theme mb-0">Have A Query?</h4>
                  <h2>Talk To Our Travel Experts </h2>
                  {/* <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore</p> */}
                  <div className="book-form">
                    <div className="row d-flex align-items-center justify-content-between">
                      <form action="#">
                        <div className="col-lg-12 mb-2">
                          <div className="form-group">
                            <div className="input-box">
                              <input
                                className="nice-select"
                                type="text"
                                // onchange="callback({ name: 'name','value':$(this).val() }) "
                                placeholder="Full Name"
                                id="name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 mb-2">
                          <div className="form-group">
                            <div className="input-box">
                              <input
                                className="nice-select"
                                type="email"
                                // onchange="callback({ name: 'email','value':$(this).val() }) "
                                // pattern=".*@.*\.com"
                                // oninvalid="setCustomValidity('Please enter a valid email address ')"
                                // oninput="setCustomValidity('')"
                                placeholder="Email-ID"
                                id="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 mb-2">
                          <div className="form-group">
                            <div className="input-box">
                              <input
                                className="nice-select"
                                type="text"
                                // onchange="callback({ name: 'mobile','value':$(this).val() }) "
                                placeholder="Mobile Number"
                                id="phone"
                                pattern="[0-9]{10}"
                                title="Please enter a 10-digit phone number"
                                // oninvalid="setCustomValidity('Please enter a valid phone number ')"
                                // oninput="setCustomValidity('')"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mb-0 text-center">
                            <button
                              className="nir-btn w-100"
                              type="submit"
                              id="submit"
                            >
                              <i className="bi bi-chat-dots-fill" /> &nbsp;
                              REQUEST CALL BACK
                            </button>
                            <button
                              className="nir-btn w-100"
                              type="button"
                              id="wait"
                              style={{ display: "none" }}
                            >
                              Please Wait...
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1" />
              <div className="col-lg-5">
                <div className="query-image">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/travel-query.png"
                    alt="request-call-back"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* TRAVEL  VIDEOS */}
        <section className="videos-gallery ">
          <div className="container">
            <div className="section-title mb-6 mx-auto text-center">
              {/* <h4 class="mb-1 theme1">Our Gallery</h4> */}
              <h2 className="mb-1">
                <span className="theme">Travel</span> Videos
              </h2>
            </div>
            <div className="row justify-content-center">
              {/*  TRAVEL VIDEOS  */}
              <div className="travel-videos-slider">
                {/*  TRAVEL ITEM  */}
                <div>
                  <div className="gallery-item mb-4 rounded overflow-hidden">
                    <div className="gallery-image">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 01.jpg"
                        alt="image"
                      />
                      <div className="popup-btn-box popup-btn" id="btn1">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="gallery-item mb-4 rounded overflow-hidden">
                    <div className="gallery-image">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 02.jpg"
                        alt="image"
                      />
                      <div className="popup-btn-box popup-btn" id="btn2">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="gallery-item mb-4 rounded overflow-hidden">
                    <div className="gallery-image">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 03.jpg"
                        alt="image"
                      />
                      <div className="popup-btn-box popup-btn" id="btn3">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="gallery-item mb-4 rounded overflow-hidden">
                    <div className="gallery-image">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 04.jpg"
                        alt="image"
                      />
                      <div className="popup-btn-box popup-btn" id="btn4">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="gallery-item mb-4 rounded overflow-hidden">
                    <div className="gallery-image">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 05.jpg"
                        alt="image"
                      />
                      <div className="popup-btn-box popup-btn" id="btn5">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="gallery-item mb-4 rounded overflow-hidden">
                    <div className="gallery-image">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 06.jpg"
                        alt="image"
                      />
                      <div className="popup-btn-box popup-btn" id="btn6">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="gallery-item mb-4 rounded overflow-hidden">
                    <div className="gallery-image" id="btn7">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 07.jpg"
                        alt="image"
                      />
                      <div className="popup-btn-box popup-btn">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="gallery-item mb-4 rounded overflow-hidden">
                    <div className="gallery-image">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 08.jpg"
                        alt="image"
                      />
                      <div className="popup-btn-box popup-btn" id="btn8">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* PLAN YOUR TRIP  */}
        <section className="our-story-bg-section">
          <div className="container">
            <div className="section-title mb-6 mx-auto text-center">
              <h2 className="mb-1 white">Plan Your Trip</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-9 m-auto text-center">
                <Image
                  width={100}
                  height={100}
                  className="img-fluid"
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/plan-your-trip-asset.png"
                  alt="plan your trip"
                />
                <p className="text-center mt-5 fs-2md text-white">
                  Call us or drop Hi on Whatsapp at{" "}
                  <i className="bi bi-whatsapp" />{" "}
                  <a href="tel:8700923377" className="text-white">
                    +91 8700923377
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* TESTIMONIALS */}
        <section className="testimonails">
          <div className="container">
            <div className="section-title mb-6 text-center w-75 mx-auto">
              <h2 className="mb-1">Testimonials</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-9 col-xl-8">
                <div className="testimonials-slider">
                  <div>
                    <div className="gallery-item mb-4 rounded overflow-hidden">
                      <div className="gallery-image">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/testimonials.jpg"
                          alt="image"
                        />
                        <div
                          className="popup-btn-box popup-btn"
                          id="btn9"
                          // onclick="loadVideo('oYRoeD47aEI','09')"
                        >
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="gallery-item mb-4 rounded overflow-hidden">
                      <div className="gallery-image">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/testimonials2.jpg"
                          alt="image"
                        />
                        <div className="popup-btn-box popup-btn" id="btn10">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* TESTIMONIALS */}
        {/* BLOGS  */}
        <section className="blog">
          <div className="container">
            <div className="section-title mb-6 w-75 mx-auto text-center">
              <h2 className="mb-1">
                Recent <span className="theme">Articles &amp; Posts</span>
              </h2>
            </div>
            <div className="row justify-content-center">
              <div className="blog-slider">
                <div className="col-lg-3">
                  <a
                    href="https://go4explore.com/blogs/offbeat-beaches-in-goa/"
                    target="_blank"
                  ></a>
                  <div className="trend-item box-shadow bg-white mb-4 rounded">
                    <a
                      href="https://go4explore.com/blogs/offbeat-beaches-in-goa/"
                      target="_blank"
                    >
                      <div className="trend-image">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/blog1.jpg"
                          alt="image"
                        />
                      </div>
                    </a>
                    <div className="trend-content-main">
                      <a
                        href="https://go4explore.com/blogs/offbeat-beaches-in-goa/"
                        target="_blank"
                      ></a>
                      <div className="trend-content">
                        <a
                          href="https://go4explore.com/blogs/offbeat-beaches-in-goa/"
                          target="_blank"
                        ></a>
                        <h5 className="mb-0">
                          <a
                            href="https://go4explore.com/blogs/offbeat-beaches-in-goa/"
                            target="_blank"
                          />
                          <a
                            href="https://go4explore.com/blogs/offbeat-beaches-in-goa/"
                            target="_blank"
                          >
                            6 offbeat beaches you should explore in Goa
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <a
                    href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                    target="_blank"
                  ></a>
                  <div className="trend-item box-shadow bg-white mb-4 rounded">
                    <a
                      href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                      target="_blank"
                    >
                      <div className="trend-image">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/blog2.jpg"
                          alt="image"
                        />
                      </div>
                    </a>
                    <div className="trend-content-main">
                      <a
                        href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                        target="_blank"
                      ></a>
                      <div className="trend-content">
                        <a
                          href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                          target="_blank"
                        ></a>
                        <h5 className="mb-0">
                          <a
                            href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                            target="_blank"
                          />
                          <a
                            href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                            target="_blank"
                          >
                            How to reach Chopta by public transport?
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <a
                    href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                    target="_blank"
                  ></a>
                  <div className="trend-item box-shadow bg-white mb-4 rounded">
                    <a
                      href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                      target="_blank"
                    >
                      <div className="trend-image">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/blog3.jpg"
                          alt="image"
                        />
                      </div>
                    </a>
                    <div className="trend-content-main">
                      <a
                        href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                        target="_blank"
                      ></a>
                      <div className="trend-content">
                        <a
                          href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                          target="_blank"
                        ></a>
                        <h5 className="mb-0">
                          <a
                            href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                            target="_blank"
                          />
                          <a
                            href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                            target="_blank"
                          >
                            Top 20 places to visit in Gujarat
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <a
                    href="https://go4explore.com/blogs/how-to-reach-kedarnath-temple/"
                    target="_blank"
                  ></a>
                  <div className="trend-item box-shadow bg-white mb-4 rounded">
                    <a
                      href="https://go4explore.com/blogs/how-to-reach-kedarnath-temple/"
                      target="_blank"
                    >
                      <div className="trend-image">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/blog4.jpg"
                          alt="image"
                        />
                      </div>
                    </a>
                    <div className="trend-content-main">
                      <a
                        href="https://go4explore.com/blogs/how-to-reach-kedarnath-temple/"
                        target="_blank"
                      ></a>
                      <div className="trend-content">
                        <a
                          href="https://go4explore.com/blogs/how-to-reach-kedarnath-temple/"
                          target="_blank"
                        ></a>
                        <h5 className="mb-0">
                          <a
                            href="https://go4explore.com/blogs/how-to-reach-kedarnath-temple/"
                            target="_blank"
                          />
                          <a
                            href="https://go4explore.com/blogs/how-to-reach-kedarnath-temple/"
                            target="_blank"
                          >
                            How to reach Kedarnath Temple from Delhi?
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* RECOGNIATIONS & COLLABORATONS  */}
        <section>
          <div className="section-title mb-6 w-75 mx-auto text-center">
            {/* <h4 class="mb-1 theme1">Our Partners</h4> */}
            <h2 className="mb-1">
              Recognitions &amp; <span className="theme">Collaborations</span>
            </h2>
          </div>
          <div className="container mb-lg-5">
            <div className="row justify-content-between align-items-center recognitions-collaborations-first-row">
              <div className="col-6 col-sm-auto text-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/msme 1.jpg"
                  alt="Recognitions"
                />
              </div>
              <div className="col-6 col-sm-auto text-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/2560px-Decathlon_Logo.png"
                  alt="Recognitions"
                />
              </div>
              <div className="col-6 col-sm-auto text-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/India_04_1660.jpg"
                  alt="Recognitions"
                />
              </div>
              <div className="col-6 col-sm-auto text-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/sterling-logo.webp"
                  alt="Recognitions"
                />
              </div>
              <div className="col-6 col-sm-auto text-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/startup india logo.png"
                  alt="Recognitions"
                />
              </div>
            </div>
            <div className="my-5 row justify-content-between align-items-center recognitions-collaborations-second-row">
              <div className="col-6 col-sm-auto text-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/mp-tourism-logo.png"
                  alt="Recognitions"
                />
              </div>
              <div className="col-6 col-sm-auto text-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/gujarat-tourism-logo-FAA.png"
                  alt="Recognitions"
                />
              </div>
              <div className="col-6 col-sm-auto text-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/TheHosteller_Logo1.webp"
                  alt="Recognitions"
                />
              </div>
              <div className="col-6 col-sm-auto text-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/gostops-footer-logo.png"
                  alt="Recognitions"
                />
              </div>
              <div className="col-6 col-sm-auto text-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/j_k tourims.jpg"
                  alt="Recognitions"
                />
              </div>
              <div className="col-6 col-sm-auto text-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/manipur tourism logo.png"
                  alt="Recognitions"
                />
              </div>
            </div>
            <div className="row justify-content-between align-items-center recognitions-collaborations-third-row">
              <div className="col-6 col-sm-auto text-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/DESKER-Logo-H PNG_edited.webp"
                  alt="Recognitions"
                />
              </div>
              <div className="col-6 col-sm-auto text-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/garage_society_logo.png"
                  alt="Recognitions"
                />
              </div>
              <div className="col-6 col-sm-auto text-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/228-2280491_nepal-tourism-board-hd-png-download.png"
                  alt="Recognitions"
                />
              </div>
              <div className="col-6 col-sm-auto text-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/logo whoopers hostel.png"
                  alt="Recognitions"
                />
              </div>
              <div className="col-6 col-sm-auto text-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/Delhi_Tourism 67.png"
                  alt="Recognitions"
                />
              </div>
              <div className="col-6 col-sm-auto text-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/yourstory logo.png"
                  alt="Recognitions"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="video-popup">
          <div className="popup-bg" />
          <div className="popup-content" />
        </div>
        <div className="video-popup">
          <div className="popup-bg" />
          <div className="popup-content" />
        </div>
        {/* JQUEY  */}
        {/* SLICK SLIDER  */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    #bonanzaModal {\n        display: none;\n        position: absolute;\n        width: 100%;\n        z-index: 9999;\n        top: 0;\n        height: 100vh;\n        background: #082a43b0;\n        backdrop-filter: blur(4px);\n        padding-top: 80px;\n    }\n\n    .signctn {\n        width: 100%;\n        background: #ffffff;\n        padding: 10px 10px;\n        max-width: 350px;\n        border-radius: 6px;\n        position: absolute;\n        margin: 0 auto;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        border: 4px solid #fff;\n        text-align: center;\n    }\n\n    .signctn .nir-btn {\n        position: relative;\n        cursor: pointer;\n        font-size: 18px;\n        text-align: center;\n        padding: 12px 10px;\n        transition: all ease-in-out 0.5s;\n        background: linear-gradient(90deg, #004aad, #1c7dff);\n        color: #fff;\n        display: inline-block;\n        border-radius: 10px;\n        border: none;\n        box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 0.1);\n        overflow: hidden;\n        font-weight: 600;\n        text-transform: uppercase;\n        margin-left: 2px;\n    }\n\n    .signctn h2 {\n        font-weight: 700;\n        font-size: 21px;\n        margin: 17px 0;\n    }\n\n    .signctn h2 span {\n        color: #2856b1;\n    }\n\n\n\n    #closeModal-inquiry {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        cursor: pointer;\n    }\n\n    #closeModal-inquiry img {\n        width: 33px;\n    }\n\n    .signctn input[type="text"],\n    .signctn input[type="email"],\n    .signctn input[type="number"],\n    .signctn input[type="search"],\n    .signctn input[type="password"],\n    .signctn input[type="tel"],\n    .signctn input[type="date"],\n    .signctn input[type="time"],\n    .signctn textarea,\n    .signctn select {\n        font-size: 15px;\n        font-weight: 500;\n        background-color: #fff;\n        border: 1px solid #17233e;\n        border-radius: 100px;\n        padding: 12px 20px;\n        color: #000;\n        margin-bottom: 0;\n        height: 50px;\n        box-shadow: none;\n        width: 100%;\n    }\n\n    .signctn ::placeholder {\n        color: #17233e;\n    }\n',
          }}
        />
        <div className="mobile-fixed">
          <div className="mobile-wrapper">
            <a
              href="tel:8076602635"
              target="_blank"
              className="box call"
              title="Enqire now"
            >
              <i className="bi bi-telephone" /> &nbsp; Call
            </a>
            <a
              id="bttn_inquiry"
              className="box send_inquiry"
              title="Enqire now"
            >
              <i className="bi bi-chat-dots-fill" /> &nbsp; Send Query
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=918076602635"
              target="_blank"
              className="box Whatsapp_inquiry"
              title="Enqire now"
            >
              <i className="bi bi-whatsapp" /> &nbsp; whatsapp
            </a>
          </div>
        </div>
        <div className="video-popup" id="inquiry-bg">
          <div className="popup-bg" />
          <div className="signctn">
            <Image
              width={100}
              height={100}
              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/enqire-bg.png"
              alt=""
              className="rounded-md"
            />
            <div className="query-content text-lg-start text-center">
              <h2>
                Talk To Our <span>Travel Experts</span>{" "}
              </h2>
              <div className="book-form">
                <div className="row d-flex align-items-center justify-content-between">
                  <form action="#">
                    <div className="col-lg-12 mb-2">
                      <div className="form-group">
                        <div className="input-box">
                          <input
                            className="nice-select"
                            type="text"
                            placeholder="Name *"
                            name="name"
                            id="name_1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 mb-2">
                      <div className="form-group">
                        <div className="input-box">
                          <input
                            className="nice-select"
                            type="text"
                            placeholder="Mobile Number *"
                            name="phone"
                            id="phone_1"
                          />
                          <input
                            type="hidden"
                            name="slug"
                            defaultValue="home"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 mb-2">
                      <div className="form-group">
                        <div className="input-box">
                          <input
                            className="nice-select"
                            type="email"
                            placeholder="Email-ID *"
                            name="email"
                            id="email_1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 mb-2">
                      <p className="text-left mb-0 text-success">
                        <i className="bi bi-check-circle" /> We Assure the
                        privacy of your contact data
                      </p>
                      <p className="text-left text-danger">
                        <i className="bi bi-x-circle" /> No annoying spam calls
                      </p>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-0 text-center">
                        <button
                          className="nir-btn w-100"
                          type="submit"
                          id="submit_1"
                        >
                          <i className="bi bi-chat-dots-fill" /> &nbsp; Send Me
                          Details
                        </button>
                        <button
                          className="nir-btn w-100"
                          type="button"
                          id="wait_1"
                          style={{ display: "none" }}
                        >
                          Please Wait...
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="" id="closeModal-inquiry">
              <Image
                width={100}
                height={100}
                src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/close.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <footer className="pt-20 pb-4">
          <div className="section-shape top-0" />
          <div className="insta-main pb-10">
            <div className="container">
              <div className="insta-inner">
                <div className="follow-button">
                  <a
                    href="https://www.instagram.com/go4explore.community"
                    target="_blank"
                  >
                    <h5 className="m-0 rounded">
                      <i className="fab fa-instagram" /> Follow on Instagram
                    </h5>
                  </a>
                </div>
                <div className="row instagram-slider">
                  <div className="col-md-3 col-sm-6">
                    <div className="insta-image rounded">
                      <a
                        href="https://www.instagram.com/go4explore.community"
                        target="_blank"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/images/9611920230309080512.png"
                          alt="insta"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="insta-image rounded">
                      <a
                        href="https://www.instagram.com/go4explore.community"
                        target="_blank"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/images/13180820230309080504.png"
                          alt="insta"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="insta-image rounded">
                      <a
                        href="https://www.instagram.com/go4explore.community"
                        target="_blank"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/images/35107020230309080455.png"
                          alt="insta"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="insta-image rounded">
                      <a
                        href="https://www.instagram.com/go4explore.community"
                        target="_blank"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/images/7548520230309080444.png"
                          alt="insta"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="insta-image rounded">
                      <a
                        href="https://www.instagram.com/go4explore.community"
                        target="_blank"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/images/32709120230309080435.png"
                          alt="insta"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="insta-image rounded">
                      <a
                        href="https://www.instagram.com/go4explore.community"
                        target="_blank"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/images/13828220230309080425.png"
                          alt="insta"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="insta-image rounded">
                      <a
                        href="https://www.instagram.com/go4explore.community"
                        target="_blank"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/images/11079920230309080416.png"
                          alt="insta"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="insta-image rounded">
                      <a
                        href="https://www.instagram.com/go4explore.community"
                        target="_blank"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/images/26764320230309080403.png"
                          alt="insta"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="insta-image rounded">
                      <a
                        href="https://www.instagram.com/go4explore.community"
                        target="_blank"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/images/1084820230309075911.png"
                          alt="insta"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-upper pb-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4 pe-4">
                  <div className="footer-about">
                    <Image
                      width={100}
                      height={100}
                      src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/go4explore-logo-white.png"
                      alt="image"
                    />
                    <p className="mt-3 mb-3 white">
                      Go4Explore is a community of avid travellers badly bitten
                      by the travel bug who curate fun-filled community trips as
                      per your interest and comfort.
                    </p>
                    <p className="mt-3 mb-3 white">
                      Road trips - We organize short and long weekend road trips
                      with like-minded people.
                    </p>
                    <p className="mt-3 mb-3 white">
                      Himalayan treks - Walk on trails, camp under million
                      stars, chill beside warm bonfire and gather memories on
                      our well curated treks.
                    </p>
                    <p className="mt-3 mb-3 white">
                      Travel meets - We love meeting new people and share
                      mindblowing travel stories. Travel meetups packed with fun
                      and knowledge sessions by skilled-travellers..
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-xs-6 col-sm-12 mb-4">
                  <div className="footer-links">
                    <h3 className="white">Quick link</h3>
                    <ul>
                      <li>
                        <a href="https://go4explore.com/aboutus">About Us</a>
                      </li>
                      <li>Travel Gossips</li>
    <li>
      <a href="#">Blogs</a>
    </li>
 <li>Collaborations</li>
                      <li>
                        <a href="https://go4explore.com/stories">Stories</a>
                      </li>
                      <li>
                        <a href="https://go4explore.com/forum">Forums</a>
                      </li>
                      <li>
                        <a href="https://go4explore.com/careers">Careers</a>
                      </li>
                      <li>
                        <a
                          href="https://go4explore.com/get-in-touch"
                          className="movetofooter"
                        >
                          Get In Touch
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://api.whatsapp.com/send?phone=917015750288"
                          target="_blank"
                        >
                          Chat On WhatsApp
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-xs-6 col-sm-12 mb-4">
                  <div className="footer-links">
                    <h3 className="white">Other Links</h3>
                    <ul>
                      <li>
                        <a href="https://go4explore.com/vendor-register">
                          Partner With Us
                        </a>
                      </li>
                      <li>
                        <a href="https://go4explore.com/Cancellation-and-Refund-Policy">
                          Cancellation Policy
                        </a>
                      </li>
                      <li>
                        <a href="https://go4explore.com/terms-&-condition">
                          Terms and Conditions
                        </a>
                      </li>
                      <li>
                        <a href="https://go4explore.com/privacy-policy">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                  <div className="footer-links">
                    <h3 className="white">Stay Updated</h3>
                    <div className="newsletter-form ">
                      <p className="mb-3">
                        Get all the best deals, handcrafted itineraries,
                        exclusive upcoming trip packages &amp; curated travel
                        content to fuel your wanderlust straight into your
                        inbox.
                      </p>
                      <form
                        action="#"
                        method="get"
                        acceptCharset="utf-8"
                        className="border-0 d-flex align-items-center"
                      >
                        <input
                          type="text"
                          placeholder="Email Address"
                          id="suscriberemail"
                        />
                        <button
                          className="nir-btn ms-2"
                          id="submitemail"
                          type="button"
                        >
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-payment">
            <div className="container">
              <div className="row footer-pay align-items-center justify-content-between text-lg-start text-center">
                <div className="col-lg-12 footer-payment-nav mb-4">
                  <ul className="">
                    <li className="me-2">
                      All Payments Secured By 128 Bit SSL Encryption :
                    </li>
                    <li className="me-2">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/payment-mode.png"
                        alt="image"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              <div className="copyright-inner rounded p-3 d-md-flex align-items-center justify-content-between">
                <div className="copyright-text">
                  <p className="m-0 white">
                    {" "}
                    © 2017-2023 Wander N Explore Pvt. Ltd. All Rights Reserved.
                  </p>
                </div>
                <div className="social-links">
                  <ul>
                    <li>
                      <a
                        href="https://www.instagram.com/go4explore.community"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                      >
                        <i className="bi bi-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/go4explore"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                      >
                        <i className="bi bi-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/go4explore"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                      >
                        <i className="bi bi-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="particles-js" />
        </footer>
        <div className="video-popup">
          <div className="popup-bg" />
          <div className="popup-content" />
        </div>
        <div className="video-popup">
          <div className="popup-bg" />
          <div className="popup-content" />
        </div>
        <div className="video-popup">
          <div className="popup-bg" />
          <div className="popup-content" />
        </div>
        <div className="video-popup">
          <div className="popup-bg" />
          <div className="popup-content" />
        </div>
        <div className="video-popup">
          <div className="popup-bg" />
          <div className="popup-content" />
        </div>
        <div className="video-popup">
          <div className="popup-bg" />
          <div className="popup-content" />
        </div>
        <div className="video-popup">
          <div className="popup-bg" />
          <div className="popup-content" />
        </div>
        <div className="video-popup">
          <div className="popup-bg" />
          <div className="popup-content" />
        </div>
        <input type="hidden" id="queryParams" defaultValue="" />
      </div>
    </>
  );
}
