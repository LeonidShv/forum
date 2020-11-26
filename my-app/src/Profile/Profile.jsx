import React, { useState } from "react";
import Navigation from "./Navigation";
import ChoosenInfo from "./ChoosenInfo";
import Person from "./Person";
import { profileInfo, profileNav } from "./profileInfo";
import { toggleProperty } from '../functions/toggleProperty';
import "./index.css";

function Profile() {
  const [activeNav, setActiveNav] = useState(profileNav);
  const [choosenContent, setChosenContent] = useState(profileInfo.history);

  return (
    <div className="profile">
      <Person />
      <Navigation chooseContent={chooseContent} profileNav={activeNav} />
      <ChoosenInfo choosenContent={choosenContent} />
    </div>
  );

  function chooseContent(e) {
    e.preventDefault();
    const key = e.target.dataset.id;
    setChosenContent(profileInfo[key]);
    let activeElement = activeNav.find((navBtn) => navBtn.active);
    const newActiveNav = toggleProperty(activeNav, activeElement.id, "active");
    setActiveNav(newActiveNav); //activeNav[x].active = false
    setActiveNav(toggleProperty(newActiveNav, key, "active")); //activeNav[x].active = true
  }
}

export default Profile;
