import React from 'react';
import Button from '../Button';

const Hero = ({ routeChange }) => {
  const value = 'Create your plan';
  const btnClass = 'cyan-btn';

  return (
    <div className="Hero">
      <div className="viewport">
        <div className="title">
          <h1 className="line one">Great coffee</h1>
          <h1 className="line two">made simple.</h1>
        </div>
        <div className="blurb-box">
          <p className="blurb-text">
            Start your mornings with the world's best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
        </div>
        <div className="hero-btn-box">
          <Button
            value={value}
            btnClass={btnClass}
            disabled={false}
            onClick={routeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
