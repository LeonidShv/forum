import { Link } from "react-router-dom";

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

export default Item;
