import PropTypes from "prop-types";
import React from "react";

function User(props) {
  const {
    tag: { count, name },
  } = props;
  return (
    <div className="tag">
      <p className="tag__title">{name}</p>
      <p className="tag__describe">
        Users can find special information by {name} tag
      </p>
      <p className="tag__amount">{count} questions</p>
    </div>
  );
}

User.propTypes = {
  tag: PropTypes.object
};

export default User;
