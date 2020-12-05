function Person(props) {
    console.log(props);
    if (!props.posts) {
        return '';
    }
    const {posts: {
        about_me,
        answer_count: answerCount,
        display_name: name,
        link,
        location,
        profile_image,
        question_count: questionCount,
        reputation,
        
    }
} = props;

return (
            <div className="profile__person">
                <img src={profile_image} alt="profile avatar" className="profile__icon"/>
                <div className="profile__description">
                    <p className="profile__name">{name}</p>
                    <p className="profile__city">{location}</p>
                    <div dangerouslySetInnerHTML={{__html: about_me}} ></div>
                    <a href={link}>Link to stackoverflow profile</a>
                    <p>Reputation: {reputation}</p>
                    <p>Answer count: {answerCount}</p>
                    <p>Question count: {questionCount}</p>
                </div>
            </div>
    );
}

export default Person;