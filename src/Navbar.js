import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import { ReactComponent as Logo } from "./logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isFaBarsClicked, setIsFaBarsClicked] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  // Everytime isFarBarsClicked changes, we'll run our callback function
  // Essentially we'll use the height of the links not the linksContainer to get the overall height of the container itself

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (isFaBarsClicked) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [isFaBarsClicked]);

  return (
    <nav className="nav-wrapper">
      <div className="nav-header">
        <Logo />
        <FaBars
          className="fa-bars"
          onClick={() => setIsFaBarsClicked(!isFaBarsClicked)}
        />
      </div>

      <div className="links-container" ref={linksContainerRef}>
        <ul className="links-list" ref={linksRef}>
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
