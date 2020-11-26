import React from 'react';
import NavItem from './NavItem.jsx';

function Navigation(props) {
    const {
        chooseContent, 
        profileNav
    } = props;

    const list = profileNav.map((item, i) => <NavItem profileNav={profileNav[i]} chooseContent={chooseContent} />);

    return (
        <nav className="profile__nav">
            <ul className="nav__profile-list">
                {list}
            </ul>
        </nav>
    );
}

export default Navigation;

// function NavItem(props) {
//     const {title, active, id} = props.profileNav;
//     const className = active ? 'nav__link-profile nav__link-profile_active' : 'nav__link-profile';

//     return (
//         <li className="nav__item-profile">
//             <a onClick={props.chooseContent} data-id={id} href="#" className={className}>{title}</a>
//         </li>
//     )
// }