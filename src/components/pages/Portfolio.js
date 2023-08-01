import React from "react";
import * as styles from "../../styles";
import Projects from "../Project/Projects";

export default function Portfolio() {
  {/* Component Content */}
  return (
    <div style={styles.pageStyle}>
      <h1 style={styles.titleStyle}>Portfolio</h1>
      <Projects />
    </div>
  );
}
