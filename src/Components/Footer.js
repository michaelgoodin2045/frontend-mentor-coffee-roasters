import React from 'react';
import logo from '../assets/shared/desktop/logo-cream.svg';
import Links from './Links';
import Socials from './Socials';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="NavLinks">
          <Links />
        </div>

        <Socials />
      </div>
    </div>
  );
};

export default Footer;
