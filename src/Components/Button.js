import React from 'react';

const Button = ({ value, btnClass, disabled, onClick }) => {
  return (
    <>
      <button className={btnClass} onClick={onClick} disabled={disabled}>
        <h5 className="btn-text">{value}</h5>
      </button>
    </>
  );
};

export default Button;
