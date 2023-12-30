// src/App.jsx
import React from 'react';
import TemperatureConverter from './TemperatureConverter';


const App = () => {
  return (
    <div className="app">
      <h1>Derece Dönüştürücü</h1>
      <TemperatureConverter />
    </div>
  );
};

export default App;
