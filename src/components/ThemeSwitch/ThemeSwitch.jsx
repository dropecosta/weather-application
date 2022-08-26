import React from 'react';
import './ThemeSwitch.scss';

const ThemeSwitch = ({ isCheck, handleDarkMode, onColor }) => {
  return (
    <>
      <input
        checked={isCheck}
        onChange={handleDarkMode}
        className="switch-checkbox"
        id={`switch-darkmode`}
        type="checkbox"
      />
      <label
        style={{ background: isCheck && onColor }}
        className="switch-label"
        htmlFor={`switch-darkmode`}
      >
        <span className={`switch-button`} />
      </label>
    </>
  );
};

export default ThemeSwitch
