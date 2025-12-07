import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Section1() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <section id="intro" className="intro">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <div className="item height-9 sm-height-600px">
            <div
              className="background-image"
              style={{ backgroundImage: "url('img/bg_img/img_001.jpg')" }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-8">
                  <div className="intro-caption intro-caption-middel text-left intro-caption-fade sec-padding--lg">
                    <p className="intro-subtitle"># Women Fashion</p>
                    <h1 className="intro-title">
                      New Women Collection<br />Made for her
                    </h1>
                    <a href="#" className="btn btn--primary space--1">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <div className="item section-dark height-9 sm-height-600px">
            <div
              className="background-image"
              style={{ backgroundImage: "url('img/bg_img/img_002.jpg')" }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-8 ml-md-auto">
                  <div className="intro-caption intro-caption-middel text-left intro-caption-fade sec-padding--lg">
                    <p className="intro-subtitle"># Man Fashion</p>
                    <h1 className="intro-title">
                      Mens Fashion 2019
                      <br />
                      &amp; Collection
                    </h1>
                    <a href="#" className="btn btn--primary space--1">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div>
          <div className="item height-9 sm-height-600px">
            <div
              className="background-image"
              style={{ backgroundImage: "url('img/bg_img/img_003.jpg')" }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-8">
                  <div className="intro-caption intro-caption-middel text-left intro-caption-fade sec-padding--lg">
                    <p className="intro-subtitle">Up To 50% Off</p>
                    <h1 className="intro-title">
                      New Arrival Autumn<br />Collection
                    </h1>
                    <a href="#" className="btn btn--primary space--1">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div>
          <div className="item section-dark height-9 sm-height-600px">
            <div
              className="background-image bg--primary"
              style={{ backgroundImage: "url('img/bg_img/img_004.jpg')" }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-8 mx-md-auto">
                  <div className="intro-caption intro-caption-middel text-center intro-caption-fade sec-padding--lg">
                    <p className="intro-subtitle"># Weekend Special Sale</p>
                    <img
                      className="intro-caption-img"
                      src="img/slide_img/caption_001.png"
                      alt="Summer Sale"
                    />
                    <a href="#" className="btn btn--white space--1">Get Offers</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Section1;
