import React from 'react';

function User(props) {
    const {tag: {
        count,
        name
    }
} = props;
    return (
        <div className="tag">
            <p className="tag__title">{name}</p>
            <p className="tag__describe">
                Users can find special information by {name} tag
                    </p>
            <p className="tag__amount">{count} questions</p>
        </div>
    );
}

export default User;