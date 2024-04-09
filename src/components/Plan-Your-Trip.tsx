import Image from "next/image";
import Link from "next/link";
import React from "react";

const PlanYourTrip = () => {
  return (
    <>
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
                <Link href="tel:8700923377" className="text-white">
                  +91 8700923377
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlanYourTrip;
