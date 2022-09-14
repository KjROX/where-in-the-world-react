import Country from "./Country";

const Countries = (props) => {
  const { visibleCountriesData } = props;
  return (
    <div className="countries">
      {visibleCountriesData.map((eachCountry, index) => {
        return <Country eachCountryInfo={eachCountry} key={index} />;
      })}
    </div>
  );
};
export default Countries;
