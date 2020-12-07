import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import { ReactComponent as Logo } from "./logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isFaBarsClick, setIsFaBarsClicked] = useState(false);

  return (
    <nav className="nav-wrapper">
      <div className="nav-header">
        <Logo />
        <FaBars
          className="fa-bars"
          onClick={() => setIsFaBarsClicked(!isFaBarsClick)}
        />
      </div>

      <div
        className={`${
          isFaBarsClick ? "links-container show-container" : "links-container"
        }`}
      >
        <ul className="links-list">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
