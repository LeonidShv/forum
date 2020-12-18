import PropTypes from "prop-types";
import React from "react";
import "./index.css";

function Search(props) {
  const { isHeader } = props;
  const searchWrapClassName = isHeader ? "wrap__search w-35" : "wrap__search w-10";
  const searchClassName = isHeader ? "search" : "content__search";
  const iconClassName = isHeader ? "search-label" : "content__search-label";

  return (
    <div className={searchWrapClassName}>
      <label className={iconClassName}></label>
      <input className={searchClassName} type="text" readOnly />
    </div>
  );
}

Search.propTypes = {
  isHeader: PropTypes.bool
};

export default Search;
