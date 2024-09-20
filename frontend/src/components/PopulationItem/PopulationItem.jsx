import React from "react";
import "./PopulationItem.scss";

const PopulationItem = ({ populationCount }) => {
  const { year, value } = populationCount;
  return (
    <li className="population-item">
      <b>{year} - </b>
      <span>{value}</span>
    </li>
  );
};

export default PopulationItem;
