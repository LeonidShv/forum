import React from 'react';
import NavItem from './NavItem';

function Navigation(props) {
    const {
        chooseContent, 
        profileNav
    } = props;

    const list = profileNav.map((item, i) => <NavItem profileNav={profileNav[i]} chooseContent={chooseContent} key={item.id} />);

    return (
        <nav className="profile__nav">
            <ul className="nav__profile-list">
                {list}
            </ul>
        </nav>
    );
}

export default Navigation;
