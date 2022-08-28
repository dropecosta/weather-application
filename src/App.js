import { useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api/api";
import { AppContext } from "./context/context";
import "./App.scss";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [farenheithWeather, setFarenheithWeather] = useState(null);
  const [farenheithForecast, setFarenheithForecast] = useState(null);
  const [toggled, setToggled] = useState(false);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const currentWeatherFetchFarenheith = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );
    const forecastFetchFarenheith = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    Promise.all([currentWeatherFetch, forecastFetch, currentWeatherFetchFarenheith, forecastFetchFarenheith ])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        const weatherFarenheith = await response[2].json();
        const forcastFarenheith = await response[3].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse});
        setFarenheithWeather({ city: searchData.label, ...weatherFarenheith });
        setFarenheithForecast({ city: searchData.label, ...forcastFarenheith });
      })
      .catch(console.log);
  };

  function handleChange(toggled) {
    setToggled(toggled);
  }
 
  return (
    <AppContext.Provider value={{currentWeather, forecast, farenheithWeather, farenheithForecast}}>
      <div className="app">
        <div className="container">
          <Header />
          <Search onSearchChange={handleOnSearchChange} />
          {currentWeather && <CurrentWeather data={currentWeather} onChange={handleChange} />}
          {forecast && <Forecast data={forecast}  onChange={toggled} />}
        </div>
      </div>
      </AppContext.Provider>
  );
};

export default App;
