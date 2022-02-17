import React, { useState } from 'react';
import SelectMenu from './SelectMenu';
import Plans from './Plans';
import MediaQuery from 'react-responsive/';

const Selection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="Selection">
      <MediaQuery minWidth={980}>
        <SelectMenu activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </MediaQuery>
      <Plans activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default Selection;
