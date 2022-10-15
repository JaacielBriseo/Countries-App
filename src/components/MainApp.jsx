import axios from 'axios';
import { useEffect, useState } from 'react';
import { CountriesFiltered } from './CountriesFiltered';

export const MainApp = () => {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      setCountries(res.data);
      console.log('useeffect called');
    });
  }, []);

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  return (
    <>
      <div>
        <h1>Find countries</h1>
        <input value={inputValue} onChange={handleChange} />
        <hr />
        <CountriesFiltered
          countries={countries}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
    </>
  );
};
