import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecentArticlesPosts = () => {
  return (
    <>
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
                <Link
                  href="https://go4explore.com/blogs/offbeat-beaches-in-goa/"
                  target="_blank"
                ></Link>
                <div className="trend-item box-shadow bg-white mb-4 rounded">
                  <Link
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
                  </Link>
                  <div className="trend-content-main">
                    <Link
                      href="https://go4explore.com/blogs/offbeat-beaches-in-goa/"
                      target="_blank"
                    ></Link>
                    <div className="trend-content">
                      <Link
                        href="https://go4explore.com/blogs/offbeat-beaches-in-goa/"
                        target="_blank"
                      ></Link>
                      <h5 className="mb-0">
                        <Link
                          href="https://go4explore.com/blogs/offbeat-beaches-in-goa/"
                          target="_blank"
                        />
                        <Link
                          href="https://go4explore.com/blogs/offbeat-beaches-in-goa/"
                          target="_blank"
                        >
                          6 offbeat beaches you should explore in Goa
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <Link
                  href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                  target="_blank"
                ></Link>
                <div className="trend-item box-shadow bg-white mb-4 rounded">
                  <Link
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
                  </Link>
                  <div className="trend-content-main">
                    <Link
                      href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                      target="_blank"
                    ></Link>
                    <div className="trend-content">
                      <Link
                        href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                        target="_blank"
                      ></Link>
                      <h5 className="mb-0">
                        <Link
                          href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                          target="_blank"
                        />
                        <Link
                          href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                          target="_blank"
                        >
                          How to reach Chopta by public transport?
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <Link
                  href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                  target="_blank"
                ></Link>
                <div className="trend-item box-shadow bg-white mb-4 rounded">
                  <Link
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
                  </Link>
                  <div className="trend-content-main">
                    <Link
                      href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                      target="_blank"
                    ></Link>
                    <div className="trend-content">
                      <Link
                        href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                        target="_blank"
                      ></Link>
                      <h5 className="mb-0">
                        <Link
                          href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                          target="_blank"
                        />
                        <Link
                          href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                          target="_blank"
                        >
                          Top 20 places to visit in Gujarat
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <Link
                  href="https://go4explore.com/blogs/how-to-reach-kedarnath-temple/"
                  target="_blank"
                ></Link>
                <div className="trend-item box-shadow bg-white mb-4 rounded">
                  <Link
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
                  </Link>
                  <div className="trend-content-main">
                    <Link
                      href="https://go4explore.com/blogs/how-to-reach-kedarnath-temple/"
                      target="_blank"
                    ></Link>
                    <div className="trend-content">
                      <Link
                        href="https://go4explore.com/blogs/how-to-reach-kedarnath-temple/"
                        target="_blank"
                      ></Link>
                      <h5 className="mb-0">
                        <Link
                          href="https://go4explore.com/blogs/how-to-reach-kedarnath-temple/"
                          target="_blank"
                        />
                        <Link
                          href="https://go4explore.com/blogs/how-to-reach-kedarnath-temple/"
                          target="_blank"
                        >
                          How to reach Kedarnath Temple from Delhi?
                        </Link>
                      </h5>
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

export default RecentArticlesPosts;
