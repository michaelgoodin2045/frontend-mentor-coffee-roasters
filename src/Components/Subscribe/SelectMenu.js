import React from 'react';
import selectMenu from '../../data/selectMenu.json';

const SelectMenu = () => {
  return (
    <div className="SelectMenu">
      {selectMenu.map((item, index) => {
        return (
          <div className="card" key={index}>
            <div className="item-number">
              <h4>{item.number}</h4>
            </div>
            <div className="title">
              <h4>{item.title}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectMenu;
