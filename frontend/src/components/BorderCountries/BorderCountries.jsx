import React from "react";
import BorderCountry from "../BorderCountry/BorderCountry";
import "./BorderCountries.scss";

const BorderCountries = ({ borders }) => {
  if (!borders.length) {
    return <h2>No borders country at the moment</h2>;
  }
  return (
    <div className="border-country">
      <>
        <h2 className="border-country__heading">Border country</h2>
        <ul className="border-countries">
          {borders.map((border) => (
            <BorderCountry key={border.countryCode} border={border} />
          ))}
        </ul>
      </>
    </div>
  );
};

export default BorderCountries;
