import PropTypes from "prop-types";
import React from "react";

function User(props) {
  const {
    user: { display_name: name, location, reputation, profile_image: imgUrl },
  } = props;

  return (
    <div className="user">
      <img src={imgUrl} alt="" className="user__icon" />
      <div className="user__describe">
        <p className="user__title">{name}</p>
        <p className="user__info">{location}</p>
        <p className="user__number">{reputation}</p>
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object
};

export default User;
