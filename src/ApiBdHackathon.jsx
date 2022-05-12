import React, { useState, useEffect } from "react";
import papa from "papaparse"

const ApiBdHackathon = () => {
  const [apiBdHackathon, setApiBdHackathon] = useState([]);
  const API = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRLSgkrDdiA68XL2xzb5tsZvByO0hWoJbE7zi6kGXDaAx7w5BPTorE9LW4MHZutyouq3DXrpZCIqWl6/pub?output=csv";
const convertData = data => {
  const json = data.map((line, index) => {
    if (index > 0) {
      let obj = {};
      data[0].forEach((key, j) => (obj = { ...obj, [key]: line[j] }));
      return obj;
    }
  })
  json.shift();
  setApiBdHackathon(json)
}
  useEffect(() => {
    fetch(API)
        .then(result => result.text())
        .then(text => papa.parse(text))
        .then(data => convertData(data.data))
  }, []);

  return (
    <div>
      <h1>Random API</h1>
      <div>
      {apiBdHackathon.map((question, index) => (<h6 key={index}>{question.Question_Enfant}</h6>))}
      </div>
    </div>
  );
};

export default ApiBdHackathon;
