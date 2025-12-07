import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Blog = () => {
  return (
    <>
      <Header />

      <div className="page-contaiter">
        {/*Breadcrumb*/}
        <section className="breadcrumb">
          <div
            className="background-image"
            data-background="img/bg_img/bg_001.jpg"
            data-bg-posx="center"
            data-bg-posy="center"
            data-bg-overlay={4}
          />
          <div className="breadcrumb-content">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="breadcrumb-title">Blog List</h1>
                  <nav className="breadcrumb-link">
                    <span>
                      <a href="home.html">Home</a>
                    </span>
                    <span>Blog</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Breadcrumb*/}
        {/*Content*/}
        <section className="sec-padding">
          <div id="blog-entry" className="blog-entry blog-list">
            <div className="container">
              <div className="row">
                {/*Item*/}
                <div className="col-md-8 offset-md-2">
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <a className="blog-img-link">
                        <img src="img/blog_img/001.jpg" alt="blog image" />
                      </a>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <a href="#">Fashion</a>
                        <a href="#">Cupple</a>
                      </div>
                      <h3 className="blog-title">
                        <a href="#">Effective Ways To Overcome Man Fashion’s</a>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                          Pellentesque fermentum ipsum sit amet dolor tincidunt,
                          sit amet ullamcorper urna tristique. Morbi at lobortis
                          erat, quis euismod tellus.
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <a href="#">Admin</a>
                        </span>
                        <span>23 June 2018</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <a className="blog-img-link">
                        <img src="img/blog_img/002.jpg" alt="blog image" />
                      </a>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <a href="#">Fashion</a>
                        <a href="#">Cupple</a>
                      </div>
                      <h3 className="blog-title">
                        <a href="#">Effective Ways To Overcome Man Fashion’s</a>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                          Pellentesque fermentum ipsum sit amet dolor tincidunt,
                          sit amet ullamcorper urna tristique. Morbi at lobortis
                          erat, quis euismod tellus.
                        </p>
                        <p>
                          Pellentesque fermentum ipsum sit amet dolor tincidunt,
                          sit amet ullamcorper urna tristique. Morbi at lobortis
                          erat, quis euismod tellus.
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <a href="#">Admin</a>
                        </span>
                        <span>23 June 2018</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <a className="blog-img-link">
                        <img src="img/blog_img/003.jpg" alt="blog image" />
                      </a>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <a href="#">Fashion</a>
                        <a href="#">Cupple</a>
                      </div>
                      <h3 className="blog-title">
                        <a href="#">Effective Ways To Overcome Man Fashion’s</a>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                          Pellentesque fermentum ipsum sit amet dolor tincidunt,
                          sit amet ullamcorper urna tristique. Morbi at lobortis
                          erat, quis euismod tellus.
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <a href="#">Admin</a>
                        </span>
                        <span>23 June 2018</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <a className="blog-img-link">
                        <img src="img/blog_img/004.jpg" alt="blog image" />
                      </a>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <a href="#">Fashion</a>
                        <a href="#">Cupple</a>
                      </div>
                      <h3 className="blog-title">
                        <a href="#">Effective Ways To Overcome Man Fashion’s</a>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                          Pellentesque fermentum ipsum sit amet dolor tincidunt,
                          sit amet ullamcorper urna tristique. Morbi at lobortis
                          erat, quis euismod tellus.
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <a href="#">Admin</a>
                        </span>
                        <span>23 June 2018</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <a className="blog-img-link">
                        <img src="img/blog_img/002.jpg" alt="blog image" />
                      </a>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <a href="#">Fashion</a>
                        <a href="#">Cupple</a>
                      </div>
                      <h3 className="blog-title">
                        <a href="#">Effective Ways To Overcome Man Fashion’s</a>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                          Pellentesque fermentum ipsum sit amet dolor tincidunt,
                          sit amet ullamcorper urna tristique. Morbi at lobortis
                          erat, quis euismod tellus.
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <a href="#">Admin</a>
                        </span>
                        <span>23 June 2018</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <a className="blog-img-link">
                        <img src="img/blog_img/005.jpg" alt="blog image" />
                      </a>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <a href="#">Fashion</a>
                        <a href="#">Cupple</a>
                      </div>
                      <h3 className="blog-title">
                        <a href="#">Effective Ways To Overcome Man Fashion’s</a>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                          Pellentesque fermentum ipsum sit amet dolor tincidunt,
                          sit amet ullamcorper urna tristique. Morbi at lobortis
                          erat, quis euismod tellus.
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <a href="#">Admin</a>
                        </span>
                        <span>23 June 2018</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
                  {/*Blog Item*/}
                  <div className="blog-item">
                    <div className="blog-item-image">
                      <a className="blog-img-link">
                        <img src="img/blog_img/001.jpg" alt="blog image" />
                      </a>
                    </div>
                    <div className="blog-item-content">
                      <div className="tag">
                        <a href="#">Fashion</a>
                        <a href="#">Cupple</a>
                      </div>
                      <h3 className="blog-title">
                        <a href="#">Effective Ways To Overcome Man Fashion’s</a>
                      </h3>
                      <div className="blog-description-content">
                        <p>
                          Pellentesque fermentum ipsum sit amet dolor tincidunt,
                          sit amet ullamcorper urna tristique. Morbi at lobortis
                          erat, quis euismod tellus.
                        </p>
                      </div>
                      <p className="info">
                        <span>
                          by <a href="#">Admin</a>
                        </span>
                        <span>23 June 2018</span>
                      </p>
                    </div>
                  </div>
                  {/*End Blog Item*/}
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

export default Blog;
