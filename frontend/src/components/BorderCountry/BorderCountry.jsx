import React from "react";
import { Link } from "react-router-dom";
import "./BorderCountry.scss";

const BorderCountry = ({ border }) => {
  return (
    <li className="border-country">
      <Link
        className="border-country__link"
        to={`/country-info/${border.countryCode}`}
      >
        {border.commonName}
      </Link>
    </li>
  );
};

export default BorderCountry;
