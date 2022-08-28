import { useState } from "react";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api/api";
import { AppContext } from "./context/context";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import "./App.scss";

const App = () => {
  const [currentCelciusWeather, setCurrentCelciusWeather] = useState(null);
  const [forecastCelciusWeather, setForecast] = useState(null);
  const [currentFarenheithWeather, setCurrentFarenheithWeather] = useState(null);
  const [forecastFarenheithWeather, setForecastFarenheithWeather] = useState(null);
  const [toggled, setToggled] = useState(false);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherCelsiusFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastCelciusFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const currentWeatherFarenheithFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`);
    const forecastFarenheithFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`);

    Promise.all([currentWeatherCelsiusFetch, forecastCelciusFetch, currentWeatherFarenheithFetch, forecastFarenheithFetch])
      .then(async (response) => {
        const weatherCelciusResponse = await response[0].json();
        const forcastCelciusResponse = await response[1].json();
        const weatherFarenheithResponse = await response[2].json();
        const forcastFarenheithResponse = await response[3].json();

        setCurrentCelciusWeather({ city: searchData.label, ...weatherCelciusResponse });
        setForecast({ city: searchData.label, ...forcastCelciusResponse });
        setCurrentFarenheithWeather({ city: searchData.label, ...weatherFarenheithResponse });
        setForecastFarenheithWeather({ city: searchData.label, ...forcastFarenheithResponse });
      })
      .catch(error => console.log(error));
  };

  function handleChange(toggled) {
    setToggled(toggled);
  }

  return (
    <AppContext.Provider value={{ currentCelciusWeather, forecastCelciusWeather, currentFarenheithWeather, forecastFarenheithWeather}}>
      <div className='app'>
        <div className="container">
          <Header />
          <Search onSearchChange={handleOnSearchChange} />
          {currentCelciusWeather && ( <CurrentWeather onChange={handleChange} />)}
          {forecastCelciusWeather && <Forecast onChange={toggled} />}
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
