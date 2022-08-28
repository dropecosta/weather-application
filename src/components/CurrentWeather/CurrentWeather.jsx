import React, { useState, useContext } from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { AppContext } from '../../context/context';
import './CurrentWeather.scss';

  const CurrentWeather = ({ data, onChange }) => {
  const [temp, setTemp] = useState(Math.round(data?.main.temp));
  const [feelsLike, setFeelsLike] = useState(Math.round(data?.main.feels_like));
  const [unit, setUnit] = useState("°C");
  const [toggled, setToggled] = useState(false);

  const { currentWeather, farenheithWeather } = useContext(AppContext);

  const convert = () => {
    if (toggled) {
      setUnit("°C");
      setTemp(Math.round(currentWeather?.main.temp));
      setFeelsLike(Math.round(currentWeather?.main.feels_like));
    } else {
      setUnit("°F");
      setTemp(Math.round(farenheithWeather?.main.temp));
      setFeelsLike(Math.round(farenheithWeather?.main.feels_like));
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
          <p className="city">{data?.city}</p>
          <p className="weather-description">{data?.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data?.weather[0].icon}.png`}
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
            <span className="parameter-value">{data?.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data?.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data?.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather
