import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container">
          <Link className="navbar-brand nav-logo-text" href="/">
            <Image
              width={100}
              height={100}
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="main">
              <li className="nav-item px-0 d-inline-block px-lg-2">
      <Link className="nav-link nav-link-text d-inline-block" aria-current="page" href="https://go4explore.com/country/India">Travel Guides</Link>
    </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-0 d-inline-block px-lg-3 nav-link-text"
                  href="https://go4explore.com/trips"
                >
                  Trips
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-0 d-inline-block px-lg-3 nav-link-text"
                  href="https://go4explore.com/upcoming-trips"
                >
                  Upcoming Trips
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-0 d-inline-block px-lg-3 nav-link-text"
                  href="https://go4explore.com/forum"
                >
                  Forums
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nnav-link px-0 d-inline-block px-lg-3 nav-link-text Grand-Travel-Sale"
                  href="https://go4explore.com/sale"
                >
                  Grand Travel Sale
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-0 d-inline-block px-lg-3 nav-link-text"
                  href="https://go4explore.com/stories"
                >
                  Stories
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-0 d-inline-block px-lg-3 nav-link-text"
                  href="https://go4explore.com/blogs/"
                >
                  Blog
                </Link>
              </li>
            </ul>
            <div className="register-login d-flex align-items-center">
              <Link className="tel" href="tel:8700923377">
                <i className="bi bi-telephone-fill" />
                +91 8700923377
              </Link>
              <Link href="https://go4explore.com/login" className="login-btn">
                <i className="bi bi-person-fill" /> Login
              </Link>
              <Link
                href="https://go4explore.com/register"
                className="register-btn"
              >
                <i className="bi bi-people-fill"></i> Register
              </Link>
            </div>
            {/* ICONS  */}
            <div className="d-flex align-items-center flex-row">
              <div className="d-flex align-items-center">
                <span>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="15" cy="15" r="15" fill="black" />
                    <path
                      d="M17.7507 18.4764L19.1715 17.0551C19.3629 16.866 19.605 16.7366 19.8685 16.6825C20.1319 16.6284 20.4054 16.652 20.6558 16.7505L22.3874 17.4421C22.6403 17.5448 22.8572 17.7202 23.0107 17.946C23.1643 18.1719 23.2475 18.4381 23.25 18.7112V21.884C23.2485 22.0697 23.2095 22.2533 23.1352 22.4236C23.061 22.5939 22.953 22.7474 22.8179 22.8748C22.6828 23.0023 22.5233 23.1011 22.349 23.1653C22.1748 23.2294 21.9893 23.2576 21.8038 23.2482C9.66984 22.4931 7.22148 12.2135 6.75845 8.27928C6.73695 8.08609 6.75659 7.89053 6.81607 7.70547C6.87555 7.52041 6.97352 7.35005 7.10354 7.20559C7.23356 7.06113 7.39269 6.94585 7.57044 6.86733C7.74819 6.78881 7.94055 6.74883 8.13486 6.75003H11.1985C11.4719 6.75084 11.7388 6.83345 11.9648 6.98724C12.1909 7.14103 12.3658 7.35896 12.4671 7.61301L13.1584 9.34532C13.2601 9.59474 13.286 9.86859 13.233 10.1327C13.18 10.3968 13.0504 10.6393 12.8603 10.8302L11.4395 12.2515C11.4395 12.2515 12.2577 17.7911 17.7507 18.4764Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <p className="nav-link-text my-auto me-3 ms-2"></p>
              </div>
              <div className="my-2 my-lg-0 mx-lg-2">
                <Link href=''>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 6C17.895 6 20.25 8.355 20.25 11.25C20.25 14.145 17.895 16.5 15 16.5C12.105 16.5 9.75 14.145 9.75 11.25C9.75 8.355 12.105 6 15 6ZM15 27C11.955 27 8.355 25.77 5.79 22.68C8.41741 20.6186 11.6604 19.4982 15 19.4982C18.3396 19.4982 21.5826 20.6186 24.21 22.68C21.645 25.77 18.045 27 15 27Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
