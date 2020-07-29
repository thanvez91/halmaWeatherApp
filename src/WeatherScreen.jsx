import React, { useEffect, useState, Fragment } from "react";
import CityButtons from "./cityButtons.jsx";
import Test from "./comparisonGraph.js";

const WeatherTile = () => {
  let tempValues = {
    curTemp: "",
    highTemp: "",
    lowTemp: "",
    img: "",
    location: "",
    loading: false
  };
  const [City, setCity] = useState("bengaluru");
  const [initialWeather, SelectWeather] = useState(tempValues);

  const ajxCallForWeather = City => {
    SelectWeather({ ...initialWeather, loading: true });
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=479ea0ad8b854b51ab575333202807&q=${City}&days=1`
    )
      .then(res => res.json())
      .then(data => {
        SelectWeather({
          curTemp: data.current.temp_c,
          highTemp: data.forecast.forecastday[0].day.maxtemp_c,
          lowTemp: data.forecast.forecastday[0].day.mintemp_c,
          img: data.current.condition.icon,
          location: data.location.name,
          loading: false
        });
      });
  };
  useEffect(() => {
    const initialCity = "bengaluru";
    ajxCallForWeather(initialCity);
  }, []);

  const setterForCity = input => {
    setCity(input);
    ajxCallForWeather(input);
  };

  const tempCirle = <span>°C</span>;
  return (
    <div className="temp-wrapper">
      <CityButtons setterForCity={setterForCity} City={City}></CityButtons>
      {initialWeather.loading ? (
        <div>Weather Report Loading...</div>
      ) : (
        <Fragment>
          <div className="curTemp-wrapper">
            <div>
              {initialWeather.curTemp}
              {tempCirle}
            </div>

            <div>
              <img alt="" src={initialWeather.img}></img>
            </div>
          </div>
          <div className="min-max-Wrapper">
            <span>Max Temp</span> <span>{initialWeather.highTemp}</span>
            {tempCirle}
          </div>
          <div className="min-max-Wrapper">
            <span>Min Temp</span>
            {initialWeather.lowTemp}
            {tempCirle}
          </div>
        </Fragment>
      )}
      <Test />
    </div>
  );
};

export default WeatherTile;
