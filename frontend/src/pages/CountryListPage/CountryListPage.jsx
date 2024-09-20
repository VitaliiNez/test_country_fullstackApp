import React, { useEffect, useState } from "react";
import CountryList from "../../components/CountryList/CountryList";
import { Loader } from "../../components/Loader/Loader";

const CountryListPage = () => {
  const [countries, setCountries] = useState([]);
  const [done, setDone] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((data) => data.json())
      .then((dataFromServer) => {
        setCountries(dataFromServer);
      })
      .finally(() => {
        setDone(true);
      });
  }, []);

  if (!done) {
    return <Loader />;
  }

  return (
    <section>
      <div className="container">
        <h1>Country list</h1>
        {countries.length && <CountryList list={countries} />}
      </div>
    </section>
  );
};

export default CountryListPage;
