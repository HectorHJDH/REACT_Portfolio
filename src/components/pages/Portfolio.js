import React, { useState } from "react";
import * as styles from "../../styles";

export default function Portfolio() {
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
    <div style={styles.pageStyle}>
      <h1 style={styles.titleStyle}>Portfolio</h1>
      <div style={styles.boxesStyle}>
        {/* House Finder - Project 1 */}
        <a
          href="https://jony0418.github.io/project-api/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.boxStyle,
            backgroundImage: "url('/Proyect_1.PNG')",
          }}
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

        {/* BetBud - Project 2 */}
        <a
          href="https://jony0418.github.io/project-api/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.boxStyle,
            backgroundImage: "url('/Proyect_2.PNG')",
          }}
        >
          <a
            href="https://jony0418.github.io/project-api/"
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
      </div>
    </div>
  );
}
