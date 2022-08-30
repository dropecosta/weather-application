import React, { useState, useEffect } from 'react';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import sun from '../../assets/icons/sun.svg';
import moon from '../../assets/icons/moon.svg';
import { ThemeContext, themes } from '../../context/ThemeContext';
import './Header.scss';

const Header = () => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkmode')));
  const [checked, setChecked] = useState(JSON.parse(localStorage.getItem('isChecked')));

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-content');
    } else {
      body.classList.remove('dark-content');
    }
    localStorage.setItem('darkmode', JSON.stringify(darkMode));
    localStorage.setItem('isChecked', JSON.stringify(checked));
  }, [darkMode, checked]);

  return (
    <div className="header">
      <h2>Weather APP</h2>

      <div className="toggle-container">
      <img src={moon} className='darkmode-icon-moon' alt="moon"/>
      <ThemeContext.Consumer>
      {({ changeTheme }) => ( 
        <ThemeSwitch
          isCheck={checked}
          onColor="#666"
          handleDarkMode={() => {
            setChecked(!checked);
            setDarkMode(!darkMode);
            changeTheme(darkMode ? themes.dark : themes.light); 
          }}
        />
      )}
      </ThemeContext.Consumer>
        <img src={sun} className='darkmode-icon-sun' alt="sun"/>
      </div>
    </div>
  );
};

export default Header
