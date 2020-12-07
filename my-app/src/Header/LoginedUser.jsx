import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import SignOut from "./SignOut";

function LoginedUser(props) {
  if (!props.posts) {
    return "";
  }
  const {
    posts: { display_name: name, profile_image: profileImage },
    switchContent,
    getCookie,
  } = props;

  return (
    <>
      <SignOut getCookie={getCookie} />
      <Link to="/profile" name="profile" onClick={switchContent}>
        <div className="header__user">
          <img src={profileImage} alt="user" className="header__photo" />
          <p className="header__login">{name}</p>
        </div>
      </Link>
    </>
  );
}

LoginedUser.propTypes = {
  posts: PropTypes.object,
  display_name: PropTypes.string,
  profile_image: PropTypes.string,
  switchContent: PropTypes.func,
  getCookie: PropTypes.func,
};

export default LoginedUser;
