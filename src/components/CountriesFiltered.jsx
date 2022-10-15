import { Componente1 } from './Componente1';

export const CountriesFiltered = ({ countries, inputValue }) => {
  const filteredCountries = countries.filter((element) =>
    element.name.common.toLowerCase().includes(inputValue.toLowerCase())
  );

  if (filteredCountries.length === 1) {
    const selected = filteredCountries[0];
    const { languages, name, capital, population } = selected;
    const arrLanguages = Object.values(languages);
    const languagesList = arrLanguages.map((el) => {
      return <li key={el}>{el}</li>;
    });
    return (
      <>
        <Componente1
          name={name}
          capital={capital}
          population={population}
          languagesList={languagesList}
          selected={selected}
        />
      </>
    );
  } else if (filteredCountries.length > 10) {
    return <p>Too many matches</p>;
  } else if (filteredCountries.length < 10 && filteredCountries.length > 1) {
    return filteredCountries.map((el) => {
      return <li key={el.name.common}>{el.name.common}</li>;
    });
  }
};
