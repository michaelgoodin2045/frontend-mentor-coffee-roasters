import React from 'react';

const Button = ({ value, btnClass }) => {
  return (
    <>
      <button className={btnClass}>
        <h5 className="btn-text">{value}</h5>
      </button>
    </>
  );
};

export default Button;
