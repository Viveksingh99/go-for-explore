import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <section
        className="hero-section"
        style={{
          background:
            "rgba(0, 0, 0, 0.671) url(https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/testimonial-thumbnail.png) center center / cover",
        }}
      >
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="pt-5">
              <h2 className="text-white text-center">
                Explore More To Feel Alive
              </h2>
            </div>
            <div className="pt-5">
              <div className="d-flex">
                <div className="home-hero-section-packages packages cursor-pointer px-2 px-md-4 py-3 active">
                  <span id="Packages">Trip Packages</span>
                </div>
                <div className="home-hero-section-packages guides cursor-pointer px-2 px-md-4 py-3 mx-1 mx-md-3">
                  <span id="Guides">Travel Guides</span>
                </div>
              </div>
              <div className="input-wrapper">
                <div className="serch-location-icon">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/navigation-pin.png"
                    alt="location"
                  />
                </div>
                <input
                  id="packagePicker"
                  name="friend[id]"
                  type="text"
                  className="typeahead"
                  autoComplete="off"
                  placeholder="Pick a best suitable package for you"
                  data-provide="typeahead"
                />
                <input
                  id="TravelGuides"
                  name="friend[id]"
                  type="text"
                  className="typeahead"
                  autoComplete="off"
                  placeholder="Where are you planing to explore next?"
                  data-provide="typeahead"
                />
                <input type="hidden" defaultValue="" id="guidelink" />
                <Image
                  width={100}
                  height={100}
                  id="search"
                  className="search-icon"
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/zoom.png"
                  alt="icon"
                />
                <Image
                  width={100}
                  height={100}
                  id="search1"
                  className="search-icon d-none"
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/zoom.png"
                  alt="icon"
                />
              </div>
            </div>
            <input type="hidden" id="searchvalues" defaultValue="" />
            <input type="hidden" id="packagevalues" defaultValue="" />
            <div className="d-flex mt-5 flex-wrap justify-content-center hero-section-item-wrapper">
              <div className="d-flex mx-2 hero-section-items mb-4 flex-column align-items-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/solo-travel-friendly.png"
                  alt="Solo-Travel Friendly"
                />
                <h4>Solo-Travel Friendly</h4>
              </div>
              <div className="d-flex mx-2 hero-section-items mb-4 flex-column align-items-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/group-trips.png"
                  alt="Group Trips"
                />
                <h4>Group Trips</h4>
              </div>
              <div className="d-flex mx-2 hero-section-items mb-4 flex-column align-items-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/himalayan-treks.png"
                  alt="Himalayan Treks"
                />
                <h4>Himalayan Treks</h4>
              </div>
              <div className="d-flex mx-2 hero-section-items mb-4 flex-column align-items-center">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/travel-meetups.png"
                  alt="Travel Meetups"
                />
                <h4>Travel Meetups</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
