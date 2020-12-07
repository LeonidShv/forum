import PropTypes from "prop-types";
import React from "react";
import { navObj } from "./navObj";
import Item from "./Item.jsx";
import "./index.css";

function NavAside(props) {
  const { switchContent, choosenContent } = props;
  const activeClassName = "main__nav-item main__nav-item_active";
  const defaultClassName = "main__nav-item";
  const navList = navObj.map((item) => {
    const itemClassName =
      item.name === choosenContent ? activeClassName : defaultClassName;
    return (
      <Item
        key={item.key}
        item={item}
        itemClassName={itemClassName}
        switchContent={switchContent}
      />
    );
  });

  return <ul className="main__nav">{navList}</ul>;
}

NavAside.propTypes = {
  choosenContent: PropTypes.string,
  switchContent: PropTypes.func,
};

export default NavAside;
