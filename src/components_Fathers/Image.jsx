import React from "react";
import dechetElectro from "../assets/dechetElctro.jpg";
import dechetVet from "../assets/dechetVet.jpg";
import jusdefruit from "../assets/jusdefruit.jpg";
import toxic from "../assets/toxic.jpg";
import recytel from "../assets/recytel.jpg";
import recymedi from "../assets/recymedi.jpg";
import conpost from "../assets/conpost.jpg";
import recybout from "../assets/recybout.png";
import recypil from "../assets/recypil.jpg";
import recycouche from "../assets/recycouche.jpg";
import recytri from "../assets/recytri.jpg";
import recylab from "../assets/recylab.jpg";
import recychant from "../assets/recychant.png";
import recyrobe from "../assets/recyrobe.jpg";
import recyamp from "../assets/recyamp.png";
import recyled from "../assets/recyled.jpg";

const Image = ({ apiBdHackathon, currentQuestion }) => {
        if (apiBdHackathon[currentQuestion].ID === "0") {
          return <img id="dechetVet" src={dechetVet} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "1") {
          return <img id="dechetElectro" src={dechetElectro} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "2") {
          return <img id="jusdefruit" src={jusdefruit} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "3") {
          return <img id="toxic" src={toxic} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "4") {
          return <img id="recytel" src={recytel} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "5") {
          return <img id="recymedi" src={recymedi} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "6") {
          return <img id="conpost" src={conpost} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "7") {
          return <img id="recybout" src={recybout} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "8") {
          return <img id="recypil" src={recypil} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "8") {
          return <img id="recypil" src={recypil} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "9") {
          return <img id="recyamp" src={recyamp} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "10") {
          return <img id="recyled" src={recyled} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "12") {
          return <img id="recycouche" src={recycouche} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "13") {
          return <img id="recytri" src={recytri} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "14") {
          return <img id="recylab" src={recylab} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "15") {
          return <img id="recychant" src={recychant} />
           
        }
        if (apiBdHackathon[currentQuestion].ID === "16") {
          return <img id="recyrobe" src={recyrobe} />
           
        }
  console.log(apiBdHackathon[currentQuestion].ID);
  return (
    
    <>
      
    </>
  );
};

export default Image;
