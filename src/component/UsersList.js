
import React from "react";
import UserCard from "./UserCard";
import "./UsersList.css";

const UsersList = ({ users, addToTeam }) => {
  return (
    <div className="users-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} addToTeam={addToTeam} />
      ))}
    </div>
  );
};

export default UsersList;
