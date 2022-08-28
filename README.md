<h1 align="center">🌤 Weather APP</a></h1>
Application to select cities and display temperature data for the current day and forecast for the week. 
<br /><br /> 

![application screen](https://raw.githubusercontent.com/dropecosta/weather-application/master/src/assets/screen.png)
<br /><br />
![application darkmode screen](https://raw.githubusercontent.com/dropecosta/weather-application/master/src/assets/screen2.png)

### Features

- [x] City search with autocomplete
- [x] Display of temperature data for the current day
- [x] Switch temperature conversion between Celsius and Fahrenheit for current day and forecast
- [x] Dark theme switcher
- [x] Temperature data forecast for the next 7 days

### Component  Diagram

![component diagram](https://raw.githubusercontent.com/dropecosta/weather-application/master/src/assets/diagram.png)

APP component:
- Application entrypoint;
- Get latitude and longitude from Search component;
- Get weather information from Openweather API;
- Get forecast information from Openweather API;
- Send data to child components;
- Show loading animation before information data is requested;

Header component:
- Set dark theme active/inactive;

Search component:
- Get latitude and longitude from GeoDB API;
- Create object to return coordinates;
- Send latitude, longitude and label to App component;
- Render Search component;
- Show autocomplete dropdown list with cities that mach with search term;

Current Weather Component:
- Receive weather information of chosen city in Celcius and Farenheith from App component;
- Convert values and units between Celcius and Farenheith;

Forecast component:
- Receive forecast data of chosen city to next seven days in Celcius and Farenheith from App component;
- Change values units when click on a ToggleSwitch component;

ToggleSwitch component:
- Switch position with state values;
- Dispatch action to component whei it changes;
- Render switch component;

Theme component:
- Switch position with state values;
- Change background switching normal/dark theme;
- Render switch component;

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the test watcher in an interactive mode:

### `npm test`

![unit tests](https://raw.githubusercontent.com/dropecosta/weather-application/master/src/assets/tests.png)

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
<br />

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

