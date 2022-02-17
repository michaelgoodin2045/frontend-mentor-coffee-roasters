import React from 'react';

const Preferences = ({
  prepare,
  beans,
  quantity,
  grind,
  delivery,
  isAs,
  grindSummary,
}) => {
  return (
    <>
      <div className="blurb-box">
        <h4 className="preferences-text">
          "I drink my coffee <span className="verb">{isAs}</span>{' '}
          <span className="filler"> {prepare}</span>, with a
          <span className="filler"> {beans}</span> type of bean.{' '}
          <span className="filler"> {quantity}</span>{' '}
          <strong className={`grind-summary ${grindSummary ? '' : 'disable'}`}>
            {' '}
            ground ala <span className="filler"> {grind}</span>,{' '}
          </strong>
          sent to me <span className="filler"> {delivery}</span>."
        </h4>
      </div>
    </>
  );
};

export default Preferences;
