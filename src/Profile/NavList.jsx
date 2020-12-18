import PropTypes from "prop-types";
import React from "react";
import NavItem from "./NavItem";

function NavList(props) {
    const { chooseContent, profileNav, navListClassName } = props;

    const list = profileNav.map((item, i) => (
        <NavItem
          profileNav={profileNav[i]}
          chooseContent={chooseContent}
          key={item.id}
        />
      ));

      return (
          <ul className={navListClassName}>
              {list}
          </ul>
      );
}

NavList.propTypes = {
    profileNav: PropTypes.array,
    chooseContent: PropTypes.func,
    navListClassName: PropTypes.string,
  };

  export default NavList;