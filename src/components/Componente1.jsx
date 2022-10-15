export const Componente1 = ({ languagesList, name, capital, population,selected }) => {
  return (
    <>
      <div>
        <h2>Common Name:{name.common}</h2>
        <h3>Capital :{capital}</h3>
        <h3>Population:{population}</h3>
        <h3>Languages :{languagesList}</h3>
        <img src={selected.flags.png} alt="flag" />
      </div>
    </>
  );
};
