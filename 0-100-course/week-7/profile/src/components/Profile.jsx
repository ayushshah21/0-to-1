import React from "react";
import Stats from "./Stats";

const Profile = () => {
  return (
    <div className="profile-container">
      <img className="my-img" src="me.png" />
      <h3 className="my-name">Ayush Shah</h3>
      <p className="hometown">Bethlehem</p>
      <div className="cool"></div>
      <Stats />
    </div>
  );
};

export default Profile;
