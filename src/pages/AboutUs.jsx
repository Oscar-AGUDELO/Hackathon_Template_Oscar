import React from "react";
import "../assets/AboutUs.css";
import "../assets/Home.css";
import team from "../assets/team.jpg";
import planet from "../assets/planet.jpg";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="presentation">
        <div className="text">
          <h1>A propos</h1>
          <p>
            Nous sommes{" "}
            <strong>Gloria, Oscar, Guillaume, Christophe et Valérie,</strong>{" "}
            jeunes développeurs en herbe.
            <br />
            <br /> Pour ce premier hackathon sur le thème de l'écologie, nous
            vous présentons ce site à but pédagogique à destination des plus
            jeunes mais aussi de leurs parents.
            <br /> Le but étant de vous accompagner dans une meilleure prise en
            compte de vos impacts environnementaux et de vous proposer des
            solutions pratiques au quotidien.{" "}
          </p>
        </div>
        <img src={team} alt="team picture" className="team" />
      </div>

      <div className="infos">
        <img src={planet} alt="planet picture" className="planet" />
        <div className="text">
          <h3>Quelques chiffres</h3>
          <p>1 planète !</p>
          <p>7 milliards d'humains</p>
          <p>produisent 2,01 milliards de tonnes de déchets </p>
          <p>3,4 milliards de tonnes de déchets par an en 2050</p>
          <p>Seulement 19 % des déchets sont recyclés ou compostés</p>
          <p>
            L'immense majorité, soit 79 %, est en train de s'amonceler sur les
            sites d'enfouissement des déchets ou se répand dans la nature sous
            forme de détritus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
