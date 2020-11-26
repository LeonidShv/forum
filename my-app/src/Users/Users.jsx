import React from 'react';
import Filter from '../Filter';
import User from './User.jsx';
import Search from '../Search';
import './index.css';

function Users(props) {
    let { isUsers } = props;
    let classNameMain = isUsers ? 'users__wrap content' : 'users__wrap d-none';
    let filterContent = [
        { btn: 'Reputation', key: 'Reputation_1' },
        { btn: 'New users', key: 'New_users_2' },
        { btn: 'Voters', key: 'Voters_3' },
        { btn: 'Editors', key: 'Editors_4' },
        { btn: 'Moderators', key: 'Moderators_5' }
    ];

    return (
        <div className={classNameMain}>
            <h2 className="title">Users</h2>
            <div className="filter__block space-between">
                <Search />
                <Filter filterContent={filterContent} />
            </div>

            <div className='users__list'>
                <User />
                <User />
                <User />

                <User />
                <User />
                <User />

            </div>
        </div>
    );
}

export default Users;