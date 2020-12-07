import PropTypes from "prop-types";
import React from "react";

function Button(props) {
  const { text, isSignIn, method, isOut } = props;
  let className = isSignIn ? "btn__sign-in" : "btn__ask";
  className = isOut ? "btn__sign-out" : className;

  return (
    <button className={className} onClick={method}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  isSignIn: PropTypes.bool,
  isOut: PropTypes.bool,
  method: PropTypes.func
};

export default Button;
