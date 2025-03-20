import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import CircularGallery from '../components/CircularGallery/Gallery'

const Home = () => {
  return (
    <div>
      <Hero />
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;