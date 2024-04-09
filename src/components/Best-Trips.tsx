import Image from "next/image";
import Link from "next/link";
import React from "react";

const BestTrips = () => {
  return (
    <>
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
              <Link href="https://go4explore.com/trip/vietnam">
                <div className="trend-item1 mb-4">
                  <div className="trend-image position-relative rounded">
                    <Image
                      width={600}
                      height={600}
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
              </Link>
              <Link href="https://go4explore.com/trip/bali">
                <div className="trend-item1 mb-4">
                  <div className="trend-image position-relative rounded">
                    <Image
                      width={600}
                      height={600}
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
              </Link>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                  <Link href="https://go4explore.com/trip/dubai">
                    <div className="trend-item1">
                      <div className="trend-image position-relative rounded">
                        <Image
                          width={400}
                          height={400}
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
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                  <Link href="https://go4explore.com/trip/kashmir">
                    <div className="trend-item1">
                      <div className="trend-image position-relative rounded">
                        <Image
                          width={400}
                          height={400}
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
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                  <Link href="https://go4explore.com/trip/kerala">
                    <div className="trend-item1">
                      <div className="trend-image position-relative rounded">
                        <Image
                          width={400}
                          height={400}
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
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                  <Link href="https://go4explore.com/trip/singapore">
                    <div className="trend-item1">
                      <div className="trend-image position-relative rounded">
                        <Image
                          width={400}
                          height={400}
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
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
                  <Link href="https://go4explore.com/trip/thailand">
                    <div className="trend-item1">
                      <div className="trend-image position-relative rounded">
                        <Image
                          width={400}
                          height={400}
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
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                  <Link href="https://go4explore.com/trip/himachal-pradesh-tour-packages">
                    <div className="trend-item1">
                      <div className="trend-image position-relative rounded">
                        <Image
                          width={400}
                          height={400}
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
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                  <Link href="https://go4explore.com/trip/sri-lanka">
                    <div className="trend-item1">
                      <div className="trend-image position-relative rounded">
                        <Image
                          width={400}
                          height={400}
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
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                  <Link href="https://go4explore.com/trip/maldives">
                    <div className="trend-item1">
                      <div className="trend-image position-relative rounded">
                        <Image
                          width={400}
                          height={400}
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
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                  <Link href="https://go4explore.com/trip/rajasthan">
                    <div className="trend-item1">
                      <div className="trend-image position-relative rounded">
                        <Image
                          width={400}
                          height={400}
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
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                  <Link href="https://go4explore.com/trip/azerbaijan">
                    <div className="trend-item1">
                      <div className="trend-image position-relative rounded">
                        <Image
                          width={400}
                          height={400}
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
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                  <Link href="https://go4explore.com/trip/turkey">
                    <div className="trend-item1">
                      <div className="trend-image position-relative rounded">
                        <Image
                          width={400}
                          height={400}
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
                  </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
                  <Link href="https://go4explore.com/trip/georgia">
                    <div className="trend-item1">
                      <div className="trend-image position-relative rounded">
                        <Image
                          width={400}
                          height={400}
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestTrips;
