import React from "react";

const DisplayAll = ({ apiBdHackathon, currentQuestion }) => {
  return (
    // modifier class
    <>
      <div className="bubbleresponse">
        <p>{apiBdHackathon[currentQuestion].Reponse_Parent}</p>
      </div>
      <div className="bubblequestion">
        <p>{apiBdHackathon[currentQuestion].Question_Enfant}</p>
      </div>

      <div className="containerUrl">
        <h2>{apiBdHackathon[currentQuestion].Titre_du_lien}</h2>
        <p>{apiBdHackathon[currentQuestion].Description}</p>
        <a href={apiBdHackathon[currentQuestion].URL}>{apiBdHackathon[currentQuestion].URL}</a>
      </div>
    </>
  );
};

export default DisplayAll;
