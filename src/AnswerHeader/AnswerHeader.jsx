import PropTypes from "prop-types";
import React from "react";
import Button from "../Button";

function AnswerHeader(props) {
  const { title, isAnswer } = props;
  const button = isAnswer ? "" : <Button text="Ask Question" />;

  return (
    <div className="content__header">
      <h2 className="title">{title}</h2>
      {button}
    </div>
  );
}

AnswerHeader.propTypes = {
  title: PropTypes.string,
  isAnswer: PropTypes.bool
};

export default AnswerHeader;
