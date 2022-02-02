import React from 'react';

const SharedHero = ({ title, blurb }) => {
  return (
    <div className="SharedHero">
      <div className="viewport">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="blurb-box">
          <p className="blurb-text">{blurb}</p>
        </div>
      </div>
    </div>
  );
};

export default SharedHero;
