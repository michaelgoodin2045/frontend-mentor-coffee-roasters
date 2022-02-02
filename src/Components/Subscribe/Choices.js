import React from 'react';
import choices from '../../data/choices.json';

const Choices = () => {
  return (
    <div className="Choices">
      <div className="line"></div>
      <div className="container">
        {choices.map((choice, index) => {
          return (
            <div className="card" key={index}>
              <div className="choice-number">{choice.number}</div>
              <div className="name">
                <h3>{choice.title}</h3>
              </div>
              <div className="blurb-box">
                <p className="blurb-text">{choice.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Choices;
