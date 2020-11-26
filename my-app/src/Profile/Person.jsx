import React from 'react';

function Person() {
    return (
            <div className="profile__person">
                <img src="./img/ava.jpg" alt="profile avatar" className="profile__icon"/>
                <div className="profile__description">
                    <p className="profile__name">Leo Smith</p>
                    <p className="profile__city">Kiyv</p>
                </div>
            </div>
    );
}

export default Person;