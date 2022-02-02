import React from 'react';
import Hero from './Hero';
import Collections from './Collections';
import WhyUs from './WhyUs';
import HowItWorks from './HowItWorks';

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Collections />
      <WhyUs />
      <HowItWorks />
    </div>
  );
};

export default Home;
