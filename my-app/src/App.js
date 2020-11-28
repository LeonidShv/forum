import React, { useState, useEffect } from "react";
import Header from "./Header";
import NavAside from "./NavAside";
import Questions from "./Questions";
import Users from "./Users";
import Tags from "./Tags";
import Profile from "./Profile";
import Post from "./Post";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./reset.css";
import "./index.css";

function App() {
  const [activeBurger, setActiveBurger] = useState(false);
  const [choosenContent, setChoosenContent] = useState('main');

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
  // let urlQ = `https://api.stackexchange.com/docs/answers#order=desc&sort=activity&filter=default&site=stackoverflow`;
  //   let getQuestions = async () => {
  //         let url = `https://api.stackexchange.com/2.2/answers?order=desc&sort=activity&site=stackoverflow&key=9TT0ys3bQ*GHxowl*HitOg((`;
  //         const apiUrl = await fetch(`${url}`);
  //         const data = await apiUrl.json();
  //         console.log(data);
  //         // setQuestions(data.list);
  //     }
  //     useEffect(() => {
  //         getQuestions();
  //     }, []);

  // useEffect(() => {
  //   window.SE.init({
  //     clientId: 19014,
  //     key: '9TT0ys3bQ*GHxowl*HitOg((',
  //     // channelUrl: 'https://leonidshv.github.io/usof/',
  //     channelUrl: 'http://127.0.0.1:5500/index.html',
  //     // channelUrl: 'https://6259f7a95320.ngrok.io',
  //     complete: function(data) {
  //         console.log('Run Example With Version '+data.version);

  //     }
  //   })
  // });

  // const do_login = () => {
  //   window.SE.authenticate({
  //     success: function(data) {
  //       console.log(
  //           'User Authorized with account id = ' +
  //           data.networkUsers[0].account_id + ', got access token = ' +
  //           data.accessToken
  //       );
  //       // getQuestions();
  //   },
  //   error: function(data) {
  //     console.log('An error occurred:\n' + data.errorName + '\n' + data.errorMessage);
  // },
  // networkUsers: true,
  // scope: ['write_access', 'private_info']
  //   })
  // }

  // SE.init({
  //     clientId: 19014,
  //     key: '9TT0ys3bQ*GHxowl*HitOg((',
  //     // channelUrl: 'https://leonidshv.github.io/usof/',
  //     channelUrl: 'http://127.0.0.1:5500/index.html',
  //     complete: function(data) {
  //         console.log('Run Example With Version '+data.version);
  //     }
  // });

  // SE.authenticate({
  //         success: function(data) {
  //             console.log(
  //                 'User Authorized with account id = ' +
  //                 data.networkUsers[0].account_id + ', got access token = ' +
  //                 data.accessToken
  //             );
  //         },
  //         error: function(data) {
  //             console.log('An error occurred:\n' + data.errorName + '\n' + data.errorMessage);
  //         },
  //         networkUsers: true,
  //         scope: ['write_access', 'private_info']
  //     });

  /***************** */



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
              <Post />
            </Route>
            <Route path="/">
              <Questions />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
