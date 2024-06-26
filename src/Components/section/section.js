// src/App.js

import React from 'react';
import Hero from '../Hero/Hero';
import Nestednavbar from '../Nestednavbar/Nestednavbar';
import CenteredContent from '../section7/section7';
import TestimonialSlider from '../section5/TestimonialSlider';
import Footerr from '../footer/footer';
import Footer from '../footer/footerrs';
import WhyUs from '../section.6/Whyus';
import Insights from '../Insight/Insights';
import MiddlePart from '../Middlepage/MiddlePart';


// import Insights from '../section.6/Appp';

function Section() {
  return ( 
    <div className="Container">
      <Hero/>
      <Nestednavbar/>
      <WhyUs/>
      {/* <MiddlePart/> */}
      <Insights/>
      <TestimonialSlider/>
      <CenteredContent/>
      <Footerr/>
    <Footer/>
    </div>
  );
}

export default Section;
