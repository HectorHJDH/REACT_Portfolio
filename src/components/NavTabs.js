import React from "react";
import * as styles from "./pages/styles";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.navBarStyle}>
      <li>
        <h1 style={styles.titleStyle}>Hector JDH</h1>
      </li>
      <div style={styles.navItemsStyle}>
        <li style={styles.liStyle}>
          <a
            href="#aboutMe"
            onClick={() => handlePageChange("About Me")}
            className={currentPage === "About Me" ? "activeLink" : "nav-link"}
            style={currentPage === "About Me" ? styles.activeLinkStyle : null}
          >
            About Me
          </a>
        </li>
        <li style={styles.liStyle}>
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={currentPage === "Portfolio" ? "activeLink" : "nav-link"}
            style={currentPage === "Portfolio" ? styles.activeLinkStyle : null}
          >
            Portfolio
          </a>
        </li>
        <li style={styles.liStyle}>
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={currentPage === "Contact" ? "activeLink" : "nav-link"}
            style={currentPage === "Contact" ? styles.activeLinkStyle : null}
          >
            Contact
          </a>
        </li>
        <li style={styles.liStyle}>
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={currentPage === "Resume" ? "activeLink" : "nav-link"}
            style={currentPage === "Resume" ? styles.activeLinkStyle : null}
          >
            Resume
          </a>
        </li>
      </div>
    </ul>
  );
}

export default NavTabs;
