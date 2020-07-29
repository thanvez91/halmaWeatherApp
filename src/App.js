import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherTile from './WeatherScreen.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
   
        <h3>Halma Weather Report</h3>
        <WeatherTile/>
      
      </header>
    </div>
  );
}

export default App;
