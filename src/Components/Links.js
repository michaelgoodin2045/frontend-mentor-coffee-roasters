import React from 'react';
import { NavLink } from 'react-router-dom';
import links from '../data/links.json';

const Links = ({ closeMenu }) => {
  return (
    <>
      {links.map((link, index) => {
        return (
          <div className="nav-link" key={index} onClick={closeMenu}>
            <NavLink to={`/${link.link}`} className="link">
              {link.name}
            </NavLink>
          </div>
        );
      })}
    </>
  );
};

export default Links;
