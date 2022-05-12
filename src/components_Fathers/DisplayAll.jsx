import React from "react";

const DisplayAll = ({ apiBdHackathon, currentQuestion }) => {
 

  return (
    // modifier class
    <div>
      <div className="bubbleresponse">
        <p>{apiBdHackathon[currentQuestion].Reponse_Parent}</p>
      </div>
      <div className="bubblequestion"> 
        <p>{apiBdHackathon[currentQuestion].Question_Enfant}</p>
      </div>
      
      <div className="bubblelinks">
        <p>{apiBdHackathon[currentQuestion].Titre_du_lien}</p>
        <p>{apiBdHackathon[currentQuestion].URL}</p>
      </div>
    </div>
  );
};

export default DisplayAll;
