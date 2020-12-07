import PropTypes from "prop-types";
import React from "react";
import "./index.css";

function Search(props) {
  const { isHeader } = props;
  const searchClassName = isHeader ? "wrap__search w-35" : "wrap__search w-10";

  return (
    <div className={searchClassName}>
      <label className="search-label"></label>
      <input className="search" type="text" readOnly />
    </div>
  );
}

Search.propTypes = {
  isHeader: PropTypes.bool
};

export default Search;
