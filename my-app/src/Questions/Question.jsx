import React from 'react';

function Question() {
    return (
        <div className="list__question">
            <div className="question__rating">
                <p className="rating__number">0</p>
                <p className="rating__text">votes</p>
                <p className="rating__number">0</p>
                <p className="rating__text">answers</p>

                <p className="rating__text">3 views</p>
            </div>
            <div className="question__describe">
                <h3 className="question__title">
                    how to build a tree in html?
                </h3>
                <p className="question__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Id repellat, possimus, voluptatem harum ex maiores cupiditate vero 
                    repellendus nisi doloribus modi consequatur temporibus consectetur saepe.
                    Velit recusandae saepe unde amet.
                </p>

                <div className="question__tags">
                    <button className="question__tag">tml</button>
                    <button className="question__tag">css</button>
                    <button className="question__tag">js</button>
                    <div className="question__infor">
                        <p className="question__date">ascked 40 secs ago</p>
                        <p className="question__author">Razan</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Question;