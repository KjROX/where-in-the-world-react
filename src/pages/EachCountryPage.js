import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CountryDetails from "../components/CountryDetails";
import PageNotFound from "./PageNotFound";
import LoadingSpinner from "../components/LoadingSpinner";

const CountryDetailPage = () => {
  const countryName = useParams().id;
  const [countryInfo, setCountryInfo] = useState();
  const [dataFetched, setDataFetched] = useState(false);
  const [validURL, setValidURL] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCountryByName(name) {
      const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setDataFetched(true);
      if (data.message) {
        setValidURL(false);
      } else {
        setCountryInfo(data[0]);
      }
    }
    fetchCountryByName(countryName).catch((error) => {
      console.log(error);
    });
  }, [countryName]);

  const clickHandler = () => {
    navigate(-1);
  };

  return (
    <>
      {!dataFetched ? (
        <LoadingSpinner />
      ) : (
        <>
          {validURL ? (
            <CountryDetails
              countryInfo={countryInfo}
              backKeyClickHandler={clickHandler}
            />
          ) : (
            <PageNotFound />
          )}
        </>
      )}
    </>
  );
};
export default CountryDetailPage;
