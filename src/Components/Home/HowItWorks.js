import React from 'react';
import HowItWorksCard from './HowItWorksCard';
import Button from '../Button';

const HowItWorks = () => {
  const value = 'Create your plan';
  const btnClass = 'cyan-btn';

  return (
    <div className="HowItWorks">
      <div className="how-container">
        <div className="title">
          <h4>How it works</h4>
        </div>
        <div className="line"></div>
      </div>
      <HowItWorksCard />
      <Button value={value} btnClass={btnClass} />
    </div>
  );
};

export default HowItWorks;
