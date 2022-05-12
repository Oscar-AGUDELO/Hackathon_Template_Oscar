import React from "react";
import Button from "../components_Fathers/Button"
import "../assets/button.css"
import background from "../assets/background.jpg";


const Home = () => {
  return (
    <div className="backgroundapp">
        <div>
          <img src={background} alt="backgroundapp" className="backgroudapp" />
          <div className="buttonPlay">
            <Button />
          </div>
        </div>
      </div>
      );
};

      export default Home; 