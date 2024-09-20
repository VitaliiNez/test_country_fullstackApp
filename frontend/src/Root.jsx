import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import CountryListPage from "./pages/CountryListPage/CountryListPage";
import CountryInfoPage from "./pages/CountryInfoPage/CountryInfoPage";

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomePage />}></Route>
          <Route path="country-list" element={<CountryListPage />} />
          <Route path="country-info/:countryID" element={<CountryInfoPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
