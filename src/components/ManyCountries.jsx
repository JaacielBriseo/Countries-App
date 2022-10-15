export const ManyCountries = ({ filteredCountries, setInputValue }) => {
  return (
    <>
      {filteredCountries.map((country) => {
        const { name } = country;
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
