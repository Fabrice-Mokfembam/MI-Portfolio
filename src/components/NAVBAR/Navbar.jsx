import React, { useState } from "react";
import "./Navbar.scss";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { data } from "../../data/navData";
import { image } from "../../assets/images";

function Navbar() {
  const [mode, setMode] = useState(false);
  const [sidebar, setSideBar] = useState(false);

  function toggleMode() {
    setMode(!mode);
    }
    
  function toggleSidebar() {
    setSideBar(!sidebar);
  }

  return (
    <nav>
      <div className="main-nav-container">
        <div className="logo">
          <h1>
            FABRICE <span>DEV</span>
          </h1>
        </div>
        <div className="links">
          <ul>
            {data.map((link, index) => (
              <li key={index}>
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="toggler">
          {mode ? (
            <FiMoon className="icon" onClick={toggleMode} />
          ) : (
            <FiSun className="icon" onClick={toggleMode} />
          )}
          <button><a target="_blank" href="./FabriceResume.pdf">DownLoad Resume</a></button>
          <FiMenu className="icon hamburger" onClick={toggleSidebar} />
        </div>
      </div>

      <div className={`sidebar ${sidebar ? "show" : null}`}>
        <FiX className=" icon cancel-icon" onClick={toggleSidebar} />
        <img src={image} alt="" />
        <h1>
          FABRICE <span>DEV</span>
        </h1>
        <ul>
          {data.map((link, index) => (
            <li key={index}>
              <a href={link.href}> {link.name}</a>
            </li>
          ))}
        </ul>
        <div className="social-icons">
          <FaGithub className="icon" />
          <FaWhatsapp className="icon" />
          <FaLinkedin className="icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
