import React from 'react';
import HowItWorksCard from './HowItWorksCard';
import Button from '../Button';
import Line from '../Line';
import MediaQuery from 'react-responsive/';

const HowItWorks = ({ routeChange }) => {
  const value = 'Create your plan';
  const btnClass = 'cyan-btn';

  return (
    <div className="HowItWorks">
      <div className="how-container">
        <div className="title">
          <h4>How it works</h4>
        </div>
        <MediaQuery minWidth={740}>
          <div className="line-insert">
            <Line />
          </div>
        </MediaQuery>
      </div>
      <HowItWorksCard />
      <Button
        value={value}
        btnClass={btnClass}
        disabled={false}
        onClick={routeChange}
      />
    </div>
  );
};

export default HowItWorks;
