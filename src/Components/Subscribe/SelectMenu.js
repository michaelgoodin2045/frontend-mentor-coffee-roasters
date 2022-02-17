import React from 'react';
import plans from '../../data/plans.json';
import { HashLink } from 'react-router-hash-link';

const SelectMenu = ({ activeIndex, setActiveIndex }) => {
  return (
    <div className="SelectMenu">
      {plans.map((item, index) => {
        return (
          <div
            className="card"
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            <HashLink
              to={`/subscribe#plan${item.id}`}
              className={
                activeIndex === index
                  ? 'sidebar-link active-link'
                  : 'sidebar-link'
              }
            >
              <div className={`item-number item${item.id}`}>
                <h4>{item.number}</h4>
              </div>
              <div className="title">
                <h4>{item.title}</h4>
              </div>
            </HashLink>
          </div>
        );
      })}
    </div>
  );
};

export default SelectMenu;
//activeClassName="selected"
