import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Section1 from './Section1'
import Section2 from './Section2'

const Productlisting = () => {
  return (
    <>
<Header />
<div className="page-contaiter">
<Section1 />
<Section2 />
</div>
<Footer />
    </>
  )
}

export default Productlisting