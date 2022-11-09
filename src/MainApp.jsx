import { useEffect, useState } from 'react';
import { CountriesFiltered } from './components';
import { countriesApi } from './components/apis/countriesApi';


export const MainApp = () => {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    countriesApi.get('/all').then((res) => {
      setCountries(res.data);
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
