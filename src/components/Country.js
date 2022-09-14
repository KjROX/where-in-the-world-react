import { useNavigate } from "react-router-dom";
const Country = (props) => {
  const { eachCountryInfo } = props;
  const navigate = useNavigate();

  const clickHandlerForEachCountry = (event) => {
    const countryName =
      event.currentTarget.lastElementChild.firstElementChild.textContent;
    navigate(`/countries/${countryName}`);
  };

  return (
    <>
      <div onClick={clickHandlerForEachCountry} className="each-country">
        <div className="flag">
          <img src={eachCountryInfo?.flags?.svg} alt="" />
        </div>
        <div className="name-description">
          <h3 className="name">{eachCountryInfo?.name?.common}</h3>
          <div className="description">
            <p className="population">
              Population:<span>{eachCountryInfo?.population}</span>
            </p>
            <p className="region">
              Region:<span>{eachCountryInfo?.region}</span>
            </p>
            <p className="capital">
              Capital:
              <span>
                {eachCountryInfo?.capital
                  ? eachCountryInfo?.capital
                  : "undefined"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Country;
