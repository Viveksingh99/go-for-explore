import Image from "next/image";
import React from "react";

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
    </>
  );
};

export default Testimonials;
