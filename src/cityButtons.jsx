import React from "react";
import "./App.css";

let city = ["bengaluru", "chennai", "kolkata", "delhi", "mumbai"];

const Citybutton = props => {
  return (
    <ul>
      {city.map(city => {
        return (
          <li>
            <button
              className={props.City === city ? "cityActive" : "cityInactive"}
              value={city}
              onClick={event => props.setterForCity(event.target.value)}
            >
              {city}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Citybutton;
