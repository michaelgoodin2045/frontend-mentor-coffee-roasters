import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import logo from '../../assets/shared/desktop/logo.svg';
import Links from '../Links';
import Hamburger from './Hamburger';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setHamburgerOpen(false);
  };

  return (
    <div className="Navbar">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Link>

      <div className={`NavLinks ${hamburgerOpen ? ' open-menu' : ''}`}>
        <Links closeMenu={closeMenu} />
      </div>

      <MediaQuery maxWidth={739}>
        <div
          className={`Hamburger ${hamburgerOpen ? ' hamburger-open' : ''}`}
          onClick={toggleHamburger}
        >
          <Hamburger />
        </div>
      </MediaQuery>
    </div>
  );
};

export default Navbar;
