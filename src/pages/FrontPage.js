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

      <Outlet />

      {/* <!-- end testimonial --> */}
      <Footer />
    </>
  );
}
