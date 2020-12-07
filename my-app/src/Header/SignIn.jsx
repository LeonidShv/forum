import PropTypes from "prop-types";
import React, { useState } from "react";
import Button from "../Button";

function SignIn(props) {
  const { getCookie } = props;
  const [userId, setUserId] = useState("23423");

  function handleChange(e) {
    setUserId(e.target.value);
  }

  function saveId(e) {
    if (userId.length <= 3) {
      return;
    } else if (e.type === "keypress" && e.key === "Enter") {
      document.cookie = `userId=${userId}`;
      getCookie();
    } else if (e.type === "click") {
      document.cookie = `userId=${userId}`;
      getCookie(userId);
    }
  }

  return (
    <div className="wrap__search sign-in">
      <input
        className="search"
        type="text"
        value={userId}
        onChange={handleChange}
        onKeyPress={saveId}
      />
      <Button text="Sign In" method={saveId} isSignIn />
    </div>
  );
}

SignIn.propTypes = {
  getCookie: PropTypes.func,
};

export default SignIn;
