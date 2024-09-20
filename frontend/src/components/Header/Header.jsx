import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/" className="logo">
            Test task
          </Link>
          <Link className="header__button" to={"/country-list"}>
            Country list
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
