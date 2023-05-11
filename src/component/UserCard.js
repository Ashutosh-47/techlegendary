import React from "react";
import "./UserCard.css";

const UserCard = ({ user, addToTeam }) => {
  return (
    <div className="user-card">
      <div className="user-info">
        <img src={user.avatar} alt="avatar" />
        <div>
          <h3>Name: <i>{user.first_name + " " + user.last_name }</i></h3>
          <p className="email" ><b>Email: </b>{user.email}</p>
          <p><b>Domains:</b> {user.domain}</p>
          <p><b>Gender:</b> {user.gender}</p>
          <p><b>Available:</b> {user.available ? 'true' : 'false'}</p>
        </div>
      </div>
      <div className="user-actions">
        <button onClick={() => addToTeam(user)}>Add to Team</button>
      </div>
    </div>
  );
};

export default UserCard;
