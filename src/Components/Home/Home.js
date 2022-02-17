import React from 'react';
import Hero from './Hero';
import Collections from './Collections';
import WhyUs from './WhyUs';
import HowItWorks from './HowItWorks';
import { useNavigate } from 'react-router-dom';
import GoToTop from '../GoToTop';
import { motion } from 'framer-motion';

const Home = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = 'subscribe';
    navigate(path);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="Home">
        <Hero routeChange={routeChange} />
        <Collections />
        <WhyUs />
        <HowItWorks routeChange={routeChange} />
        <GoToTop />
      </div>
    </motion.div>
  );
};

export default Home;
