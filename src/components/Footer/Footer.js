import React from "react";
import * as styles from "../../styles";

export default function Footer() {
  return (
    <div style={styles.footerStyles}>
      {/* GitHub */}
      <a
        href="https://github.com/HectorHJDH"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/sf-black-filled/64/github.png"
          alt="github"
        />
      </a>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/hjdhector/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/linkedin.png"
          alt="linkedin"
        />
      </a>
      {/* StackOverflow */}
      <a
        href="https://stackoverflow.com/users/20591858/hectorjdh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/stackoverflow.png"
          alt="stackoverflow"
        />
      </a>
    </div>
  );
}
