import React from "react";

import "./Team.css";

const Team = ( { team, removeFromTeam } ) => {

  return (
    <div className="team">
      <h2>Team</h2>

      { team.length > 0 ? (
        
        <div className="team-list">
        
          { team.map ( ( member ) => (
            
            <div key={member.id} className="team-member">
            
              <img src={member.avatar} alt="avatar" />
              <div>
                <h3>{member.first_name}</h3>
                <p>{member.email}</p>
                <p>{member.domain}</p>
              </div>

              <div className="team-member-actions">
                <button onClick = { () => removeFromTeam(member) }>Remove</button>
              
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No members in team yet.</p>
      )}

    </div>
  );
};

export default Team;
