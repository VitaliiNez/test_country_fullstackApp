import React from "react";
import { Link } from "react-router-dom";
import "./CountryItem.scss";

// eslint-disable-next-line react/prop-types
const CountryItem = ({ country }) => {
  // eslint-disable-next-line react/prop-types
  const { name, countryCode } = country;
  return (
    <li className="country-item">
      <Link className="country-item__link" to={`/country-info/${countryCode}`}>
        {name}
      </Link>
    </li>
  );
};

export default CountryItem;
