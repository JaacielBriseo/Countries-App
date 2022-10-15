import { ManyCountries } from './ManyCountries';
import { SingleCountry } from './SingleCountry';

export const CountriesFiltered = ({ countries, inputValue , setInputValue}) => {
  const filteredCountries = countries.filter((element) =>
    element.name.common.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      {filteredCountries.length === 1 && (
        <SingleCountry filteredCountries={filteredCountries} />
      )}
      {filteredCountries.length < 10 && filteredCountries.length > 1 && (
        <ManyCountries filteredCountries={filteredCountries} setInputValue={setInputValue}/>
      )}
    </>
  );
};
