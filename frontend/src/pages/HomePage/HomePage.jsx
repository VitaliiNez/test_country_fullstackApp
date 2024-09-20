import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <section>
      <div className="container">
        <h2 className="home-page__title">
          This is test task provides people to check information about
          countries, to view all countries, please{" "}
          <Link to="/country-list">click here.</Link>
        </h2>
      </div>
    </section>
  );
};

export default HomePage;
