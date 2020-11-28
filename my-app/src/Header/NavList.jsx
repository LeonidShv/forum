import Item from "./Item.jsx";

function NavList(props) {
    let { navListClassName, switchContentBurger, navObj } = props;

    const navList = navObj.map((itemInfo, index) => <Item itemInfo={itemInfo} switchContentBurger={switchContentBurger} key={itemInfo.key+Math.random()} />);

    return (
        <ul className={navListClassName}>{navList}</ul>
    )
}

export default NavList;