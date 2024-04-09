import Image from "next/image";
import React from "react";

const RequestCall = () => {
  return (
    <>
      <section className="query">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-lg-5">
              <div className="query-content text-lg-start text-center">
                <h4 className="theme mb-0">Have A Query?</h4>
                <h2>Talk To Our Travel Experts </h2>
                {/* <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore</p> */}
                <div className="book-form">
                  <div className="row d-flex align-items-center justify-content-between">
                    <form action="#">
                      <div className="col-lg-12 mb-2">
                        <div className="form-group">
                          <div className="input-box">
                            <input
                              className="nice-select"
                              type="text"
                              // onchange="callback({ name: 'name','value':$(this).val() }) "
                              placeholder="Full Name"
                              id="name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 mb-2">
                        <div className="form-group">
                          <div className="input-box">
                            <input
                              className="nice-select"
                              type="email"
                              // onchange="callback({ name: 'email','value':$(this).val() }) "
                              // pattern=".*@.*\.com"
                              // oninvalid="setCustomValidity('Please enter a valid email address ')"
                              // oninput="setCustomValidity('')"
                              placeholder="Email-ID"
                              id="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 mb-2">
                        <div className="form-group">
                          <div className="input-box">
                            <input
                              className="nice-select"
                              type="text"
                              // onchange="callback({ name: 'mobile','value':$(this).val() }) "
                              placeholder="Mobile Number"
                              id="phone"
                              pattern="[0-9]{10}"
                              title="Please enter a 10-digit phone number"
                              // oninvalid="setCustomValidity('Please enter a valid phone number ')"
                              // oninput="setCustomValidity('')"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mb-0 text-center">
                          <button
                            className="nir-btn w-100"
                            type="submit"
                            id="submit"
                          >
                            <i className="bi bi-chat-dots-fill" /> &nbsp;
                            REQUEST CALL BACK
                          </button>
                          <button
                            className="nir-btn w-100"
                            type="button"
                            id="wait"
                            style={{ display: "none" }}
                          >
                            Please Wait...
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
            <div className="col-lg-5">
              <div className="query-image">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/travel-query.png"
                  alt="request-call-back"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestCall;
