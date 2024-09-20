import React from "react";
import CountryItem from "../CountryItem/CountryItem";
import "./CountryList.scss";
const CountryList = ({ list }) => {
  return (
    <ul className="countryList">
      {list.map((country) => (
        <CountryItem key={country.name} country={country} />
      ))}
    </ul>
  );
};

export default CountryList;
