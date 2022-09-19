import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import CountriesPage from "./pages/CountriesPage";
import Header from "./components/Header";
import CountryDetailPage from "./pages/EachCountryPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const themeChanger = () => {
    if (theme === "darkMode") {
      setTheme("lightMode");
      localStorage.setItem("theme", "lightMode");
    } else {
      setTheme("darkMode");
      localStorage.setItem("theme", "darkMode");
    }
  };
  return (
    <div className={`app ${theme === "darkMode" ? "dark-theme" : ""}`}>
      <Header webTheme={theme} changeTheme={themeChanger} />
      <Routes>
        <Route path="/" element={<Navigate replace to="/countries" />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/countries/:id" element={<CountryDetailPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
