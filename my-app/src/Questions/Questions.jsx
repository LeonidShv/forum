import Question from "./Question";
import Filter from "../Filter/Filter";
import AnswerHeader from "../AnswerHeader";
import "./index.css";

import React, { useState, useEffect } from "react";

function Questions(props) {
    let urlQuestions = `https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&filter=!LYA)NnjV0isg-d2(OzM7NX&key=9TT0ys3bQ*GHxowl*HitOg((`;
    const {choosePost} = props;

    const [posts, setPosts] = useState({posts: [], isLoading: false, error: null});

    useEffect(() => {
        fetch(urlQuestions)
            .then(res => res.json())
            .then(
                (result) => {
                    setPosts({posts: result.items, isLoading: true, error: posts.error});
                },
                (error) => {
                    setPosts({posts: posts.items, isLoading: true, error: error});
                }
            )
    }, [])

    const filterContent = [
        { btn: "Activity", key: "Activity_1" },
        { btn: "Votes", key: "Votes_2" },
        { btn: "Creation", key: "Creation_3" },
    ];

    if (!posts.isLoading && posts.length) {
        return "load";
    }

    const listQuestions = posts.posts.map((post) => (
        <Question post={post} key={post.question_id} choosePost={choosePost} />
    ));

    return (
        <div className="content">
            <AnswerHeader title='All Questions' />
            <div className="filter__block flex-end">
                <Filter filterContent={filterContent} />
            </div>

            <div className="content__list">{listQuestions}</div>
        </div>
    );
}

export default Questions;
