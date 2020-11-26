import React from 'react';

function User() {
    return (
        <div className="user">
            <img src="https://i.stack.imgur.com/arsQA.jpg?s=96&g=1" alt="" className="user__icon" />
            <div className="user__describe">
                <p className="user__title">GMB</p>
                <p className="user__info">Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia</p>
                <p className="user__number">222</p>
                <p className="user__skils">sql, mysql, datetime</p>
            </div>
        </div>
    );
}

export default User;