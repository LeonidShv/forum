import React, { useState, useEffect } from "react";
import Filter from "../Filter";
import User from "./User";
import Search from "../Search";
import "./index.css";

function Users() {
  const [posts, setPosts] = useState({
    posts: [],
    isLoading: false,
    error: null,
  });
  const [userLink, setUserLink] = useState(
    "https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow&filter=!--C9*_b0TpxT&key=9TT0ys3bQ*GHxowl*HitOg(("
  );
  const filterContent = [
    { btn: "Reputation", key: "Activity_1", path: "reputation", active: true },
    { btn: "Creation", key: "Votes_2", path: "creation", active: false },
    { btn: "Name", key: "Creation_3", path: "name", active: false },
  ];
  const [filterBtns, setFilterBtns] = useState(filterContent);

  function changeFilter(path = "reputaion") {
    setUserLink(
      `https://api.stackexchange.com/2.2/users?order=desc&sort=${path}&site=stackoverflow&filter=!--C9*_b0TpxT&key=9TT0ys3bQ*GHxowl*HitOg((`
    );

    let choosenBtn = [true, false, false];

    switch (path) {
      case "reputaion":
        choosenBtn = [true, false, false, false];
        break;
      case "creation":
        choosenBtn = [false, true, false, false];
        break;
      case "name":
        choosenBtn = [false, false, true, false];
        break;
      default:
        console.log("error in questions, changeFilter function");
        break;
    }

    setFilterBtns([
      {
        btn: "Reputation",
        key: "Activity_1",
        path: "reputation",
        active: choosenBtn[0],
      },
      {
        btn: "Creation",
        key: "Votes_2",
        path: "creation",
        active: choosenBtn[1],
      },
      { btn: "Name", key: "Creation_3", path: "name", active: choosenBtn[2] },
    ]);
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
          setPosts({ posts: posts.items, isLoading: true, error: error });
        }
      );
  }, [userLink]);

  let listTags = "";

  if (!posts.isLoading || !posts.posts) {
    console.log("Not info");
  } else {
    listTags = posts.posts.map((post) => (
      <User user={post} key={post.account_id} />
    ));
  }

  return (
    <div className="users__wrap content">
      <h2 className="title">Users</h2>
      <div className="filter__block space-between">
        <Search />
        <Filter filterContent={filterBtns} method={changeFilter} />
      </div>

      <div className="users__list">{listTags}</div>
    </div>
  );
}

export default Users;
