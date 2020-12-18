import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import TagsList from "./TagsList";

function Question(props) {
  const {
    borderTop,
    titleNone,
    choosePost,
    post,
    post: {
      answer_count: answerCount,
      score,
      view_count: viewCount,
      body,
      title,
      tags,
      owner,
    },
  } = props;
  const questionClassName = borderTop
    ? "list__question b-top"
    : "list__question";

  const titleClassName = titleNone
    ? "question__title d-none"
    : "question__title";
  const questionText = titleNone ? "question__text_full" : "question__text";

  return (
    <div className={questionClassName}>
      <div className="question__rating">
        <p className="rating__number">{score}</p>
        <p className="rating__text">votes</p>
        <p className="rating__number">{answerCount}</p>
        <p className="rating__text">answers</p>

        <p className="rating__text">{viewCount} views</p>
      </div>
      <div className="question__describe">
        <Link
          className={titleClassName}
          name="post"
          to="/post"
          onClick={() => choosePost(post)}
        >
          <h3 className={titleClassName}>{title}</h3>
        </Link>
        <div
          className={questionText}
          dangerouslySetInnerHTML={{ __html: body }}
        ></div>

        <div className="question__tags">
          <TagsList tags={tags} />
          <div className="question__infor">
            <p className="question__author">{owner.display_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Question.propTypes = {
  borderTop: PropTypes.bool,
  titleNone: PropTypes.bool,
  choosePost: PropTypes.func,
  post: PropTypes.object,
};

export default Question;
