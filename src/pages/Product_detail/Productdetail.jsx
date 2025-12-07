import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Section1 from './Section1'

const Productdetail = () => {
  return (
    <>
        <Header />
        <div className="page-contaiter">
 <section className="breadcrumb">
  <div className="background-image" data-background="img/bg_img/bg_001.jpg" data-bg-posx="center" data-bg-posy="center" data-bg-overlay={4} />
  <div className="breadcrumb-content">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="breadcrumb-title">Man Clothing Fashion</h1>
          <nav className="breadcrumb-link">
            <span><a href="home.html">Home</a></span>
            <span><a href="home.html">Categories</a></span>
            <span>Back In Stock Clothes</span>
          </nav>
        </div>
      </div>
    </div>
  </div>
</section>



<Section1 />


        </div>
        <Footer />
    </>
  )
}

export default Productdetail