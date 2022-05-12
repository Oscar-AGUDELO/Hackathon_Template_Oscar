import React, { useState } from "react";

const DisplayAll = ({ apiBdHackathon }) => {
  console.log(
    "hello" + apiBdHackathon.map((question) => question.Question_Enfant)
  );

  return (
    <div>
      <div className="question">
        <p>{apiBdHackathon.Question_Enfant}</p>
      </div>
      <div className="response">
        <p>{}</p>
      </div>
      <div className="links">
        <p>{}</p>
      </div>
    </div>
  );
};

export default DisplayAll;
