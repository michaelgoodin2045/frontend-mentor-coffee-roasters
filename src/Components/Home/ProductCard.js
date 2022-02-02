import React from 'react';
import coffees from '../../data/coffees.json';

const ProductCard = () => {
  return (
    <div className="ProductCard">
      {coffees.map((coffee, index) => {
        return (
          <div className="card" key={index}>
            <div className="coffee-image">
              <img src={coffee.image} alt="coffee bag" />
            </div>
            <div className="coffee-name">
              <h4>{coffee.name}</h4>
            </div>
            <div className="coffee-description">
              <p>{coffee.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
