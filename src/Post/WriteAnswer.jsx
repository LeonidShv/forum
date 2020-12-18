import React from "react";
import Button from "../Button";

function WriteAnswer() {
  return (
    <>
      <p className="answers__title">Your Answer</p>
      <textarea
        className="answer__write"
        cols="30"
        rows="10"
        readOnly
      ></textarea>
      <Button text="Write Answer" />
    </>
  );
}

export default WriteAnswer;
