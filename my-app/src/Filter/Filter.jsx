import PropTypes from "prop-types";
import React from "react";
import "./index.css";

function Filter(props) {
  let { filterContent, method } = props;

  let buttons = filterContent.map((content) => {
    if (content.active) {
      return (
        <button
          key={content.key}
          className="filter__btn filter__btn-active"
          onClick={() => method(content.path)}
        >
          {content.btn}
        </button>
      );
    } else {
      return (
        <button
          key={content.key}
          className="filter__btn"
          onClick={() => method(content.path)}
        >
          {content.btn}
        </button>
      );
    }
  });

  return <div className="content__filter">{buttons}</div>;
}

Filter.propTypes = {
  filterContent: PropTypes.array,
  method: PropTypes.func
};

export default Filter;
