import Header from "./Header";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const { eachCountryInfo, onBack, themeDetails } = props;
  const capital = eachCountryInfo.capital
    ? eachCountryInfo.capital[0]
    : "undefined";
  const ifCurrencyExists = eachCountryInfo.currencies
    ? Object.keys(eachCountryInfo.currencies)
    : null;
  const specificCurrency = ifCurrencyExists
    ? eachCountryInfo.currencies[ifCurrencyExists[0]].name
    : "undefined";
  const topLevelDomain = eachCountryInfo.tld
    ? eachCountryInfo.tld[0]
    : "undefined";
  const nativeNameObjProperty = eachCountryInfo.name["nativeName"]
    ? Object.keys(eachCountryInfo.name["nativeName"])
    : null;
  const commonName = eachCountryInfo.name["nativeName"][nativeNameObjProperty]
    ? eachCountryInfo.name["nativeName"][nativeNameObjProperty].common
    : "undefined";
  const languages = Object.values(eachCountryInfo.languages).join(", ");

  return (
    <div
      className={`modal-outer ${
        themeDetails.theme === "darkMode" ? "dark-theme" : ""
      }`}
    >
      <Header
        webTheme={themeDetails.theme}
        changeTheme={themeDetails.themeChanger}
      />
      <div className="escape-div">
        <button onClick={onBack} className="escape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--text-color)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <h3>Back</h3>
        </button>
      </div>
      <div className="modal-inner">
        <div className="image-div">
          <img src={eachCountryInfo.flags.svg} alt="" />
        </div>
        <div className="description">
          <h1>{eachCountryInfo.name.common}</h1>
          <div className="name-details-parent">
            <div className="name">
              <p>
                Native Name : <span>{commonName}</span>
              </p>
              <p>
                Population: <span>{eachCountryInfo.population}</span>
              </p>
              <p>
                Region : <span>{eachCountryInfo.region}</span>
              </p>
              <p>
                Sub Region : <span>{eachCountryInfo.subregion}</span>
              </p>
              <p>
                Capital : <span>{capital}</span>
              </p>
            </div>
            <div className="details">
              <p>
                Top Level Domain : <span>{topLevelDomain}</span>
              </p>
              <p>
                Currencies : <span>{specificCurrency}</span>
              </p>
              <p>
                Languages : <span>{languages}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CountryDetail = (props) => {
  const { eachCountryDetail, onBack, themeDetails } = props;

  return (
    <>
      {ReactDOM.createPortal(
        <Modal
          eachCountryInfo={eachCountryDetail}
          onBack={onBack}
          themeDetails={themeDetails}
        />,
        document.querySelector("#modal")
      )}
    </>
  );
};
export default CountryDetail;
