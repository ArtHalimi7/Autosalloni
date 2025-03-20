import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import InfiniteMenu from '../components/InfiniteMenu/InfiniteMenu';

const Home = () => {
  return (
    <div>
      <Hero />
      <div style={{ height: '600px', position: 'relative', width: '100%' }}>
        <InfiniteMenu />
      </div>
      <Footer />
    </div>
  );
};

export default Home;