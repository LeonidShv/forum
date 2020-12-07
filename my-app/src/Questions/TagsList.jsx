import PropTypes from "prop-types";
import React from "react";

function TagsList(props) {
  const { tags } = props;
  const tagsList = tags.map((tag) => (
    <button key={tag} className="question__tag">
      {tag}
    </button>
  ));

  return <div>{tagsList}</div>;
}

TagsList.propTypes = {
  tags: PropTypes.array
};

export default TagsList;
