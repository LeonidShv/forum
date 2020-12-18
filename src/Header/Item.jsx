import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

function Item(props) {
  const {
    itemInfo: { name, toPath, content },
    switchContentBurger,
  } = props;

  return (
    <li className="nav__item">
      <Link
        onClick={switchContentBurger}
        className="nav__btn"
        name={name}
        to={toPath}
      >
        {content}
      </Link>
    </li>
  );
}

Item.propTypes = {
  itemInfo: PropTypes.object,
  name: PropTypes.string,
  content: PropTypes.string,
  switchContentBurger: PropTypes.func,
};

export default Item;
