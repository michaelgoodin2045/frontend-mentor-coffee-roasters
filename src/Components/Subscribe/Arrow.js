import React from 'react';
import arrow from '../../assets/arrow.svg';

const Arrow = ({ arrowDisable, handleArrow }) => {
  return (
    <div className="arrow" onClick={handleArrow}>
      <img src={arrow} alt="" className={`${arrowDisable ? 'disable' : ''}`} />
    </div>
  );
};

export default Arrow;
