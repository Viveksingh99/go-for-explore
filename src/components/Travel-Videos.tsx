import Image from "next/image";
import React from "react";

const TravelVideos = () => {
  return (
    <>
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
    </>
  );
};

export default TravelVideos;
