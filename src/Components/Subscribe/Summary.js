import React from 'react';
import Preferences from './Preferences';

const Summary = ({
  prepare,
  beans,
  quantity,
  grind,
  delivery,
  isAs,
  grindSummary,
}) => {
  return (
    <div className="Summary">
      <div className="container">
        <div className="title">
          <p>Order summary</p>
        </div>
        <Preferences
          prepare={prepare}
          beans={beans}
          quantity={quantity}
          grind={grind}
          delivery={delivery}
          isAs={isAs}
          grindSummary={grindSummary}
        />
      </div>
    </div>
  );
};

export default Summary;
