import PropTypes from "prop-types";
import React from "react";

function Person(props) {
  if (!props.posts) {
    return "";
  }

  const {
    posts: {
      about_me,
      answer_count: answerCount,
      display_name: name,
      link,
      location,
      profile_image,
      question_count: questionCount,
      reputation,
    },
  } = props;

  return (
    <div className="profile__person">
      <img src={profile_image} alt="profile avatar" className="profile__icon" />
      <div className="profile__description">
        <p className="profile__name">{name}</p>
        <p className="profile__city">{location}</p>
        <div dangerouslySetInnerHTML={{ __html: about_me }}></div>
        <a className="profile__link" href={link}>Link to stackoverflow profile</a>
        <p className="profile__text"><span className="profile__text_bold">Reputation:</span> {reputation}</p>
        <p className="profile__text"><span className="profile__text_bold">Answer count:</span> {answerCount}</p>
        <p className="profile__text"><span className="profile__text_bold">Question count:</span> {questionCount}</p>
      </div>
    </div>
  );
}

Person.propTypes = {
  posts: PropTypes.object,
};


export default Person;
