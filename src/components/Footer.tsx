import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="pt-20 pb-4">
        <div className="section-shape top-0" />
        <div className="insta-main pb-10">
          <div className="container">
            <div className="insta-inner">
              <div className="follow-button">
                <Link
                  href="https://www.instagram.com/go4explore.community"
                  target="_blank"
                >
                  <h5 className="m-0 rounded">
                    <i className="fab fa-instagram" /> Follow on Instagram
                  </h5>
                </Link>
              </div>
              <div className="row instagram-slider">
                <div className="col-md-3 col-sm-6">
                  <div className="insta-image rounded">
                    <Link
                      href="https://www.instagram.com/go4explore.community"
                      target="_blank"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/9611920230309080512.png"
                        alt="insta"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="insta-image rounded">
                    <Link
                      href="https://www.instagram.com/go4explore.community"
                      target="_blank"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/13180820230309080504.png"
                        alt="insta"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="insta-image rounded">
                    <Link
                      href="https://www.instagram.com/go4explore.community"
                      target="_blank"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/35107020230309080455.png"
                        alt="insta"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="insta-image rounded">
                    <Link
                      href="https://www.instagram.com/go4explore.community"
                      target="_blank"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/7548520230309080444.png"
                        alt="insta"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="insta-image rounded">
                    <Link
                      href="https://www.instagram.com/go4explore.community"
                      target="_blank"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/32709120230309080435.png"
                        alt="insta"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="insta-image rounded">
                    <Link
                      href="https://www.instagram.com/go4explore.community"
                      target="_blank"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/13828220230309080425.png"
                        alt="insta"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="insta-image rounded">
                    <Link
                      href="https://www.instagram.com/go4explore.community"
                      target="_blank"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/11079920230309080416.png"
                        alt="insta"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="insta-image rounded">
                    <Link
                      href="https://www.instagram.com/go4explore.community"
                      target="_blank"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/26764320230309080403.png"
                        alt="insta"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="insta-image rounded">
                    <Link
                      href="https://www.instagram.com/go4explore.community"
                      target="_blank"
                    >
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/1084820230309075911.png"
                        alt="insta"
                      />
                    </Link>
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
                    Go4Explore is a community of avid travellers badly bitten by
                    the travel bug who curate fun-filled community trips as per
                    your interest and comfort.
                  </p>
                  <p className="mt-3 mb-3 white">
                    Road trips - We organize short and long weekend road trips
                    with like-minded people.
                  </p>
                  <p className="mt-3 mb-3 white">
                    Himalayan treks - Walk on trails, camp under million stars,
                    chill beside warm bonfire and gather memories on our well
                    curated treks.
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
                      <Link href="https://go4explore.com/aboutus">
                        About Us
                      </Link>
                    </li>
                    <li>Travel Gossips</li>
                    <li>
                      <Link href="#">Blogs</Link>
                    </li>
                    <li>Collaborations</li>
                    <li>
                      <Link href="https://go4explore.com/stories">Stories</Link>
                    </li>
                    <li>
                      <Link href="https://go4explore.com/forum">Forums</Link>
                    </li>
                    <li>
                      <Link href="https://go4explore.com/careers">Careers</Link>
                    </li>
                    <li>
                      <Link
                        href="https://go4explore.com/get-in-touch"
                        className="movetofooter"
                      >
                        Get In Touch
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://api.whatsapp.com/send?phone=917015750288"
                        target="_blank"
                      >
                        Chat On WhatsApp
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-xs-6 col-sm-12 mb-4">
                <div className="footer-links">
                  <h3 className="white">Other Links</h3>
                  <ul>
                    <li>
                      <Link href="https://go4explore.com/vendor-register">
                        Partner With Us
                      </Link>
                    </li>
                    <li>
                      <Link href="https://go4explore.com/Cancellation-and-Refund-Policy">
                        Cancellation Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="https://go4explore.com/terms-&-condition">
                        Terms and Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="https://go4explore.com/privacy-policy">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="footer-links">
                  <h3 className="white">Stay Updated</h3>
                  <div className="newsletter-form ">
                    <p className="mb-3">
                      Get all the best deals, handcrafted itineraries, exclusive
                      upcoming trip packages &amp; curated travel content to
                      fuel your wanderlust straight into your inbox.
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
                    <Link
                      href="https://www.instagram.com/go4explore.community"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      <i className="bi bi-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/company/go4explore"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      <i className="bi bi-linkedin" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/go4explore"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      <i className="bi bi-youtube" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="particles-js" />
      </footer>
    </>
  );
};

export default Footer;
