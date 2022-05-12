import React from "react";

const DisplayAll = ({ apiBdHackathon, currentQuestion }) => {
 

  return (
    <div>
      <div className="question">
        <p>{apiBdHackathon[currentQuestion].Question_Enfant}</p>
      </div>
      <div className="response">
        <p>{apiBdHackathon[currentQuestion].Reponse_Parent}</p>
      </div>
      <div className="links">
        <p>{apiBdHackathon[currentQuestion].Titre_du_lien}</p>
        <p>{apiBdHackathon[currentQuestion].URL}</p>
      </div>
    </div>
  );
};

export default DisplayAll;
