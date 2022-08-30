import React, { useState, useEffect, useContext } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { AppContext } from "../../context/context";
import './Forecast.scss';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ onChange }) => {
  const [resultForecastCelciusWithSplice, setResultForecastCelciusWithSplice] = useState(null);
  const [resultForecastFarenheithWithSplice, setResultForecastFarenheithWithSplice] = useState(null);
  const [finalResult, setFinalResult] = useState(resultForecastCelciusWithSplice);
  const { forecastCelciusWeather, forecastFarenheithWeather } = useContext(AppContext);
  //const [loading, setLoading] = useState(false);

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

   /* useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
 */
  
  useEffect(() => {
    //setLoading(true);
    setResultForecastCelciusWithSplice(forecastCelciusWeather?.list?.splice(0, 7));
    setResultForecastFarenheithWithSplice(forecastFarenheithWeather?.list?.splice(0, 7));
    //setLoading(false);
  }, [forecastCelciusWeather, forecastFarenheithWeather])

  useEffect(() => {
    const result = (onChange === true) ? resultForecastCelciusWithSplice : resultForecastFarenheithWithSplice;
    setFinalResult(result);
  }, [onChange, resultForecastCelciusWithSplice, resultForecastFarenheithWithSplice])

  return (
    <div className="forecast-container">
      {/* {loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : */}

        {!onChange ? (
          <>
          <div className="title-container">
            <label className="title">Daily forecast</label>
          </div>
            <Accordion allowZeroExpanded>
              {resultForecastCelciusWithSplice?.map((item, idx) => ( 
                <AccordionItem key={idx}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="daily-item">
                        <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                        <label className="day">{forecastDays[idx]}</label>
                        <label className="description">{item.weather[0].description}</label>
                        <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="daily-details-grid">
                      <div className="daily-details-grid-item">
                        <label>Pressure:</label>
                        <label>{item.main.pressure}</label>
                      </div>
                      <div className="daily-details-grid-item">
                        <label>Humidity:</label>
                        <label>{item.main.humidity}</label>
                      </div>
                      <div className="daily-details-grid-item">
                        <label>Clouds:</label>
                        <label>{item.clouds.all}%</label>
                      </div>
                      <div className="daily-details-grid-item">
                        <label>Wind speed:</label>
                        <label>{item.wind.speed} m/s</label>
                      </div>
                      <div className="daily-details-grid-item">
                        <label>Sea level:</label>
                        <label>{item.main.sea_level}m</label>
                      </div>
                      <div className="daily-details-grid-item">
                        <label>Feels like:</label>
                        <label>{item.main.feels_like}°C</label>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </>
        ) :
        (
          <>
          <div className="title-container">
            <label className="title">Daily forecast</label>
          </div>
            <Accordion allowZeroExpanded>
              {resultForecastFarenheithWithSplice?.map((item, idx) => ( 
                <AccordionItem key={idx}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="daily-item">
                        <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                        <label className="day">{forecastDays[idx]}</label>
                        <label className="description">{item.weather[0].description}</label>
                        <label className="min-max">{Math.round(item.main.temp_max)}°F /{Math.round(item.main.temp_min)}°F</label>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="daily-details-grid">
                      <div className="daily-details-grid-item">
                        <label>Pressure:</label>
                        <label>{item.main.pressure}</label>
                      </div>
                      <div className="daily-details-grid-item">
                        <label>Humidity:</label>
                        <label>{item.main.humidity}</label>
                      </div>
                      <div className="daily-details-grid-item">
                        <label>Clouds:</label>
                        <label>{item.clouds.all}%</label>
                      </div>
                      <div className="daily-details-grid-item">
                        <label>Wind speed:</label>
                        <label>{item.wind.speed} mp/h</label>
                      </div>
                      <div className="daily-details-grid-item">
                        <label>Sea level:</label>
                        <label>{item.main.sea_level}m</label>
                      </div>
                      <div className="daily-details-grid-item">
                        <label>Feels like:</label>
                        <label>{item.main.feels_like}°F</label>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </>
        )
      }
    </div>
  )
  
  
  
  /* loading ? (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
    ) : !onChange ? (
    <>
    <div className="title-container">
      <label className="title">Daily forecast</label>
    </div>
      <Accordion allowZeroExpanded>
        {resultForecastCelciusWithSplice?.map((item, idx) => ( 
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">{item.weather[0].description}</label>
                  <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  ) :
  (
    <>
    <div className="title-container">
      <label className="title">Daily forecast</label>
    </div>
      <Accordion allowZeroExpanded>
        {resultForecastFarenheithWithSplice?.map((item, idx) => ( 
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">{item.weather[0].description}</label>
                  <label className="min-max">{Math.round(item.main.temp_max)}°F /{Math.round(item.main.temp_min)}°F</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} mp/h</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°F</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  ) */
};

export default Forecast
