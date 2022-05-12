import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import zLogo from "../assets/zLogo.png";

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
      console.log(screenWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <div className="nav-container-general">
      <div className="nav-header">
        <div className="nav-name">{/* <h1>NAME HERE</h1> */}</div>
        <button type="button" onClick={toggleNav} className="nav-btn">
          {" "}
          <img src={zLogo} alt="burger" className="nav-img-logo" />
        </button>
      </div>

      {/* {(toggleMenu || screenWidth > 750) && ( */}
      {toggleMenu && (
        <nav className="nav-nav-burger-container">
          <Link to="/" className="nav-item-burger">
            Home
          </Link>
          <Link to="/Page1" className="nav-item-burger">
            Page 1
          </Link>
          <Link to="/Page2" className="nav-item-burger">
            Page 2
          </Link>
          <Link to="/AboutUs" className="nav-item-burger">
            About Us
          </Link>
        </nav>
      )}
    </div>
  );
}

export default Nav;
