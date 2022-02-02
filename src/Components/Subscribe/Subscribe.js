import React from 'react';
import SharedHero from '../SharedHero';
import Choices from './Choices';
import Selection from './Selection';

const Subscribe = () => {
  const title = 'Create a plan';
  const blurb =
    'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.';

  return (
    <div className="Subscribe">
      <SharedHero title={title} blurb={blurb} />
      <Choices />
      <Selection />
    </div>
  );
};

export default Subscribe;
