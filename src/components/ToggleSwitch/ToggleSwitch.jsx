import React, { useState } from 'react';
import './ToggleSwitch.scss';

const ToggleSwitch = (props) => {
  const [toggled, setToggled] = useState(true);
  return (
    <label
      className="toggle"
      onClick={() => {
        setToggled((checked) => !checked);
        props.onClick();
      }}
    >
      {toggled && <span className="on">C</span>}
      {!toggled && <span className="off">F</span>}
      <div
        style={{
          transform: toggled ? "translateX(28px)" : "translateX(0px)",
        }}
      ></div>
    </label>
  );
};

export default ToggleSwitch;
