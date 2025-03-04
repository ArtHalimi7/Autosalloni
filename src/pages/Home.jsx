import React from 'react';
import Hero from '../components/Hero'
import VehicleSpotlight from '../components/VehicleSpotlight';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
      <Hero/>
      <VehicleSpotlight/>
      <TestimonialCarousel/>
      <Footer/>
    </div>
  );
};

export default Home;