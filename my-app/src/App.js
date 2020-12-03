import React, { useState, useEffect } from "react";
import Header from "./Header";
import NavAside from "./NavAside";
import Questions from "./Questions";
import Users from "./Users";
import Tags from "./Tags";
import Profile from "./Profile";
import Post from "./Post";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useAxios from 'axios-hooks';

import "./reset.css";
import "./index.css";

function App() {
  let urlQuestions = `https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&filter=!LYA)NnjV0isg-d2(OzM7NX&key=9TT0ys3bQ*GHxowl*HitOg((`;


  
  const [activeBurger, setActiveBurger] = useState(false);
  const [choosenContent, setChoosenContent] = useState('main');
  // const [posts, setPosts] = useState([]);
  const [{ data, loading, error, response }, refetch] = useAxios(urlQuestions);
  console.log(data);
  console.log('loading', loading);
  console.log('error', error);
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
  if (loading) {
    return '';
  }
  // let urlQ = `https://api.stackexchange.com/docs/answers#order=desc&sort=activity&filter=default&site=stackoverflow`;
    
  
  // let getQuestions = async (url1) => {
  //         const apiUrl = await fetch(`${url1}`);
  //         const data = await apiUrl.json();
  //         console.log(data.items);
  //         setPosts(data.items);
  //     }
  //     useEffect(() => {
  //         getQuestions(urlQuestions);
  //     }, []);

  



  return (
    <>
    <button onClick={refetch}>refetch</button>
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
              <Post />
            </Route>
            <Route path="/">
              <Questions posts={posts} />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
