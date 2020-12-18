import PropTypes from "prop-types";
import React from "react";
import AnswerHeader from "../AnswerHeader";
import Question from "../Questions/Question";
import WriteAnswer from "./WriteAnswer";
import Answer from "./Answer";
import "./index.css";

function Post(props) {
  const {
    post,
    answer_count,
    post: { answers },
  } = props;
  let listAnswers;

  if (answers) {
    listAnswers = answers.map((answer) => (
      <Answer post={post} answer={answer} key={answer.answer_id} />
    ));
  }

  return (
    <div className="content">
      <AnswerHeader title={post.title} isAnswer />
      <Question post={post} borderTop titleNone />
      <p className="answers__amount">{answer_count} answers</p>
      {listAnswers}
      <WriteAnswer />
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object,
  answer_count: PropTypes.string,
};


export default Post;
