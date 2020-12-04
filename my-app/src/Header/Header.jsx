import React from "react";
import Navigation from "./Navigation";
import Search from "../Search";
import SignIn from './SignIn';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./header.css";

function Header(props) {
  let { chooseContent, openNavigation, activeBurger, switchContent, switchContentBurger } = props;

  return (
    <header className="header">
      <button className="header__logo">
        <img
          src="img/favicon.svg"
          alt="stock questions"
          className="header__logo-icon"
        />
        <span className="header__logo-text">stock questions</span>
      </button>
      <Search isHeader />
      <SignIn />
      <Link to="/profile" name="profile" onClick={switchContent}>
        <div className="header__user">
          <img src="./img/ava.jpg" alt="user" className="header__photo" />
          <p className="header__login">Leo Smith</p>
        </div>
      </Link>

      <Navigation
        chooseContent={chooseContent}
        openNavigation={openNavigation}
        activeBurger={activeBurger}
        switchContentBurger={switchContentBurger}
      />
    </header>
  );
}

export default Header;
