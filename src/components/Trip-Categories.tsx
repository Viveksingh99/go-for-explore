import Image from "next/image";
import Link from "next/link";
import React from "react";

const Trip = () => {
  return (
    <>
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
                <Link
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
                </Link>
              </div>
            </div>
            <div className="col-auto" style={{ textAlign: "center" }}>
              <div className="text-center who-are-we-steps mx-auto">
                <Link
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
                </Link>
              </div>
            </div>
            <div className="col-auto" style={{ textAlign: "center" }}>
              <div className="text-center who-are-we-steps mx-auto">
                <Link
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
                </Link>
              </div>
            </div>
            <div className="col-auto" style={{ textAlign: "center" }}>
              <div className="text-center who-are-we-steps mx-auto">
                <Link
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
                </Link>
              </div>
            </div>
            <div className="col-auto" style={{ textAlign: "center" }}>
              <div className="text-center who-are-we-steps mx-auto">
                <Link
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
                </Link>
              </div>
            </div>
            <div className="col-auto" style={{ textAlign: "center" }}>
              <div className="text-center who-are-we-steps mx-auto">
                <Link
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
                </Link>
              </div>
            </div>
            <div className="col-auto" style={{ textAlign: "center" }}>
              <div className="text-center who-are-we-steps mx-auto">
                <Link
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
                </Link>
              </div>
            </div>
            <div className="col-auto" style={{ textAlign: "center" }}>
              <div className="text-center who-are-we-steps mx-auto">
                <Link
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trip;
