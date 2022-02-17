import React from 'react';
import choices from '../../data/choices.json';
import Line from '../Line';
import MediaQuery from 'react-responsive';

const Choices = () => {
  return (
    <div className="Choices">
      <MediaQuery minWidth={740}>
        <div className="line-insert-choices">
          <Line />
        </div>
      </MediaQuery>

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
