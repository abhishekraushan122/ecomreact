import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Section5 = () => {
  return (
    <>

<section className="sec-padding bg--secondary">
  <div className="container">
    <div className="page-head">
      <span className="page-sub-title">Testimonials</span>
      <h2 className="page-title">Our Customer Say</h2>
    </div>
  </div>
  {/*Customer Review*/}
  <div className="container-fluid customer-review-section">
  <Slider className='owl-theme' loop items={6} margin={18} nav={false} autoplay={true} autoplayTimeout={3000} dots={false}>
      <div className="item">
        <div className="review-item">
          <a href="#" className="review-author-name">Ronald Dahi</a>
          <div className="review-ratting">
            <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
              <span style={{width: '60%'}} />
            </div>
            <a href="#" className="product-rating-count"><span className="count">(3)</span></a>
          </div>
          <h5 className="review-title">Excellent Product</h5>
          <p className="review-description">Yeah, I am crazy. Ok. May be I am. But I prefer to be crazy than being a dummy.</p>
        </div>
      </div>
      <div className="item">
        <div className="review-item">
          <a href="#" className="review-author-name">Logan Villeda</a>
          <div className="review-ratting">
            <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
              <span style={{width: '100%'}} />
            </div>
            <a href="#" className="product-rating-count"><span className="count">(5)</span></a>
          </div>
          <h5 className="review-title">Great</h5>
          <p className="review-description">Thumbs Up! 👍</p>
        </div>
      </div>
      <div className="item">
        <div className="review-item">
          <a href="#" className="review-author-name">Mariam Phegley</a>
          <div className="review-ratting">
            <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
              <span style={{width: '100%'}} />
            </div>
            <a href="#" className="product-rating-count"><span className="count">(5)</span></a>
          </div>
          <h5 className="review-title">Our Love it. Thanks</h5>
          <p className="review-description">There's plenty of money out there. They print more every day. But this ticket, there's only five of them in the whole world.!</p>
        </div>
      </div>
      <div className="item">
        <div className="review-item">
          <a href="#" className="review-author-name">Joana Soltis</a>
          <div className="review-ratting">
            <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
              <span style={{width: '100%'}} />
            </div>
            <a href="#" className="product-rating-count"><span className="count">(5)</span></a>
          </div>
          <h5 className="review-title">Love This Product</h5>
          <p className="review-description">I love feeding my dog a healthy food that he loves to eat! He has severe food intolerances to red meat and dairy!</p>
        </div>
      </div>
      <div className="item">
        <div className="review-item">
          <a href="#" className="review-author-name">Francie Maris</a>
          <div className="review-ratting">
            <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
              <span style={{width: '100%'}} />
            </div>
            <a href="#" className="product-rating-count"><span className="count">(5)</span></a>
          </div>
          <h5 className="review-title">My Favorite Product!</h5>
          <p className="review-description">My Favorite Product!</p>
        </div>
      </div>
    </Slider>
  </div>
  {/*End Customer Review*/}
  {/*Testimonials*/}
  <div className="container customer-testimonials-section">
    <div className="row">
      <div className="col-lg-8 mx-lg-auto">
        <div className="testimonials-slider owl-carousel owl-theme">
          <div className="item">
            <div className="testimonials-item">
              <div className="testimonials-icon"><i className="ti-quote-left" /></div>
              <p className="testimonials-quote">“There's plenty of money out there. They print more every day. But this ticket, there's only five of them in the whole world, and that's all there's ever going to be. Only a dummy would give this up for something as common money. Are you a dummy?”</p>
              <div className="testimonials-people">
                <h6 className="testimonials-people-title">Anthony T. Hincks</h6>
                <span className="testimonials-people-sub_title">(Apple Founder)</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonials-item">
              <div className="testimonials-icon"><i className="ti-quote-left" /></div>
              <p className="testimonials-quote">“So, what if, instead of thinking about solving your whole life, you just think about adding additional good things. One at a time. Just let your pile of good things grow”</p>
              <div className="testimonials-people">
                <h6 className="testimonials-people-title">Nicki Golden</h6>
                <span className="testimonials-people-sub_title">(Microsoft Ceo)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*End Testimonials*/}
</section>




  <section className="sec-padding-t">
  <div className="container">
    <div className="page-head">
      <span className="page-sub-title">New Trends</span>
      <h2 className="page-title">Latest News</h2>
    </div>
  </div>
  <div className="container">
  <Slider className='owl-theme' loop items={3} margin={18} nav={false} autoplay={true} autoplayTimeout={3000} dots={false}>

      {/*Item*/}
      <div className="item">
        <div className="blog-item">
          <div className="blog-item-image">
            <a href="blog_single.html" className="blog-img-link">
              <img src="img/blog_img/001.jpg" alt="blog image" />
            </a>
          </div>
          <div className="blog-item-content">
            <div className="tag">
              <a href="#">Fashion</a>
              <a href="#">Cupple</a>
            </div>
            <h4 className="blog-title"><a href="blog_single.html">Effective Ways To Overcome  Man Fashion’s</a></h4>
            <p className="info">
              <span>by <a href="#">Admin</a></span>
              <span>23 June 2018</span>
            </p>
          </div>
        </div>
      </div>
      {/*Item*/}
      <div className="item">
        <div className="blog-item">
          <div className="blog-item-image">
            <a href="blog_single.html" className="blog-img-link">
              <img src="img/blog_img/002.jpg" alt="blog image" />
            </a>
          </div>
          <div className="blog-item-content">
            <div className="tag">
              <a href="#">River</a>
            </div>
            <h4 className="blog-title"><a href="blog_single.html">Summer Kids Collection Launched 2019</a></h4>
            <p className="info">
              <span>by <a href="#">Admin</a></span>
              <span>15 April 2018</span>
            </p>
          </div>
        </div>
      </div>
      {/*Item*/}
      <div className="item">
        <div className="blog-item">
          <div className="blog-item-image">
            <a href="blog_single.html" className="blog-img-link">
              <img src="img/blog_img/003.jpg" alt="blog image" />
            </a>
          </div>
          <div className="blog-item-content">
            <div className="tag">
              <a href="#">Women</a>
            </div>
            <h4 className="blog-title"><a href="blog_single.html">Huge Saving Limited Offer period</a></h4>
            <p className="info">
              <span>by <a href="#">User</a></span>
              <span>08 March 2018</span>
            </p>
          </div>
        </div>
      </div>
      {/*Item*/}
      <div className="item">
        <div className="blog-item">
          <div className="blog-item-image">
            <a href="blog_single.html" className="blog-img-link">
              <img src="img/blog_img/004.jpg" alt="blog image" />
            </a>
          </div>
          <div className="blog-item-content">
            <div className="tag">
              <a href="#">Women</a>
              <a href="#">Car</a>
            </div>
            <h4 className="blog-title"><a href="blog_single.html">Effective Ways To Overcome  Man Fashion’s</a></h4>
            <p className="info">
              <span>by <a href="#">Admin</a></span>
              <span>31 January 2018</span>
            </p>
          </div>
        </div>
      </div>
      {/*Item*/}
      <div className="item">
        <div className="blog-item">
          <div className="blog-item-image">
            <a href="blog_single.html" className="blog-img-link">
              <img src="img/blog_img/005.jpg" alt="blog image" />
            </a>
          </div>
          <div className="blog-item-content">
            <div className="tag">
              <a href="#">Women</a>
            </div>
            <h4 className="blog-title"><a href="blog_single.html">Effective Ways To Overcome  Man Fashion’s</a></h4>
            <p className="info">
              <span>by <a href="#">Admin</a></span>
              <span>04 January 2018</span>
            </p>
          </div>
        </div>
      </div>
    </Slider>
  </div>
</section>


<section className="sec-padding">
  <div className="container">
  <Slider className='owl-theme' loop items={6} margin={18} autoplayHoverPause={true} nav={false} autoplay={true} autoplayTimeout={3000} dots={false}>

      {/*Item*/}
      <div className="item">
        <div className="brand-item">
          <a>
            <img src="img/brand/001.png" alt="brand" />
          </a>
        </div>
      </div>
      {/*Item*/}
      <div className="item">
        <div className="brand-item">
          <a>
            <img src="img/brand/002.png" alt="brand" />
          </a>
        </div>
      </div>
      {/*Item*/}
      <div className="item">
        <div className="brand-item">
          <a>
            <img src="img/brand/003.png" alt="brand" />
          </a>
        </div>
      </div>
      {/*Item*/}
      <div className="item">
        <div className="brand-item">
          <a>
            <img src="img/brand/004.png" alt="brand" />
          </a>
        </div>
      </div>
      {/*Item*/}
      <div className="item">
        <div className="brand-item">
          <a>
            <img src="img/brand/005.png" alt="brand" />
          </a>
        </div>
      </div>
      {/*Item*/}
      <div className="item">
        <div className="brand-item">
          <a>
            <img src="img/brand/006.png" alt="brand" />
          </a>
        </div>
      </div>
    </Slider>
  </div>
</section>

</>
  )
}

export default Section5