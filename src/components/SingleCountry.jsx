import { Weather } from './Weather';

export const SingleCountry = ({ filteredCountries }) => {
  const selected = filteredCountries[0];
  const { languages, name, capital, population, flags } = selected;
  const { png } = flags;
  const { common } = name;
  const arrLanguages = Object.values(languages);
  const languagesList = arrLanguages.map((language) => (
    <li key={language}>{language}</li>
  ));
  return (
    <>
      <h2>Common Name : {common}</h2>
      <h3>Capital : {capital}</h3>
      <h3>Population: {population}</h3>
      <h4>Languages :{languagesList}</h4>
      <img src={png} alt="flag" />
      <Weather common={common} />
    </>
  );
};
