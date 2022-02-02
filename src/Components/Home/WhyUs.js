import React from 'react';
import WhyUsCard from './WhyUsCard';

const WhyUs = () => {
  return (
    <div className="WhyUs">
      <div className="why-container">
        <div className="top">
          <div className="top-box">
            <div className="title">
              <h3>Why choose us?</h3>
            </div>
            <div className="blurb-box">
              <p className="blurb-text">
                A large part of our role is choosing which particular coffees
                will be featured in our range. This means working closely with
                the best coffee growers to give your a more impactful experience
                on every level.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
      <WhyUsCard />
    </div>
  );
};

export default WhyUs;
