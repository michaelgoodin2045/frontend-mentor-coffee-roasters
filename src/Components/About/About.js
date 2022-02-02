import React from 'react';
import SharedHero from '../SharedHero';
import Commitment from './Commitment';
import Locations from './Locations';
import Quality from './Quality';

const About = () => {
  const title = 'About Us';
  const blurb =
    'Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.';

  return (
    <div className="About">
      <SharedHero title={title} blurb={blurb} />
      <Commitment />
      <Quality />
      <Locations />
    </div>
  );
};

export default About;
