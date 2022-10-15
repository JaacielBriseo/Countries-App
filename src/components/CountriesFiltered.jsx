import { ManyCountries, SingleCountry } from './';

export const CountriesFiltered = ({ countries, inputValue, setInputValue }) => {
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      {filteredCountries.length > 10 && inputValue != 0 ? (<p>Too many matches...</p>)
      : filteredCountries.length === 1 ? (<SingleCountry filteredCountries={filteredCountries} />) 
      : (filteredCountries.length < 10 && filteredCountries.length > 1 
      && (<ManyCountries filteredCountries={filteredCountries} setInputValue={setInputValue} />))}
    </>
  );
};
