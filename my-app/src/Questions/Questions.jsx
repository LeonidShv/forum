import React, { useState, useEffect } from 'react';
import Question from './Question';
import Filter from '../Filter/Filter';
import AnswerHeader from '../AnswerHeader';
import './index.css';

function Questions(props) {
    const [questions, setQuestions] = useState(0);
    let { isMain } = props;
    let filterContent = [
        { btn: 'Activity', key: 'Activity_1' },
        { btn: 'Votes', key: 'Votes_2' },
        { btn: 'Creation', key: 'Creation_3' }
    ];

    

    return (
        <div className="content">
            <AnswerHeader />
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