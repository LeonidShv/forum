import React from "react";
import Navigation from "./Navigation.jsx";
import Search from '../Search';
import './header.css';

function Header(props) {
    let {chooseContent, openNavigation, activeBurger} = props;

    return (
        <header className="header">
            <button className="header__logo">
                <img src="img/favicon.svg" alt="stock questions" className="header__logo-icon" />
                <span className="header__logo-text">stock questions</span>
            </button>
            <Search isHeader />
            <div className="header__user">
                <img src="./img/ava.jpg" alt="user" className="header__photo"/>
                <p className="header__login">Leo Smith</p>
            </div>
            <Navigation chooseContent={chooseContent} openNavigation={openNavigation} activeBurger={activeBurger} />
        </header>
    );
}

export default Header;