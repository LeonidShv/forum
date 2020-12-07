import React, { useState, useEffect } from "react";
import Filter from "../Filter";
import Tag from "./Tag";
import Search from "../Search";
import "./index.css";



function Tags() {
  const [posts, setPosts] = useState({
    posts: [],
    isLoading: false,
    error: null,
  });
  const [userLink, setUserLink] = useState(
    "https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&site=stackoverflow&key=9TT0ys3bQ*GHxowl*HitOg(("
  );
  const filterContent = [
    { btn: "Popular", key: "Activity_1", path: "popular", active: true },
    { btn: "Activity", key: "Votes_2", path: "activity", active: false },
    { btn: "Name", key: "Creation_3", path: "name", active: false },
  ];
  const [filterBtns, setFilterBtns] = useState(filterContent);

  function changeFilter(path = "popular") {
    setUserLink(
      `https://api.stackexchange.com/2.2/tags?order=desc&sort=${path}&site=stackoverflow&key=9TT0ys3bQ*GHxowl*HitOg((`
    );
    let choosenBtn = [true, false, false];

    switch (path) {
      case "popular":
        choosenBtn = [true, false, false];
        break;
      case "activity":
        choosenBtn = [false, true, false];
        break;
      case "name":
        choosenBtn = [false, false, true];
        break;
      default:
        console.log("error in questions, changeFilter function");
        break;
    }

    setFilterBtns([
      {
        btn: "Popular",
        key: "Activity_1",
        path: "popular",
        active: choosenBtn[0],
      },
      {
        btn: "Activity",
        key: "Votes_2",
        path: "activity",
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

  if (!posts.isLoading && posts.length) {
    return "load";
  }

  const listTags = posts.posts.map((post) => (
    <Tag tag={post} key={post.count + post.name} />
  ));

  return (
    <div className="tags__wrap content">
      <h2 className="title">Tags</h2>
      <div className="filter__block space-between">
        <Search />
        <Filter filterContent={filterBtns} method={changeFilter} />
      </div>

      <div className="tags__list">{listTags}</div>
    </div>
  );
}

export default Tags;
