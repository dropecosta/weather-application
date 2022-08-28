import React, { useState, useContext } from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { AppContext } from '../../context/context';
import './CurrentWeather.scss';

  const CurrentWeather = ({ onChange }) => {
  const { currentCelciusWeather, currentFarenheithWeather } = useContext(AppContext);
  const [temp, setTemp] = useState(Math.round(currentCelciusWeather?.main.temp));
  const [feelsLike, setFeelsLike] = useState(Math.round(currentCelciusWeather?.main.feels_like));
  const [unit, setUnit] = useState("°C");
  const [toggled, setToggled] = useState(false);


  const convert = () => {
    if (toggled) {
      setUnit("°C");
      setTemp(Math.round(currentCelciusWeather?.main.temp));
      setFeelsLike(Math.round(currentCelciusWeather?.main.feels_like));
    } else {
      setUnit("°F");
      setTemp(Math.round(currentFarenheithWeather?.main.temp));
      setFeelsLike(Math.round(currentFarenheithWeather?.main.feels_like));
    }
  };

  const handleChange = (toggled) => {
    onChange(toggled);
}

  return (
    <div className="weather">
      <div className="toggle-container">
        <span className="on">°F</span>
        <ToggleSwitch
          isOn={toggled}
          onColor="#666"
          handleToggle={() => {
            setToggled(!toggled);
            convert();
            handleChange(!toggled)
          }}
        />
        <span className="off">°C</span>
      </div>
      <div className="top">
        <div>
          <p className="city">{currentCelciusWeather?.city}</p>
          <p className="weather-description">{currentCelciusWeather?.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${currentCelciusWeather?.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">
          {temp}
          {unit}
        </p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {feelsLike}
              {unit}
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{currentCelciusWeather?.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{currentCelciusWeather?.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{currentCelciusWeather?.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather
