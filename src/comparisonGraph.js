import React, { useEffect, useState, Fragment } from "react";
import { Bar } from "react-chartjs-2";
import "./App.css";

function WeatherCampareGraph() {
  const [allCityWeather, SetAllCityWeather] = useState([]);
  const [displayGraph, SetDisplayGraph] = useState(false);

  function allWeatherComparison() {
    fetch(
      "https://api.openweathermap.org/data/2.5/group?id=1273294,1277333,1264527,1275339,1275004&units=metric&APPID=924b8a07ae024139b21c61326ff28b13"
    )
      .then(res => res.json())
      .then(data => {
        let accumulator = [];
        data.list.map(city => {
          accumulator.push(city.main.temp);
        });
        SetAllCityWeather(accumulator);
      });
  }

  useEffect(() => {
    allWeatherComparison();
  }, []);
  const data = {
    labels: ["Delhi", "Bengaluru", "Chennai", "Mumbai", "Kolkata"],
    datasets: [
      {
        label: "Weather Comparison Between Cities in °C",
        data: allCityWeather
      }
    ]
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 50,
            stepSize: 1
          }
        }
      ]
    }
  };

  return (
    <Fragment>
      <button
        className="featureAll"
        onClick={event => {
          allWeatherComparison();
          SetDisplayGraph(true);
        }}
      >
        Compare Temparature Between Cities
      </button>
      {displayGraph ? <Bar data={data} options={options} /> : null}
    </Fragment>
  );
}

export default WeatherCampareGraph;
