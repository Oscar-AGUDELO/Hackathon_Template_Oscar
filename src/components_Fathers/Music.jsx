import React, { useState, useEffect } from "react";
import iconMusic from "../assets/iconMusic.png";
import music from "../assets/music.mp3";

function Music() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
     // console.log(screenWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <div className="music_container">
      <div className="">
        <div className="">{/* <h1>NAME HERE</h1> */}</div>
        <button type="button" onClick={toggleNav} className="button_iconMusic">
          {" "}
          <img src={iconMusic} alt="burger" className="iconMusic" />
        </button>
      </div>

      {/* {(toggleMenu || screenWidth > 750) && ( */}
      {toggleMenu && (
        <nav className="nav-nav-burger-container">
          <audio autoPlay="autoPlay" loop="loop" className="nav-music">
            <source src={music} />
          </audio>
        </nav>

      )}
    </div>
  );
}

export default Music;
