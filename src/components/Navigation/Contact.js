import { React, useState } from "react";
import * as styles from "../../styles";

export default function Contact() {
  const [isButtonHover, setButtonHover] = useState(false);

  const handleButtonHover = () => {
    setButtonHover(true);
  };

  const handleButtonLeave = () => {
    setButtonHover(false);
  };
  return (
    <div style={styles.pageStyle}>
      <h1 style={styles.titleStyle2}>Contact Me</h1>
      <h2 style={styles.subtitleStyle}>Name</h2>
      <input placeholder="Name" style={styles.inputStyles} type="name"></input>
      <h2 style={styles.subtitleStyle}>Email</h2>
      <input
        placeholder="Email"
        style={styles.inputStyles}
        type="email"
      ></input>
      <h2 style={styles.subtitleStyle}>Message</h2>
      <textarea
        placeholder="Message"
        style={styles.textareaStyles}
        type="text"
      ></textarea>
      <button
        style={{
          ...styles.buttonStyle,
          ...(isButtonHover ? styles.buttonStyleHover : {}),
        }}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
      >
        Submit
      </button>
    </div>
  );
}
