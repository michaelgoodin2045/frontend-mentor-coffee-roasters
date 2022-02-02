import React from 'react';
import locations from '../../data/locations.json';

const LocationsCard = () => {
  return (
    <div className="LocationsCard">
      {locations.map((location, index) => {
        return (
          <div className="card" key={index}>
            <div className="location-image">
              <img src={location.image} alt="country" />
            </div>
            <div className="location-name">
              <h3>{location.location}</h3>
            </div>
            <div className="location-street">
              <p>{location.street}</p>
            </div>
            <div className="location-city">
              <p>{location.city}</p>
            </div>
            <div className="location-code">
              <p>{location.code}</p>
            </div>
            <div className="location-phone">
              <p>{location.phone}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LocationsCard;
