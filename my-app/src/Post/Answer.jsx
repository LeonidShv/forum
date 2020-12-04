import React, {useRef, useEffect} from "react";
import { Link } from "react-router-dom";

function Answer(props) {
  const { borderTop, titleNone, choosePost, post, answer: {
    body,
    owner,
    score    
  } } = props;
  const questionClassName = borderTop
    ? "list__question b-top"
    : "list__question";

    const titleClassName = titleNone ? 'question__title d-none' : 'question__title';
console.log(props);
  return (
    
    <div className={questionClassName}>
      <div className="question__rating">
        <p className="rating__number">{score}</p>
        <p className="rating__text">votes</p>
      </div>
      <div className="question__describe">
      {/* <Link className={titleClassName} name="post" to="/post" onClick={() => choosePost(post)}>
            <h3 className={titleClassName}>{title}</h3>
    </Link> */}
        <div className="question__text" dangerouslySetInnerHTML={{__html: body}} >
        </div>

        <div className="question__tags">
          <div className="question__infor">
            <p className="question__author">{owner.display_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer;
