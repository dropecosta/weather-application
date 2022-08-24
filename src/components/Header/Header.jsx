import React from 'react';
import './Header.scss';

const Header = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const body = document.body;
    const toggle = document.querySelector('.toggle-inner');

    if (darkMode === true) {
      body.classList.add('dark-mode');
      toggle.classList.add('toggle-active');
    } else {
      body.classList.remove('dark-mode');
      toggle.classList.remove('toggle-active');
    }
  }, [darkMode]);

  return (
    <div className="header">
      <h2>Weather APP</h2>
      <div className="toggle-group">
        <div className="toggle" onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}>
          <div className="toggle-inner" />
        </div>
        <span className="label-description">dark mode</span>
      </div>
    </div>
  );
};

export default Header
