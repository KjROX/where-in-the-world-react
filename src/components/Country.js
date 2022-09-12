import { useState } from "react";
import CountryDetail from "./CountryDetail";
const Country = (props) => {
  const { eachCountryInfo, themeDetails } = props;
  const [checkDetails, setCheckDetails] = useState(false);
  const clickHandlerForEachCountry = () => {
    setCheckDetails(true);
  };
  const onClickingBackHandler = () => {
    setCheckDetails(false);
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
      {checkDetails && (
        <CountryDetail
          eachCountryDetail={eachCountryInfo}
          onBack={onClickingBackHandler}
          themeDetails={themeDetails}
        />
      )}
    </>
  );
};
export default Country;
