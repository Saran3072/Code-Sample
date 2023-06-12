import React, { useState } from "react";
import Head from "./Head";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Programs">All Programs</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Team">Team</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i style={{color: "#1eb2a6"}} className="fa fa-times"> </i> : <i style={{color: "#1eb2a6"}} className="fa fa-bars"> </i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
