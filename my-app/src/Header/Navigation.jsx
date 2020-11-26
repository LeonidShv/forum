import React from 'react';

function Navigation(props) {
    let {chooseContent, openNavigation, activeBurger} = props;
    let iconClassName = activeBurger ? 'nav__burger-icon burger-icon__toggle' : 'nav__burger-icon';
    let navListClassName = activeBurger ? 'nav__list' : 'nav__list toggle-d';

    return (
        <nav className="header__nav">
            <button className="nav__burger" onClick={openNavigation}>
                <svg className={iconClassName} aria-hidden="true" width="20" height="20" viewBox="0 0 18 18"><path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2zM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2zm16-7H1v4h16V6z"></path></svg>
            </button>
            <ul className={navListClassName}>
                <li className="nav__item">
                    <button onClick={chooseContent} name="main" className="nav__btn">Main page</button>
                </li>
                <li className="nav__item">
                    <button onClick={chooseContent} name="users" className="nav__btn">Users page</button>
                </li>
                <li className="nav__item">
                    <button onClick={chooseContent} name="tags" className="nav__btn">Tags page</button>
                </li>
            </ul>
        </nav>
    );     

    
}

export default Navigation;