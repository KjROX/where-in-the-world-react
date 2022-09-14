import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Countries from "../components/Countries";

const CountriesPage = () => {
  let allCountriesData = useRef();
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [requiredCountriesDataToShow, setRequiredCountriesDataToShow] =
    useState([]);

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
    }
    fetchAllCountriesData().catch((error) => {
      console.log(error);
    });
  }, []);

  const themeChanger = () => {
    if (theme === "darkMode") {
      setTheme("lightMode");
      localStorage.setItem("theme", "lightMode");
    } else {
      setTheme("darkMode");
      localStorage.setItem("theme", "darkMode");
    }
  };

  const themeDetails = {
    theme,
    themeChanger,
  };
  return (
    <div className={`app ${theme === "darkMode" ? "dark-theme" : ""}`}>
      <Header webTheme={theme} changeTheme={themeChanger} />
      <main>
        <Search
          allCountriesDataInfo={allCountriesData.current}
          visibleCountriesDataShowingFunction={setRequiredCountriesDataToShow}
        />
        <Countries
          visibleCountriesData={requiredCountriesDataToShow}
          themeDetails={themeDetails}
        />
      </main>
    </div>
  );
};
export default CountriesPage;
