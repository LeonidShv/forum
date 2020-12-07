import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

function Item(props) {
  const {
    item: { name, toPath, content },
    itemClassName,
    switchContent,
  } = props;

  return (
    <li className={itemClassName}>
      <Link
        onClick={switchContent}
        className="main__nav-link"
        name={name}
        to={toPath}
      >
        {content}
      </Link>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.object,
  itemClassName: PropTypes.string,
  switchContent: PropTypes.func,
};

export default Item;
