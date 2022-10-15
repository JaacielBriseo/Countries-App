export const ManyCountries = ({ filteredCountries, setInputValue }) => {
  return (
    <>
      {filteredCountries.map((el) => {
        return (
          <li key={el.name.common}>
            {el.name.common}
            <button
              onClick={() => {
                setInputValue(el.name.common);
              }}
            >
              Show
            </button>
          </li>
        );
      })}
    </>
  );
};
