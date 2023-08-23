import React from "react";
import * as styles from "../../styles";

export default function Resume() {
  return (
    <div style={styles.pageStyle}>
      <h1 style={styles.titleStyle2}>Resume</h1>
      <p style={styles.contentStyle2}>
        Download my{" "}
        <a href="/Resume - Hector Dominguez.pdf" download>
          Resume
        </a>
      </p>
      <div style={{ margin: "10px 0 20px 5px" }}>
        <h2 style={styles.subtitleStyle}>Front-End Proficiencies</h2>
        <ul style={styles.contentStyle2}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div style={{ margin: "10px 0 20px 5px" }}>
        <h2 style={styles.subtitleStyle}>Back-End Proficiencies</h2>
        <ul style={styles.contentStyle2}>
          <li>Git</li>
          <li>GitHub</li>
          <li>Heroku</li>
          <li>command line</li>
          <li>npm</li>
          <li>RESTful APIs</li>
          <li>GraphQL</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Express.js</li>
          <li>Node.js</li>
        </ul>
      </div>
    </div>
  );
}
