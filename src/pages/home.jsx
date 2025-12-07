import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Section1 from "./Home/Section1";
import Section2 from "../pages/Home/Section2";
import Section3 from "./Home/Section3";
import Section4 from "./Home/Section4";
import Section5 from "./Home/Section5";

function Home() {
  
  return (
    <div>
      <div className="promotion-box">
        <div className="container-fluid">
          <p className="promotion-text">
            Free Shipping on all orders over $100!
            <a className="link" href="#">
              Shop Now
            </a>
          </p>
          <span className="promotion-close">
            <i className="ti-close" />
          </span>
        </div>
      </div>
      <Header />
      <div className="page-contaiter">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />

      </div>
      <Footer />
    </div>
  );
}

export default Home;