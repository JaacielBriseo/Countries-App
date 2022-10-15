export const ManyCountries = ({ filteredCountries, setInputValue }) => {
  return (
    <>
      {filteredCountries.map((el) => {
        const { name } = el;
        const { common } = name;
        return (
          <li key={common}>
            {common}
            <button
              onClick={() => {
                setInputValue(common);
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
