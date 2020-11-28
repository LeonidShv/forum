import { Link } from "react-router-dom";

function Item(props) {
  const {
    itemInfo: { name, toPath, content, key },
    switchContentBurger,
  } = props;

  return (
    <li className="nav__item" >
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

export default Item;