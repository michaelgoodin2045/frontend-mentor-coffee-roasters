import React from 'react';
import SharedHero from '../SharedHero';
import Commitment from './Commitment';
import Locations from './Locations';
import Quality from './Quality';
import { motion } from 'framer-motion';

const About = () => {
  const title = 'About Us';
  const blurb =
    'Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="About">
        <SharedHero title={title} blurb={blurb} />
        <Commitment />
        <Quality />
        <Locations />
      </div>
    </motion.div>
  );
};

export default About;
