import PropTypes from "prop-types";
import React from "react";
import Item from "./Item.jsx";

function NavList(props) {
  let { navListClassName, switchContentBurger, navObj } = props;
  const navList = navObj.map((itemInfo) => (
    <Item
      itemInfo={itemInfo}
      switchContentBurger={switchContentBurger}
      key={itemInfo.key + Math.random()}
    />
  ));

  return <ul className={navListClassName}>{navList}</ul>;
}


NavList.propTypes = {
  switchContentBurger: PropTypes.func,
  navListClassName: PropTypes.string,
  navObj: PropTypes.array
};

export default NavList;
