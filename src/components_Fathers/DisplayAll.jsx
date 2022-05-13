import React from "react";
import Image from "../components_Fathers/Image.jsx";

const DisplayAll = ({ apiBdHackathon, currentQuestion }) => {
        
  console.log(apiBdHackathon[currentQuestion].ID);
  return (
    // modifier class
    <>
      <div className="bubbleresponse">
        <p>{apiBdHackathon[currentQuestion].Reponse_Parent}</p>
      </div>
      <div className="bubblequestion">
        <p>{apiBdHackathon[currentQuestion].Question_Enfant}</p>
        <Image apiBdHackathon={apiBdHackathon} currentQuestion={currentQuestion} />
      </div>

      <div className="containerUrl">
        <h2>{apiBdHackathon[currentQuestion].Titre_du_lien}</h2>
        <p>{apiBdHackathon[currentQuestion].Description}</p>
        <a href={apiBdHackathon[currentQuestion].URL} target="_blank">
          {apiBdHackathon[currentQuestion].URL}
        </a>
      </div>
    </>
  );
};

export default DisplayAll;
