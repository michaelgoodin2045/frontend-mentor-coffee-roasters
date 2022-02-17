import React from 'react';
import GoToTop from '../GoToTop';
import SharedHero from '../SharedHero';
import Choices from './Choices';
import Selection from './Selection';
import { motion } from 'framer-motion';

const Subscribe = () => {
  const title = 'Create a plan';
  const blurb =
    'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {' '}
      <div className="Subscribe">
        <SharedHero title={title} blurb={blurb} />
        <Choices />
        <Selection />
        <GoToTop />
      </div>
    </motion.div>
  );
};

export default Subscribe;
