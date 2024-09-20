import React, { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import PopulationItem from "../PopulationItem/PopulationItem";
import "./Population.scss";

const Population = ({ commonName }) => {
  const [populationData, setPopulationData] = useState([]);
  const [done, setDone] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/population")
      .then((data) => data.json())
      .then((populationFromServer) => {
        setPopulationData(populationFromServer);
      })
      .finally(() => setDone(true));
  }, []);
  const populationCounts = populationData.find(
    (population) => population.country === commonName
  )?.populationCounts;

  if (!done) {
    return <Loader />;
  }

  if (!populationCounts) {
    return <h2>No information about population at the moment</h2>;
  }

  return (
    <div>
      <h3 className="population__heading">Population</h3>
      <ul className="population__list">
        {populationCounts &&
          populationCounts.map((populationCount) => (
            <PopulationItem
              key={populationCount.year}
              populationCount={populationCount}
            />
          ))}
      </ul>
    </div>
  );
};

export default Population;
