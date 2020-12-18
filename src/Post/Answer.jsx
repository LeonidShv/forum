import PropTypes from "prop-types";
import React from "react";

function Answer(props) {
  const {
    borderTop,
    answer: { body, owner, score },
  } = props;
  const questionClassName = borderTop
    ? "list__question b-top"
    : "list__question";

  return (
    <div className={questionClassName}>
      <div className="question__rating">
        <p className="rating__number">{score}</p>
        <p className="rating__text">votes</p>
      </div>
      <div className="question__describe">
        <div
          className="question__text"
          dangerouslySetInnerHTML={{ __html: body }}
        ></div>

        <div className="question__tags">
          <div className="question__infor">
            <p className="question__author">{owner.display_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Answer.propTypes = {
  answer: PropTypes.object,
  borderTop: PropTypes.bool,
};

export default Answer;
