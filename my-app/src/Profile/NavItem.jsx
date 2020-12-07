import PropTypes from "prop-types";
import React from "react";

export default function NavItem(props) {
  const { profileNav: {title, active, id}, chooseContent } = props;
  const className = active
    ? "nav__link-profile nav__link-profile_active"
    : "nav__link-profile";

  return (
    <li className="nav__item-profile">
      <button onClick={chooseContent} data-id={id} className={className}>
        {title}
      </button>
    </li>
  );
}

NavItem.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
  id: PropTypes.string,
  profileNav: PropTypes.bool,
  chooseContent: PropTypes.func
};

