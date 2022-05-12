import React, { useState, useEffect,  } from "react";
import papa from "papaparse"
import "../assets/button.css"
import background from "../assets/background.jpg";
import SingleQuestion from "../components_Fathers/SingleQuestion";



const Home = () => {
  const [apiBdHackathon, setApiBdHackathon] = useState([]);
  const [count, setcount] = useState(0);
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
		getJoke();
	}, []);
  const getJoke = () => {
    
      fetch(API)
        .then(result => result.text())
        .then(text => papa.parse(text))
        .then(data => convertData(data.data))
        
    
	};
  const handleClick = () => {
    for (let i = 0; i < apiBdHackathon.length; i++) {
      setcount(apiBdHackathon[i].Question_Enfant)
        console.log(apiBdHackathon[i].Question_Enfant)
           
       
    }     
    }
    
  return (

    <div className="backgroundapp">
        <div className="bubble">
          
            {/* {apiBdHackathon.map((question) => (
            <SingleQuestion question={question} key={question.id}/>
            //<p>{result.Question_Enfant}</p>
            
          ))}     */}
        </div>
        <p>{apiBdHackathon.Question_Enfant}</p>
          <img src={background} alt="backgroundapp" className="backgroudapp" />
          <div className="buttonPlay">
          
          <div >
           <button type="button" onClick={handleClick}>
          {<i class="fa-solid fa-play"></i>}

        </button>
    </div>
          
        </div>
      </div>
      );
};

      export default Home; 