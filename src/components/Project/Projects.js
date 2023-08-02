import React, { useState } from "react";
import * as styles from "../../styles";
import "./project.css";

export default function Projects() {
  const [isHouseFinderHover, setIsHouseFinderHover] = useState(false);
  const [isBetBudHover, setIsBetBudHover] = useState(false);

  const handleHouseFinderMouseEnter = () => {
    setIsHouseFinderHover(true);
  };

  const handleHouseFinderMouseLeave = () => {
    setIsHouseFinderHover(false);
  };

  const handleBetBudMouseEnter = () => {
    setIsBetBudHover(true);
  };

  const handleBetBudMouseLeave = () => {
    setIsBetBudHover(false);
  };

  return (
    <div style={styles.boxesStyle}>
      {/* House Finder - Project 1 */}
      <a
        href="https://jony0418.github.io/project-api/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundImage:
            "url('" + process.env.PUBLIC_URL + "/Proyect_1.PNG')",
        }}
        className={"boxStyle"}
      >
        <a
          href="https://jony0418.github.io/project-api/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 style={styles.boxTitles}>House Finder</h2>
        </a>
        <a
          href="https://github.com/jony0418/project-api"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.boxIcon,
            ...(isHouseFinderHover ? styles.boxIconHover : {}),
          }}
          onMouseEnter={handleHouseFinderMouseEnter}
          onMouseLeave={handleHouseFinderMouseLeave}
        >
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/sf-black-filled/64/github.png"
            alt="github"
          />
        </a>
      </a>

      {/* Bet Bud - Project 2 */}
      <a
        href="https://protected-dusk-26900-3b74a0f4eef3.herokuapp.com/login"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundImage:
            "url('" + process.env.PUBLIC_URL + "/Proyect_2.PNG')",
        }}
        className={"boxStyle"}
      >
        <a
          href="https://protected-dusk-26900-3b74a0f4eef3.herokuapp.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 style={styles.boxTitles}>Bet Bud</h2>
        </a>
        <a
          href="https://github.com/nellyfabela/BetBud"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.boxIcon,
            ...(isBetBudHover ? styles.boxIconHover : {}),
          }}
          onMouseEnter={handleBetBudMouseEnter}
          onMouseLeave={handleBetBudMouseLeave}
        >
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/sf-black-filled/64/github.png"
            alt="github"
          />
        </a>
      </a>

      {/* ? - Project 3 */}
      <div
        href="#"
        style={{ backgroundColor: "#14213D", cursor: "auto" }}
        className={"boxStyle"}
      >
        <h2 style={styles.boxTitles}>Project 3 - Upcoming...</h2>
      </div>
    </div>
  );
}
