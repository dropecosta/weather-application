import { useState } from 'react';
import ToggleSwitch from '../ToogleSwitch/ToogleSwitch';
import './CurrentWeather.css';

const CurrentWeather = ({ data }) => {
  const [temp, setTemp] = useState(Math.round(data.main.temp));
  const [feelsLike, setFeelsLike] = useState(Math.round(data.main.feels_like));
  const [unit, setUnit] = useState("°C");

  const oppositeUnit = unit === "°C" ? "°F" : "°C";

  const convert = () => {
    if (unit === "°C") {
      const newT = temp * 1.8 + 32;
      setTemp(Math.round(newT));
      setFeelsLike(Math.round(newT));
      setUnit(oppositeUnit);
    }

    if (unit === "°F") {
      const newT = ((temp - 32) * 5) / 9;
      setTemp(Math.round(newT));
      setFeelsLike(Math.round(newT));
      setUnit(oppositeUnit);
    }    
  };

  return (
    <div className="weather">
      <div className='toggle-container'>
        <ToggleSwitch onClick={() => convert()} />
      </div>
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{temp}{unit}</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {feelsLike}{unit}
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;