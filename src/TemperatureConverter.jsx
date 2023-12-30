import './TemperatureConverter.jsx'; 
import React, { useState } from 'react';
import './TemperatureConverter.css';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    convertTemperatures(value, 'C');
  };

  const convertTemperatures = (value, unit) => {
    const celsiusValue = parseFloat(value);

    if (!isNaN(celsiusValue)) {
      switch (unit) {
        case 'C':
          setFahrenheit((celsiusValue * 9 / 5 + 32).toFixed(2));
          setKelvin((celsiusValue + 273.15).toFixed(2));
          break;
        // Add other cases for Fahrenheit to Celsius and Kelvin conversions
        default:
          break;
      }
    }
  };

  return (
    <div className="temperature-converter">
      <label>Celsius:</label>
      <input type="text" value={celsius} onChange={handleCelsiusChange} />

      <label>Fahrenheit:</label>
      <input type="text" value={fahrenheit} readOnly />

      <label>Kelvin:</label>
      <input type="text" value={kelvin} readOnly />
    </div>
  );
};

export default TemperatureConverter;
