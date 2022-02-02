import React from 'react';
import SelectMenu from './SelectMenu';
import Plans from './Plans';
import MediaQuery from 'react-responsive/';

const Selection = () => {
  return (
    <div className="Selection">
      <MediaQuery minWidth={740}>
        <SelectMenu />
      </MediaQuery>
      <Plans />
    </div>
  );
};

export default Selection;
