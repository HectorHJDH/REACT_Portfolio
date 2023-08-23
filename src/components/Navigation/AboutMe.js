import React from "react";
import * as styles from "../../styles";
export default function AboutMe() {
  return (
    <div style={styles.pageStyle}>
      <h1 style={styles.titleStyle}>About Me</h1>
      <img
        src={require("../../Assets/Hector_cut.jpg")}
        alt="Hector"
        style={styles.pictureStyle}
      />
      I'm an engineer fueled by curiosity for emerging technologies, especially
      in web development. I'm captivated by the impact web pages can have on
      users and businesses. I thrive as a proactive collaborator, driven by a
      genuine desire to assist others. Additionally, I excel in quickly
      establishing rapport and fostering connections.
    </div>
  );
}
