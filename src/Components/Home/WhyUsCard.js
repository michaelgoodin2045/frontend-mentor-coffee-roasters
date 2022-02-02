import React from 'react';
import why from '../../data/why.json';

const WhyUsCard = () => {
  return (
    <div className="WhyUsCard">
      {why.map((el, index) => {
        return (
          <div className="card" key={index}>
            <div className="why-image">
              <img src={el.image} alt="" />
            </div>
            <div className="why-title">
              <h4>{el.title}</h4>
            </div>
            <div className="why-description">
              <p>{el.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WhyUsCard;
