import { useState, useRef, useEffect } from "react";
import Search from "../components/Search";
import Countries from "../components/Countries";
import LoadingSpinner from "../components/LoadingSpinner";

const CountriesPage = () => {
  let allCountriesData = useRef();
  const [requiredCountriesDataToShow, setRequiredCountriesDataToShow] =
    useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    async function fetchAllCountriesData() {
      const url = "https://restcountries.com/v3.1/all";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      allCountriesData.current = data;
      setRequiredCountriesDataToShow(data);
      setDataFetched(true);
    }
    fetchAllCountriesData().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      {!dataFetched ? (
        <LoadingSpinner />
      ) : (
        <main>
          <Search
            allCountriesDataInfo={allCountriesData.current}
            visibleCountriesDataShowingFunction={setRequiredCountriesDataToShow}
          />
          <Countries visibleCountriesData={requiredCountriesDataToShow} />
        </main>
      )}
    </>
  );
};
export default CountriesPage;
