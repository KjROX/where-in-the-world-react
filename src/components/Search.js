const Search = (props) => {
  const { allCountriesDataInfo, visibleCountriesDataShowingFunction } = props;

  const inputChangeHandler = (event) => {
    let value = event.target.value;
    const filteredCountries = allCountriesDataInfo.filter((eachCountry) => {
      let name = eachCountry.name.common.toLowerCase().trim();
      let capital = eachCountry.capital
        ? eachCountry.capital[0].toLowerCase().trim()
        : null;
      value = value.toLowerCase().trim();
      if (capital && (capital === value || capital.includes(value))) {
        return true;
      } else if (name === value || name.includes(value)) {
        return true;
      } else {
        return false;
      }
    });
    visibleCountriesDataShowingFunction(filteredCountries);
  };

  const optionChangeHandler = (event) => {
    const value = event.target.value;
    const filteredCountries = allCountriesDataInfo.filter(
      (eachCountry) => eachCountry.region === value
    );
    visibleCountriesDataShowingFunction(filteredCountries);
  };

  return (
    <div className="search-options">
      <div className="search-input">
        <div className="search-input-image">
          <img src="./images/search-custom.svg" alt="" />
        </div>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={inputChangeHandler}
        />
      </div>
      <div className="select-options">
        <select defaultValue={"Default"} onChange={optionChangeHandler}>
          <option value="Default" disabled hidden>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};
export default Search;
