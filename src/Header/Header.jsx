import PropTypes from "prop-types";
import React from "react";
import Navigation from "./Navigation";
import Search from "../Search";
import SignIn from "./SignIn";
import LoginedUser from "./LoginedUser";
import "./header.css";

function Header(props) {
  let {
    posts,
    chooseContent,
    openNavigation,
    activeBurger,
    switchContent,
    switchContentBurger,
    getCookie,
  } = props;
  let choosenElement;

  if (posts.posts === undefined || !posts.posts.length) {
    choosenElement = (
      <SignIn getCookie={getCookie} switchContent={switchContent} />
    );
  } else {
    choosenElement = (
      <LoginedUser getCookie={getCookie} posts={posts.posts[0]} />
    );
  }

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
      {choosenElement}
      <Navigation
        chooseContent={chooseContent}
        openNavigation={openNavigation}
        activeBurger={activeBurger}
        switchContentBurger={switchContentBurger}
      />
    </header>
  );
}

Header.propTypes = {
  posts: PropTypes.object,
  chooseContent: PropTypes.func,
  openNavigation: PropTypes.func,
  activeBurger: PropTypes.bool,
  switchContent: PropTypes.func,
  switchContentBurger: PropTypes.func,
  getCookie: PropTypes.func,
};

export default Header;
