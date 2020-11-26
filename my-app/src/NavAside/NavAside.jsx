import React from 'react';
import './index.css';

function NavAside() {
    return (
        <ul className="main__nav">
            <li className="main__nav-item main__nav-item_active ">
                <a className="main__nav-link" href="">Main page</a>
            </li>
            <li className="main__nav-item">
                <a className="main__nav-link" href="">Users page</a>
            </li>
            <li className="main__nav-item">
                <a className="main__nav-link" href="">Tags page</a>
            </li>
        </ul>
    )
}

export default NavAside;