import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      {/* <nav className="flex justify-between items-center py-3 px-10">
        <div className="flex gap-5 items-center">
          <Link href="/">
            <Image
              width={200}
              height={200}
              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/go4explore-logo.png"
              alt="go4explore"
            />
          </Link>
          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          <div className="cursor-pointer no-underline">
            <Link href="/trips" className="no-underline text-black">
              Trips
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="upcoming-trips" className="no-underline text-black">
              Upcoming Trips
            </Link>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="text-black">
            <Link href="/" className="no-underline hover:text-black">
              +91 8700923377
            </Link>
          </div>
          <div>
            <Link href="/">
              <button className="text-white bg-sky-600 px-4 py-2 rounded-2xl">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container">
          <Link className="navbar-brand nav-logo-text" href="/">
            <Image
              width={200}
              height={200}
              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/go4explore-logo.png"
              alt="go4explore"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="nav-item">
                <Link
                  className="nav-link px-0 d-inline-block px-lg-3 nav-link-text"
                  href="https://go4explore.com/trips"
                >
                  Trips
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  className="nav-link px-0 d-inline-block px-lg-3 nav-link-text"
                  href="https://go4explore.com/upcoming-trips"
                >
                  Upcoming Trips
                </Link>
              </div>
            </div>
            <div className="register-login d-flex align-items-center">
              <a className="tel" href="tel:8700923377">
                <i className="bi bi-telephone-fill" />
                +91 8700923377
              </a>
              <a href="https://go4explore.com/login" className="login-btn">
                <i className="bi bi-person-fill" /> Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
