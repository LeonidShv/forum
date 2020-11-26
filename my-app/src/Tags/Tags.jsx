import React from 'react';
import Filter from '../Filter';
import Tag from './Tag.jsx';
import Search from '../Search';
import './index.css';

function Tags(props) {
    let { isTags } = props;
    let classNameMain = isTags ? 'tags__wrap content' : 'tags__wrap d-none';

    const filterContent = [
        { btn: 'Popular', key: 'Popular_1' },
        { btn: 'Name', key: 'Name_2' },
        { btn: 'New', key: 'New_3' }
    ];

    return (
        <div className={classNameMain}>
            <h2 className="title">Tags</h2>
            <div className="filter__block space-between">
                <Search />
                <Filter filterContent={filterContent} />
            </div>

            <div className="tags__list">
                <Tag />
                <Tag />
                <Tag />
                <Tag />
                <Tag />
                <Tag />
            </div>
        </div>
    );
}

export default Tags;