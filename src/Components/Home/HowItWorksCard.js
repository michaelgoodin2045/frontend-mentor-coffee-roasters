import React from 'react';
import how from '../../data/how.json';

const HowItWorksCard = () => {
  return (
    <div className="HowItWorksCard">
      {how.map((el, index) => {
        return (
          <div className="card" key={index}>
            <div className="number">{el.number}</div>
            <div className="title">
              <h4>{el.title}</h4>
            </div>
            <div className="description">
              <p>{el.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HowItWorksCard;
