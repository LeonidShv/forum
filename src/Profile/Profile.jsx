import PropTypes from "prop-types";
import React, { useState } from "react";
import Navigation from "./Navigation";
import ChoosenInfo from "./ChoosenInfo";
import Person from "./Person";
import { profileInfo, profileNav } from "./profileInfo";
import { toggleProperty } from "../functions/toggleProperty";
import "./index.css";

function Profile(props) {
  const [activeNav, setActiveNav] = useState(profileNav);
  const [choosenContent, setChosenContent] = useState(profileInfo.history);
  const [activeBurger, setActiveBurger] = useState(false);

  function openNavigation() {
    setActiveBurger(!activeBurger);
  }

  const { posts } = props;
  let propsPost = posts.posts ? posts.posts[0] : false;
  if (!posts.posts || !posts.posts.length) {
    return " ";
  }

  return (
    <div className="profile">
      <Person posts={propsPost} />
      <Navigation chooseContent={chooseContent} profileNav={activeNav} openNavigation={openNavigation} activeBurger={activeBurger} />
      <ChoosenInfo choosenContent={choosenContent} />
    </div>
  );

  function chooseContent(e) {
    openNavigation();
    e.preventDefault();
    const key = e.target.dataset.id;
    setChosenContent(profileInfo[key]);
    let activeElement = activeNav.find((navBtn) => navBtn.active);
    const newActiveNav = toggleProperty(activeNav, activeElement.id, "active");
    setActiveNav(newActiveNav); //activeNav[x].active = false
    setActiveNav(toggleProperty(newActiveNav, key, "active")); //activeNav[x].active = true
  }
}

Profile.propTypes = {
  posts: PropTypes.object,
};

export default Profile;
