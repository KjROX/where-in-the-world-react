const CountryDetails = (props) => {
  const { countryInfo, backKeyClickHandler } = props;

  const capital = countryInfo?.capital ? countryInfo.capital[0] : "undefined";
  const ifCurrencyExists = countryInfo?.currencies
    ? Object.keys(countryInfo.currencies)
    : null;
  const specificCurrency = ifCurrencyExists
    ? countryInfo.currencies[ifCurrencyExists[0]].name
    : "undefined";
  const topLevelDomain = countryInfo?.tld ? countryInfo.tld[0] : "undefined";
  const nativeNameObjProperty = countryInfo?.name["nativeName"]
    ? Object.keys(countryInfo.name["nativeName"])
    : null;
  const commonName = countryInfo?.name["nativeName"][nativeNameObjProperty]
    ? countryInfo.name["nativeName"][nativeNameObjProperty].common
    : "undefined";
  const languages = countryInfo?.languages
    ? Object.values(countryInfo.languages).join(", ")
    : "undefined";
  return (
    <div className="modal-outer">
      <div className="escape-div">
        <button onClick={backKeyClickHandler} className="escape">
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
          <img src={countryInfo?.flags.svg} alt="" />
        </div>
        <div className="description">
          <h1>{countryInfo?.name.common}</h1>
          <div className="name-details-parent">
            <div className="name">
              <p>
                Native Name : <span>{commonName}</span>
              </p>
              <p>
                Population: <span>{countryInfo?.population}</span>
              </p>
              <p>
                Region : <span>{countryInfo?.region}</span>
              </p>
              <p>
                Sub Region : <span>{countryInfo?.subregion}</span>
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
export default CountryDetails;
