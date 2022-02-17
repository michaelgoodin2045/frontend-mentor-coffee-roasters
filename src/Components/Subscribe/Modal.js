import React from 'react';
import Preferences from './Preferences';
import Button from '../Button';
import MediaQuery from 'react-responsive';

const Modal = ({
  prepare,
  beans,
  quantity,
  grind,
  delivery,
  isAs,
  grindSummary,
  openModal,
  shipmentPrice,
  disabled,
  setOpenModal,
}) => {
  const dollars = new Intl.NumberFormat('en-us', {
    currency: 'USD',
    style: 'currency',
  }).format(shipmentPrice);
  const value = `Checkout - ${dollars} / mo`;
  const valueLargeScreens = 'Checkout';

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div className={`Modal ${openModal ? 'open' : ''}`}>
      <div className="container">
        <div className="title">
          <MediaQuery maxWidth={739}>
            <h3>Order Summary</h3>
          </MediaQuery>
          <MediaQuery minWidth={740}>
            <h2>Order Summary</h2>
          </MediaQuery>
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
        <div className="correct-box">
          <p className="correct-text">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
        </div>
        <MediaQuery maxWidth={739}>
          <div className="modal-btn-box">
            <Button
              value={value}
              btnClass={'modal-btn'}
              disabled={disabled}
              onClick={closeModal}
            />
          </div>
        </MediaQuery>
        <MediaQuery minWidth={740}>
          <div className="modal-btn-box">
            <div className="month-cost">
              <h2>{`${dollars} / mo`}</h2>
            </div>
            <Button
              value={valueLargeScreens}
              btnClass={'modal-btn'}
              disabled={disabled}
              onClick={closeModal}
            />
          </div>
        </MediaQuery>
      </div>
    </div>
  );
};

export default Modal;
