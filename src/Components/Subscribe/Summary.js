import React from 'react';
import Button from '../Button';

const Summary = ({
  prepare,
  beans,
  quantity,
  grind,
  delivery,
  orderButton,
}) => {
  const value = 'Create my plan!';

  return (
    <div className="Summary">
      <div className="container">
        <div className="title">
          <p>Order summary</p>
        </div>
        <div className="blurb-box">
          <h4 className="blurb-text">
            "I drink my coffee as <span className="filler"> {prepare}</span>,
            with a<span className="filler"> {beans}</span> type of bean.{' '}
            <span className="filler"> {quantity}</span> ground ala{' '}
            <span className="filler"> {grind}</span>, sent to me{' '}
            <span className="filler"> {delivery}</span>."
          </h4>
        </div>
      </div>
      <div className="btn-box">
        <Button
          value={value}
          btnClass={`order-btn ${orderButton ? 'enable' : ''}`}
        />
      </div>
    </div>
  );
};

export default Summary;
