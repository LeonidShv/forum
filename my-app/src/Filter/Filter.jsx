import React from 'react';
import './index.css';

function Filter(props) {
    let filterContent = props.filterContent;
    let buttons = filterContent.map((content, i) => {
        if (!i) {
            return <button key={content.key} className="filter__btn filter__btn-active">{content.btn}</button>;
        } else {
            return <button key={content.key} className="filter__btn">{content.btn}</button>
        }
    });

    return (
        <div className="content__filter">
            {buttons}
        </div>
    );
}

export default Filter;