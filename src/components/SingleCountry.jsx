export const SingleCountry = ({ filteredCountries }) => {
  const selected = filteredCountries[0];
  const { languages, name, capital, population } = selected;
  const arrLanguages = Object.values(languages);
  const languagesList = arrLanguages.map((el) => <li key={el}>{el}</li>);
  return (
    <>
      <h2>Common Name : {name.common}</h2>
      <h3>Capital : {capital}</h3>
      <h3>Population: {population}</h3>
      <h4>Languages :{languagesList}</h4>
      <img src={selected.flags.png} alt="flag" />
    </>
  );
};