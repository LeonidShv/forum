import React from "react";
import { Link } from "react-router-dom";

function Question(props) {
  const { borderTop, titleNone } = props;
  const questionClassName = borderTop
    ? "list__question b-top"
    : "list__question";

    const titleClassName = titleNone ? 'question__title d-none' : 'question__title';

  return (
    
    <div className={questionClassName}>
      <div className="question__rating">
        <p className="rating__number">0</p>
        <p className="rating__text">votes</p>
        <p className="rating__number">0</p>
        <p className="rating__text">answers</p>

        <p className="rating__text">3 views</p>
      </div>
      <div className="question__describe">
      <Link className={titleClassName} name="post" to="/post">
            <h3 className={titleClassName}>how to build a tree in html?</h3>
    </Link>
        <p className="question__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellat,
          possimus, voluptatem harum ex maiores cupiditate vero repellendus nisi
          doloribus modi consequatur temporibus consectetur saepe. Velit
          recusandae saepe unde amet.
        </p>

        <div className="question__tags">
          <button className="question__tag">tml</button>
          <button className="question__tag">css</button>
          <button className="question__tag">js</button>
          <div className="question__infor">
            <p className="question__date">ascked 40 secs ago</p>
            <p className="question__author">Razan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
