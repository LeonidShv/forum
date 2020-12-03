import React, {useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import TagsList from './TagsList';

function Question(props) {
  const { borderTop, titleNone, post: {
    answer_count: answerCount,
    score,
    view_count: viewCount,
    body,
    title,
    tags,
    owner,
    creation_date: creationDate
  } } = props;
  const questionClassName = borderTop
    ? "list__question b-top"
    : "list__question";

    const titleClassName = titleNone ? 'question__title d-none' : 'question__title';
    
  return (
    
    <div className={questionClassName}>
      <div className="question__rating">
        <p className="rating__number">{answerCount}</p>
        <p className="rating__text">votes</p>
        <p className="rating__number">{score}</p>
        <p className="rating__text">answers</p>

        <p className="rating__text">{viewCount} views</p>
      </div>
      <div className="question__describe">
      <Link className={titleClassName} name="post" to="/post">
            <h3 className={titleClassName}>{title}</h3>
    </Link>
        <div className="question__text" dangerouslySetInnerHTML={{__html: body}} >
        </div>

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

export default Question;
