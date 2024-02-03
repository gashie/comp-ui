import React, { useState } from 'react';
import './style.css'

const Switch = ({ initialState, onStateChange }) => {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    setIsOn(!isOn);
    onStateChange(!isOn);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isOn} onChange={handleToggle} />
      <span className="slider round" />
    </label>
  );
};

export default Switch;