import { Outlet } from "react-router-dom";

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sliders from "../components/Sliders";

export default function FrontPage() {
  return (
    <>
      <div className="loader_bg">
        <div className="loader">
          <img src="assets/images/loading.gif" alt="#" />
        </div>
      </div>
      <Header />
      <Sliders />
      <div className="three_box">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="box_text">
                <h3>AUTO DIAGNOSE</h3>
                <i>
                  <img src="assets/images/thr.png" alt="#" />
                </i>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed d
                  veniam, adipiscing elit, sed d veniam
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box_text">
                <h3>AUTO DIAGNOSE</h3>
                <i>
                  <img src="assets/images/thr1.png" alt="#" />
                </i>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed d
                  veniam, adipiscing elit, sed d veniam
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box_text">
                <h3>AUTO DIAGNOSE</h3>
                <i>
                  <img src="assets/images/thr2.png" alt="#" />
                </i>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed d
                  veniam, adipiscing elit, sed d veniam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>About Our Car Service </h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="about_img">
                  <div className="about_box">
                    <h3>Dolor sit amet, consectetur adipiscing elit, </h3>
                    <p>
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                    <a className="read_more">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end about -->
      <!-- wedo  section --> */}
      <div className="wedo ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>What We Do</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="row">
                <div className="col-md-6 margin_bottom">
                  <div className="work">
                    <figure>
                      <img src="assets/images/img1.png" alt="#" />
                    </figure>
                  </div>
                  <div className="work_text">
                    <h3>
                      Quick repair
                      <br />
                      <span className="blu">Total Service</span>
                    </h3>
                  </div>
                </div>
                <div className="col-md-6 margin_bottom">
                  <div className="work">
                    <figure>
                      <img src="assets/images/img2.png" alt="#" />
                    </figure>
                  </div>
                  <div className="work_text">
                    <h3>
                      Quick repair
                      <br />
                      <span className="blu">Total Service</span>
                    </h3>
                  </div>
                </div>
                <div className="col-md-6 margin_bottom">
                  <div className="work">
                    <figure>
                      <img src="assets/images/img3.png" alt="#" />
                    </figure>
                  </div>
                  <div className="work_text">
                    <h3>
                      Quick repair
                      <br /> <span className="blu">Total Service</span>
                    </h3>
                  </div>
                </div>
                <div className="col-md-6 margin_bottom">
                  <div className="work">
                    <figure>
                      <img src="assets/images/img4.png" alt="#" />
                    </figure>
                  </div>
                  <div className="work_text">
                    <h3>
                      Quick repair
                      <br />
                      <span className="blu">Total Service</span>
                    </h3>
                  </div>
                </div>
              </div>
              <a className="read_more" href="#">
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
      ;
      {/* <!-- end wedo  section -->
      <!-- testimonial --> */}
      <div className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Testimonial</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div
                id="myCarousel"
                className="carousel slide testimonial_Carousel "
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="carousel-caption ">
                        <div className="row">
                          <div className="col-md-6 margin_boot">
                            <div className="test_box">
                              <i>
                                <img src="assets/images/tes.jpg" alt="#" />
                              </i>
                              <h4>JCKOLO</h4>
                              <span>(It is a long )</span>
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6 margin_boot">
                            <div className="test_box">
                              <i>
                                <img src="assets/images/tes1.jpg" alt="#" />
                              </i>
                              <h4>ROCOYO</h4>
                              <span>(It is a long )</span>
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="carousel-caption">
                        <div className="row">
                          <div className="col-md-6 margin_boot">
                            <div className="test_box">
                              <i>
                                <img src="assets/images/tes.jpg" alt="#" />
                              </i>
                              <h4>JCKOLO</h4>
                              <span>(It is a long )</span>
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6 margin_boot">
                            <div className="test_box">
                              <i>
                                <img src="assets/images/tes1.jpg" alt="#" />
                              </i>
                              <h4>ROCOYO</h4>
                              <span>(It is a long )</span>
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="carousel-caption">
                        <div className="row">
                          <div className="col-md-6 margin_boot">
                            <div className="test_box">
                              <i>
                                <img src="assets/images/tes.jpg" alt="#" />
                              </i>
                              <h4>JCKOLO</h4>
                              <span>(It is a long )</span>
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6 margin_boot">
                            <div className="test_box">
                              <i>
                                <img src="assets/images/tes1.jpg" alt="#" />
                              </i>
                              <h4>ROCOYO</h4>
                              <span>(It is a long )</span>
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#myCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#myCarousel"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end testimonial --> */}
      <Footer />
    </>
  );
}
