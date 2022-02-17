import React, { useState, useEffect } from 'react';
import plans from '../../data/plans.json';
import Arrow from './Arrow';
import Modal from './Modal';
import Summary from './Summary';
import Button from '../Button';

const Plans = ({ activeIndex, setActiveIndex }) => {
  const initialState = {
    prepare: null,
    beans: null,
    quantity: null,
    grind: null,
    delivery: null,
  };

  const [orderData, setOrderData] = useState(initialState);
  const [openOptions, setOpenOptions] = useState(false);
  const [arrowDisable, setArrowDisable] = useState(false);
  const [orderButton, setOrderButton] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [grindSummary, setGrindSummary] = useState(true);
  const [isAs, setIsAs] = useState('as');
  const [openModal, setOpenModal] = useState(false);
  const [shipmentPrice, setShipmentPrice] = useState(0);
  const space = '_____';
  const value = 'Create my plan!';

  const prepare = orderData.prepare === null ? space : orderData.prepare;
  const beans = orderData.beans === null ? space : orderData.beans;
  const quantity = orderData.quantity === null ? space : orderData.quantity;
  const grind = orderData.grind === null ? space : orderData.grind;
  const delivery = orderData.delivery === null ? space : orderData.delivery;

  //Enable Order Button

  useEffect(() => {
    setOrderButton(() => {
      if (
        orderData.prepare === 'Capsules' &&
        orderData.beans !== null &&
        orderData.quantity !== null &&
        orderData.delivery !== null
      ) {
        return setOrderButton(true);
      } else if (
        orderData.prepare !== null &&
        orderData.prepare !== 'Capsules' &&
        orderData.beans !== null &&
        orderData.quantity !== null &&
        orderData.grind !== null &&
        orderData.delivery !== null
      ) {
        return setOrderButton(true);
      } else {
        return setOrderButton(false);
      }
    });
  }, [orderData]);
  useEffect(() => {
    setIsDisabled(() => {
      if (
        orderData.prepare === 'Capsules' &&
        orderData.beans !== null &&
        orderData.quantity !== null &&
        orderData.delivery !== null
      ) {
        return setIsDisabled(false);
      } else if (
        orderData.prepare !== null &&
        orderData.prepare !== 'Capsules' &&
        orderData.beans !== null &&
        orderData.quantity !== null &&
        orderData.grind !== null &&
        orderData.delivery !== null
      ) {
        return setIsDisabled(false);
      } else {
        return setIsDisabled(true);
      }
    });
  }, [orderData]);

  useEffect(() => {
    setShipmentPrice(() => {
      if (orderData.quantity === '250g') {
        return setShipmentPrice(
          orderData.delivery === 'Every Week'
            ? (720 * 4) / 100
            : orderData.delivery === 'Every 2 Weeks'
            ? (960 * 2) / 100
            : 1200 / 100
        );
      } else if (orderData.quantity === '500g') {
        return setShipmentPrice(
          orderData.delivery === 'Every Week'
            ? (1300 * 4) / 100
            : orderData.delivery === 'Every 2 Weeks'
            ? (1750 * 2) / 100
            : 2200 / 100
        );
      } else {
        return setShipmentPrice(
          orderData.delivery === 'Every Week'
            ? (2200 * 4) / 100
            : orderData.delivery === 'Every 2 Weeks'
            ? (3200 * 2) / 100
            : 4200 / 100
        );
      }
    });
  }, [shipmentPrice, orderData.delivery, orderData.quantity]);

  //Open Options Menu

  const handleOptions = (e) => {
    setOpenOptions(!openOptions);
    const question = e.target;
    const parent = question.parentElement;
    const targetDiv = parent.nextSibling;
    const targetArrow = parent.lastChild;
    targetDiv.classList.toggle('open');
    targetArrow.classList.toggle('rotate');
  };

  const handleArrow = (e) => {
    const arrowTarget = e.target;
    const arrowParent = arrowTarget.parentElement;
    const questionDiv = arrowParent.parentElement;
    const targetDiv = questionDiv.nextSibling;
    const targetArrow = questionDiv.lastChild;
    targetDiv.classList.toggle('open');
    targetArrow.classList.toggle('rotate');
  };

  //Select preferences for order
  const handleOrder = (e) => {
    const { name, id } = e.target;
    setOrderData({ ...orderData, [name]: id });

    const prepareSelection = Array.from(
      document.querySelectorAll("input[name='prepare']")
    );

    const grindType = document.getElementById('question14');
    const grindOptions = document.querySelector('.option14');

    const capsuleSelected = prepareSelection.filter(
      (selection) => selection.checked && selection.id === 'Capsules'
    );

    if (capsuleSelected.length > 0) {
      grindType.classList.add('disable');
      grindOptions.classList.add('disable');
      setArrowDisable(true);
      setIsAs('using');
      setGrindSummary(false);
    } else {
      grindType.classList.remove('disable');
      setArrowDisable(false);
      setIsAs('as');
      setGrindSummary(true);
      grindOptions.classList.remove('disable');
    }
  };

  const handleModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="Plans">
      <div className="container">
        {plans.map((plan, index) => {
          return (
            <div
              className={activeIndex === index ? 'plan-box active' : 'plan-box'}
              id={`plan${plan.id}`}
              key={index}
              onMouseOver={() => setActiveIndex(index)}
            >
              <div className={`question`} id={`question${plan.id}`}>
                <h4 onClick={handleOptions}>{plan.question}</h4>
                <Arrow arrowDisable={arrowDisable} handleGuess={handleArrow} />
              </div>

              <div className={`option-items option${plan.id}`}>
                {plan.options.map((option) => {
                  return (
                    <div className={`option-card ${plan.name}`} key={option.id}>
                      <input
                        type="radio"
                        name={plan.name}
                        id={option.brief}
                        onClick={handleOrder}
                      />
                      <label className="option-label" htmlFor={option.brief}>
                        <span
                          className={`option-card-title wrapper-${plan.name}`}
                        >
                          {option.type}
                        </span>
                        <span
                          className={`option-card-description ${option.brief}`}
                        >
                          {option.description}
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <Summary
          prepare={prepare}
          beans={beans}
          quantity={quantity}
          grind={grind}
          delivery={delivery}
          isAs={isAs}
          grindSummary={grindSummary}
        />
        <div className="btn-box">
          <Button
            value={value}
            btnClass={`order-btn ${orderButton ? 'enable' : ''}`}
            disabled={isDisabled}
            onClick={handleModal}
          />
        </div>
      </div>

      <Modal
        prepare={prepare}
        beans={beans}
        quantity={quantity}
        grind={grind}
        delivery={delivery}
        isAs={isAs}
        grindSummary={grindSummary}
        openModal={openModal}
        shipmentPrice={shipmentPrice}
        disabled={false}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};

export default Plans;
