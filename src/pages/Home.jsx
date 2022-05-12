import React from "react";
import Button from "../components_Fathers/Button"
import "../assets/button.css"

const Home = ( { apiBdHackathon }) => {
  return (
    <div className="backgroundapp">
      <div className="buttonPlay">
        <div>
        {apiBdHackathon.map((question, index) => (<p key={index}>{question.Question_Enfant}</p>))}
        </div>
      <Button />
      </div>
    </div>
  );
};

export default Home;