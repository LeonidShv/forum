export default function NavItem(props) {
    const {title, active, id} = props.profileNav;
    const className = active ? 'nav__link-profile nav__link-profile_active' : 'nav__link-profile';

    return (
        <li className="nav__item-profile">
            <a onClick={props.chooseContent} data-id={id} href="#" className={className}>{title}</a>
        </li>
    )
}