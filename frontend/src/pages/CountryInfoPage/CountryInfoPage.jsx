import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./CountryInfo.scss";
import BorderCountries from "../../components/BorderCountries/BorderCountries";
import { Loader } from "../../components/Loader/Loader";
import Population from "../../components/Population/Population";

const CountryInfoPage = () => {
  const { countryID } = useParams();
  const [currentCountry, setCurrentCountry] = useState("");
  const [flagData, setFlagData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/countries/${countryID}`)
      .then((data) => data.json())
      .then((dataFromServer) => setCurrentCountry(dataFromServer));
    fetch("http://localhost:5000/flagImages")
      .then((data) => data.json())
      .then((flagUrl) => setFlagData(flagUrl));
  }, [countryID]);

  const { commonName, borders } = currentCountry;
  const currentFlag = flagData.find((el) => el.name === commonName)?.flag;
  return (
    <section className="countryInfo">
      {currentCountry ? (
        <div className="container">
          <div className="countryInfo__info">
            {currentFlag && (
              <div className="countryInfo__image">
                <img src={currentFlag} alt="Flag of country" />
              </div>
            )}
            <h3 className="countryInfo__heading">{commonName}</h3>
          </div>
          <div className="countryInfo__wrapper">
            {borders && (
              <BorderCountries borders={borders} commonName={commonName} />
            )}
            <Population commonName={commonName} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default CountryInfoPage;
