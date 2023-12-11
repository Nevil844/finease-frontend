// components/DynamicRadioButtons.js

import React, { useState } from 'react';
import { MouseEventHandler } from 'react';

interface Option {
     label: string;
         value: string;
  }
interface Props {
    options: Option[];
    onSelect: Function;
  }

const DynamicRadioButtons = ({ options, onSelect }:Props) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;    
    onSelect(value);
    setSelectedOption(value);
  };

  return (
    <span>
      {options.map((option) => (
        <span key={option.value}>
          <input
            type="radio"
            id={option.value}
            name="dynamicRadio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </span>
      ))}
    </span>
  );
};

export default DynamicRadioButtons;