import React from 'react';
import sun from '../../assets/icons/sun.svg';
import moon from '../../assets/icons/moon.svg';
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
      <img src={moon} className='darkmode-icon-moon' alt="moon"/>
        <div className="toggle" onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}>
          <div className="toggle-inner" />
        </div>
        
        <img src={sun} className='darkmode-icon-sun' alt="sun"/>
      </div>
    </div>
  );
};

export default Header
