import React, { useState, useEffect } from 'react';
import plans from '../../data/plans.json';
import Arrow from './Arrow';
import Summary from './Summary';

const Plans = () => {
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
  const space = '_____';

  const prepare = orderData.prepare === null ? space : orderData.prepare;
  const beans = orderData.beans === null ? space : orderData.beans;
  const quantity = orderData.quantity === null ? space : orderData.quantity;
  const grind = orderData.grind === null ? space : orderData.grind;
  const delivery = orderData.delivery === null ? space : orderData.delivery;

  //Enable Order Button
  useEffect(() => {
    if (
      orderData.prepare !== null &&
      orderData.beans !== null &&
      orderData.quantity !== null &&
      orderData.delivery !== null
    ) {
      setOrderButton(true);
    }
    console.log(orderButton);
  }, [orderData, orderButton]);
  //Open Options Menu

  const handleOptions = (e) => {
    setOpenOptions(!openOptions);
    const question = e.target;
    //console.log(question);
    const parent = question.parentElement;
    //console.log(parent);
    //const attribute = parent.getAttribute('data-target');
    //console.log(attribute);
    const targetDiv = parent.nextSibling;
    const targetArrow = parent.lastChild;
    //console.log(targetDiv);
    //console.log(targetArrow);
    targetDiv.classList.toggle('open');
    targetArrow.classList.toggle('rotate');
  };

  //Select preferences for order
  const handleOrder = (e) => {
    //console.log(e.target);
    const { name, id } = e.target;
    setOrderData({ ...orderData, [name]: id });
    //console.log(name);
    //console.log(id);
    console.log(orderData);
    const prepareSelection = Array.from(
      document.querySelectorAll("input[name='prepare']")
    );
    //console.log(prepareSelection);
    const grindType = document.getElementById('question14');
    const grindOptions = document.querySelector('.option14');

    const capsuleSelected = prepareSelection.filter(
      (selection) => selection.checked && selection.id === 'Capsules'
    );
    //console.log(capsuleSelected);
    if (capsuleSelected.length > 0) {
      grindType.classList.add('disable');
      grindOptions.classList.add('disable');

      setArrowDisable(true);
    } else {
      grindType.classList.remove('disable');
      setArrowDisable(false);
      grindOptions.classList.remove('disable');
    }
  };

  return (
    <div className="Plans">
      <div className="container">
        {plans.map((plan, index) => {
          return (
            <div className="plan-box" key={index}>
              <div
                className={`question`}
                id={`question${plan.id}`}
                onClick={handleOptions}
              >
                <h4>{plan.question}</h4>
                <div className="arrow">
                  <Arrow arrowDisable={arrowDisable} />
                </div>
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
      </div>
      <Summary
        prepare={prepare}
        beans={beans}
        quantity={quantity}
        grind={grind}
        delivery={delivery}
        orderButton={orderButton}
      />
    </div>
  );
};

export default Plans;

/*
{plans.map((item, index) => {
          return (
            <div className={`card C${index + 1}`} key={index}>
              <div className="title">
                <h2>{item.criteria}</h2>
              </div>
              <div className="options">
                <div
                  className={`option-item one ${selectOne ? 'active' : ''}`}
                  onClick={activeOne}
                >
                  <div className="title">
                    <h4>{item.options.one.title}</h4>
                  </div>
                  <div className="description">
                    <p>{item.options.one.description}</p>
                  </div>
                </div>
                <div
                  className={`option-item two ${selectTwo ? 'active' : ''}`}
                  onClick={activeTwo}
                >
                  <div className="title">
                    <h4>{item.options.two.title}</h4>
                  </div>
                  <div className="description">
                    <p>{item.options.two.description}</p>
                  </div>
                </div>
                <div
                  className={`option-item three ${selectThree ? 'active' : ''}`}
                  onClick={activeThree}
                >
                  <div className="title">
                    <h4>{item.options.three.title}</h4>
                  </div>
                  <div className="description">
                    <p>{item.options.three.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
*/
/*const [selectOne, setSelectOne] = useState(false);
  const [selectTwo, setSelectTwo] = useState(false);
  const [selectThree, setSelectThree] = useState(false);

  const activeOne = () => {
    setSelectOne((prev) => !prev);
    setSelectTwo(false);
    setSelectThree(false);
  };

  const activeTwo = () => {
    setSelectOne(false);
    setSelectTwo((prev) => !prev);
    setSelectThree(false);
  };

  const activeThree = () => {
    setSelectOne(false);
    setSelectTwo(false);
    setSelectThree((prev) => !prev);
  }; */

/*
  const [openOption11, setOpenOption11] = useState(false);
  const [openOptionTwo, setOpenOptionTwo] = useState(false);
  const [openOptionThree, setOpenOptionThree] = useState(false);
  const [openOptionFour, setOpenOptionFour] = useState(false);
  const [openOptionFive, setOpenOptionFive] = useState(false);

  //Toggle Options

  const handleOptions = () => {
    setOpenOption11((prev) => !prev);
    console.log('Clicked!');
  };
  */
