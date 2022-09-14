import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CountriesPage from "./pages/CountriesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/countries" />} />
      <Route path="/countries" element={<CountriesPage />} />
    </Routes>
  );
}

export default App;
