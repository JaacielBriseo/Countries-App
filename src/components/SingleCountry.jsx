export const SingleCountry = ({ languagesList, name, capital, population,selected }) => {
  return (
    <>
      <div>
        <h2>Common Name : {name.common}</h2>
        <h3>Capital : {capital}</h3>
        <h3>Population: {population}</h3>
        <h4>Languages :{languagesList}</h4>
        <img src={selected.flags.png} alt="flag" />
      </div>
    </>
  );
};
