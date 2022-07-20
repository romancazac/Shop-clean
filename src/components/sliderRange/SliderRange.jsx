import React from 'react';

import Slider from '@mui/material/Slider';

export default function RangeSlider({handleChangePrice, selectedPrice}) {

  return (

    <Slider
      getAriaLabel={() => 'Temperature range'}
      value={selectedPrice}
      onChange={handleChangePrice}
      min={0}
      max={5000}
      valueLabelDisplay="auto"
      
    />

  );
}