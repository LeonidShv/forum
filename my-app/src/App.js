import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import NavAside from "./NavAside";
import Questions from "./Questions";
import Users from "./Users";
import Tags from "./Tags";
import Profile from "./Profile";
import Post from "./Post";

import "./reset.css";
import "./index.css";

function App() {
  const [activeBurger, setActiveBurger] = useState(false);
  const [choosenContent, setChoosenContent] = useState("main");
  const [choosenPost, setChoosenPost] = useState();
  const [posts, setPosts] = useState({
    posts: [],
    isLoading: false,
    error: null,
  });

  let cookieInfo = document.cookie
    .split(";")
    .find((saved) => saved.includes("userId"));

  if (cookieInfo) {
    cookieInfo = cookieInfo.split("=")[1];
  }

  const [userLink, setUserLink] = useState(
    `https://api.stackexchange.com/2.2/users/${cookieInfo}?order=desc&sort=reputation&site=stackoverflow&filter=!--1nZv)ddfPX&key=9TT0ys3bQ*GHxowl*HitOg((`,
  );

  function getCookie(id) {
    setUserLink(
      `https://api.stackexchange.com/2.2/users/${
        id || cookieInfo
      }?order=desc&sort=reputation&site=stackoverflow&filter=!--1nZv)ddfPX&key=9TT0ys3bQ*GHxowl*HitOg((`,
    );
  }

  useEffect(() => {
    fetch(userLink)
      .then((res) => res.json())
      .then(
        (result) => {
          setPosts({
            posts: result.items,
            isLoading: true,
            error: posts.error,
          });
        },
        (error) => {
          setPosts({ posts: posts.items, isLoading: true, error });
        }
      );
  }, [userLink]);

  if (!posts.isLoading && posts.length) {
    return "load";
  }

  function choosePost(post) {
    setChoosenPost(post);
  }

  function switchContent(e) {
    setChoosenContent(e.target.name);
  }

  function openNavigation() {
    setActiveBurger(!activeBurger);
  }

  function switchContentBurger(e) {
    openNavigation();
    setChoosenContent(e.target.name);
  }

  return (
    <>
      <Router>
        <Header
          posts={posts}
          switchContentBurger={switchContentBurger}
          openNavigation={openNavigation}
          switchContent={switchContent}
          activeBurger={activeBurger}
          getCookie={getCookie}
        />
        <main className="main">
          <NavAside
            switchContent={switchContent}
            choosenContent={choosenContent}
          />

          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/profile">
              <Profile posts={posts} />
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
