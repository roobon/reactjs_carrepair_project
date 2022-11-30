import { Outlet } from "react-router-dom";

import React from "react";

export default function FrontPage() {
  return (
    <>
      <div className="loader_bg">
        <div className="loader">
          <img src="assets/images/loading.gif" alt="#" />
        </div>
      </div>
      <header>
        {/* <!-- header inner --> */}
        <div className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <a href="index.html">
                        <img src="assets/images/logo.png" alt="#" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <nav className="navigation navbar navbar-expand-md navbar-dark ">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample04"
                    aria-controls="navbarsExample04"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarsExample04"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                          {" "}
                          Home{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about.html">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="furnitures.html">
                          Furnitures
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="testimonial.html">
                          Testimonial
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                          Contact Us
                        </a>
                      </li>
                      <li className="nav-item d_none">
                        <a className="nav-link" href="#">
                          <i
                            className="fa fa-user-circle padd_right"
                            aria-hidden="true"
                          ></i>
                          Login/Register
                        </a>
                      </li>
                      <li className="nav-item d_none">
                        <a className="nav-link" href="#">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="banner_main">
        <div id="banner1" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#banner1"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#banner1" data-slide-to="1"></li>
            <li data-target="#banner1" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="carousel-caption">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="text-bg">
                        <h1>Welcome</h1>
                        <span>car repair services</span>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters,{" "}
                        </p>
                        <a href="#">More Info </a> <a href="#">Contact Us</a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text_img">
                        <figure>
                          <img src="assets/images/car.png" alt="#" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="carousel-caption">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="text-bg">
                        <h1>Welcome</h1>
                        <span>car repair services</span>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters,{" "}
                        </p>
                        <a href="#">More Info </a> <a href="#">Contact Us</a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text_img">
                        <figure>
                          <img src="assets/images/car.png" alt="#" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="carousel-caption">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="text-bg">
                        <h1>Welcome</h1>
                        <span>car repair services</span>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters,{" "}
                        </p>
                        <a href="#">More Info </a> <a href="#">Contact Us</a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text_img">
                        <figure>
                          <img src="assets/images/car.png" alt="#" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#banner1"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </a>
          <a
            className="carousel-control-next"
            href="#banner1"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>
      </section>
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
                      aliqua. Ut enim ad minim veniam, quis nostrud{" "}
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
    </>
  );
}
