import Header from "./Header";
import NavAside from "./NavAside";
import Questions from "./Questions";
import Users from "./Users";
import Tags from "./Tags";
import Profile from "./Profile";
import Post from "./Post";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query';
import React, { useState, useEffect } from "react";

import "./reset.css";
import "./index.css";

function App() {
  const [activeBurger, setActiveBurger] = useState(false);
  const [choosenContent, setChoosenContent] = useState('main');
  const [choosenPost, setChoosenPost] = useState();

  function choosePost(post) {
    console.log(post);
    setChoosenPost(post);
  }
  

  function switchContent(e) {
    setChoosenContent(e.target.name);
  }

  function openNavigation(key) {
    setActiveBurger(!activeBurger);
  }

  function switchContentBurger(e) {
    openNavigation();
    setChoosenContent(e.target.name);
  }

  return (
    <>
      <Router>
        <Header switchContentBurger={switchContentBurger} openNavigation={openNavigation} switchContent={switchContent} activeBurger={activeBurger} />
        <main className="main">
          <NavAside switchContent={switchContent} choosenContent={choosenContent} />

          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/post">
              <Post post={choosenPost} />
            </Route>
            <Route path="/">
              <Questions choosePost={choosePost} />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
