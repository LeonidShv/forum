import Question from "./Question";
import Filter from "../Filter/Filter";
import AnswerHeader from "../AnswerHeader";
import "./index.css";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";



function Questions(props) {
  const { choosePost } = props;
  const [posts, setPosts] = useState({
    posts: [],
    isLoading: false,
    error: null,
  });
  const [userLink, setUserLink] = useState(
    "https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&filter=!LYA)NnjV0isg-d2(OzM7NX&key=9TT0ys3bQ*GHxowl*HitOg(("
  );
  const filterContent = [
    { btn: "Activity", key: "Activity_1", path: "activity", active: true },
    { btn: "Votes", key: "Votes_2", path: "votes", active: false },
    { btn: "Creation", key: "Creation_3", path: "creation", active: false },
  ];
  const [filterBtns, setFilterBtns] = useState(filterContent);

  function changeFilter(path = "activity") {
    setUserLink(
      `https://api.stackexchange.com/2.2/questions?order=desc&sort=${path}&site=stackoverflow&filter=!LYA)NnjV0isg-d2(OzM7NX&key=9TT0ys3bQ*GHxowl*HitOg((`
    );
    let choosenBtn = [true, false, false];

    switch (path) {
      case "activity":
        choosenBtn = [true, false, false];
        break;
      case "votes":
        choosenBtn = [false, true, false];
        break;
      case "creation":
        choosenBtn = [false, false, true];
        break;
      default:
        console.log("error in questions, changeFilter function");
        break;
    }

    setFilterBtns([
      {
        btn: "Activity",
        key: "Activity_1",
        path: "activity",
        active: choosenBtn[0],
      },
      { btn: "Votes", key: "Votes_2", path: "votes", active: choosenBtn[1] },
      {
        btn: "Creation",
        key: "Creation_3",
        path: "creation",
        active: choosenBtn[2],
      },
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

  const listQuestions = posts.posts.map((post) => (
    <Question post={post} key={post.question_id} choosePost={choosePost} />
  ));

  return (
    <div className="content">
      <AnswerHeader title="All Questions" />
      <div className="filter__block flex-end">
        <Filter filterContent={filterBtns} method={changeFilter} />
      </div>

      <div className="content__list">{listQuestions}</div>
    </div>
  );
}

Questions.propTypes = {
  choosePost: PropTypes.func,
};

export default Questions;
