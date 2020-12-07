import PropTypes from "prop-types";
import React from "react";
import NavList from "./NavList";


function Navigation(props) {
  const { chooseContent, profileNav, activeBurger, openNavigation } = props;

  let iconClassName = activeBurger
    ? "nav__burger-icon burger-icon__toggle"
    : "nav__burger-icon";

    let navListClassName = activeBurger ? "profile__nav-list" : "profile__nav-list toggle-nav";

  return (
    <nav className="profile__nav">
      <button className="nav__burger toggle" onClick={openNavigation}>
        <svg
          className={iconClassName}
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 18 18"
        >
          <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2zM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2zm16-7H1v4h16V6z"></path>
        </svg>
      </button>
      <NavList navListClassName={navListClassName} profileNav={profileNav} chooseContent={chooseContent} />
    </nav>
  );
}

Navigation.propTypes = {
  profileNav: PropTypes.array,
  chooseContent: PropTypes.func,
  activeBurger: PropTypes.bool,
  openNavigation: PropTypes.func
};

export default Navigation;
