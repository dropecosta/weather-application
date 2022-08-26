import React from 'react';
import './ToggleSwitch.scss';

const ToggleSwitch = ({ isOn, handleToggle, onColor }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id={`switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="switch-label"
        htmlFor={`switch-new`}
      >
        <span className={`switch-button`} />
      </label>
    </>
  );
};

export default ToggleSwitch
