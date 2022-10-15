import axios from 'axios';
import { useEffect, useState } from 'react';

export const Weather = ({ common }) => {
  const [weatherWind, setWeatherWind] = useState('');
  const [weatherTemp, setWeatherTemp] = useState('');
  useEffect(() => {
    axios
      .get(
        ` https://api.openweathermap.org/data/2.5/weather?q=${common}&lang=es&units=metric&appid=ee322eedc415019029f1daab175edc7e`
      )
      .then((res) => {
        const { wind, main } = res.data;
        setWeatherTemp(main.temp);
        setWeatherWind(wind.speed);
      });
  }, []);
  return (
    <>
      <h4>Weather in {common}</h4>
      <h2>
        Temp : {weatherTemp} <small> °C </small>
      </h2>
      <h2>
        Wind speed: {weatherWind} <small> mph</small>
      </h2>
    </>
  );
}; 
