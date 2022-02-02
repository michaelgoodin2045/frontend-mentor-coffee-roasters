import React from 'react';
import socials from '../data/socials.json';

const Socials = () => {
  return (
    <div className="Socials">
      {socials.map((social, index) => {
        return (
          <div className="social-item" key={index}>
            <a href={social.url} target="_blank" rel="noreferrer">
              <img src={social.image} alt="" />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
