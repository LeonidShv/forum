import React, { useState, useEffect } from "react";
import Filter from '../Filter';
import User from './User';
import Search from '../Search';
import './index.css';

function Users(props) {
    const [users, setUsers] = useState({ users: [], isLoading: false, error: null });
    let urlQuestions = `https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow&filter=!406FePYJQRs6pOtJ1&key=9TT0ys3bQ*GHxowl*HitOg((`;
    useEffect(() => {
      fetch(urlQuestions)
        .then((res) => res.json())
        .then(
          (result) => {
            setUsers({ users: result.items, isLoading: true, error: users.error });
          },
          (error) => {
            setUsers({ users: users.users, isLoading: true, error: error });
          }
        );
    }, []);
  
    if (!users.isLoading && users.users.length) {
      return "load";
    }

    const listTags = users.users.map((user) => (
        <User user={user} key={user.account_id} />
    ));

    let { isUsers } = props;
    let filterContent = [
        { btn: 'Reputation', key: 'Reputation_1' },
        { btn: 'New users', key: 'New_users_2' },
        { btn: 'Voters', key: 'Voters_3' },
        { btn: 'Editors', key: 'Editors_4' },
        { btn: 'Moderators', key: 'Moderators_5' }
    ];

    return (
        <div className="users__wrap content">
            <h2 className="title">Users</h2>
            <div className="filter__block space-between">
                <Search />
                <Filter filterContent={filterContent} />
            </div>

            <div className='users__list'>
{listTags}
            </div>
        </div>
    );
}

export default Users;