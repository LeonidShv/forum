import React, { useState, useEffect } from 'react';
import Question from './Question.jsx';
import Filter from '../Filter/Filter.jsx';
import './index.css';

function Questions(props) {
    const [questions, setQuestions] = useState(0);
    let { isMain } = props;
    let classNameMain = isMain ? 'content' : 'd-none';
    let filterContent = [
        { btn: 'Activity', key: 'Activity_1' },
        { btn: 'Votes', key: 'Votes_2' },
        { btn: 'Creation', key: 'Creation_3' }
    ];

    

    return (
        <div className={classNameMain}>
            <h2 className="title">All Questions</h2>
            <div className="filter__block flex-end">
                <Filter filterContent={filterContent} />
            </div>

            <div className="content__list">
                <Question />
            </div>
        </div>
    )
}

export default Questions;