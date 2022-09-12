import Country from "./Country";

const Countries = (props) => {
  const { visibleCountriesData, themeDetails } = props;
  return (
    <div className="countries">
      {visibleCountriesData.map((eachCountry, index) => {
        return (
          <Country
            eachCountryInfo={eachCountry}
            key={index}
            themeDetails={themeDetails}
          />
        );
      })}
    </div>
  );
};
export default Countries;
