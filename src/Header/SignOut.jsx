import PropTypes from "prop-types";
import React from "react";
import Button from "../Button";

function SignIn(props) {
  const { getCookie } = props;

  function signOut() {
    document.cookie = "userId=0;";
    getCookie("0000");
  }

  return <Button text="Sign Out" method={signOut} isOut />;
}

SignIn.propTypes = {
  getCookie: PropTypes.func,
};

export default SignIn;
