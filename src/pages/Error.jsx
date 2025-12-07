import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Error = () => {
  return (
    <>
      <Header />
      <div className="page-contaiter">
        {/*Content*/}
        <section className="sec-padding--lg">
          <div className="container">
            <div className="row">
              <div className="col-md-4 offset-md-4">
                <div className="error-page text-center">
                  <h1>404</h1>
                  <h3>Oops, page not found.</h3>
                  <p className="large">
                    It looks like nothing was found at this location. Click the
                    link below to return home.
                  </p>
                  {/*<div class="widget">
                              <form class="search-form">
                                  <input class="search-field input--lg" placeholder="Search.." value="" name="s" type="search">
                                  <button type="submit" class="search-button btn btn--primary btn--lg">
                                      <i class="fa fa-search"></i>
                                  </button>
                              </form>
                          </div>*/}
                  <a href="#" className="btn btn--gray space-t--2">
                    Back to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Content*/}
      </div>

      <Footer />
    </>
  );
};

export default Error;
