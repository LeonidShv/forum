import React from "react";
import Navigation from "./Navigation";
import Search from "../Search";
import SignIn from './SignIn';

import LoginedUser from './LoginedUser';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./header.css";

function Header(props) {
  let { posts, chooseContent, openNavigation, activeBurger, switchContent, switchContentBurger, getCookie } = props;
  console.log(posts.posts.length);
  let choosenElement = !posts.posts.length ? <SignIn getCookie={getCookie} switchContent={switchContent} /> : <LoginedUser getCookie={getCookie} posts={posts.posts[0]} />

  if (!posts.posts) {

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

export default Header;
