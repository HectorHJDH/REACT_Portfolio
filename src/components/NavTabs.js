import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  const navBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    listStyle: "none",
    padding: "2.3rem",
    color: "#fca311",
    backgroundColor: "#14213d",
  };

  const navItemsStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  const liStyle = {
    padding: "5px",
    fontSize: '1.3rem',
  };

  const titleStyle = {
    fontSize: '3rem',
  }

  return (
    <ul style={navBarStyle}>
      <li>
        <h1 style={titleStyle}>Hector JDH</h1>
      </li>
      <div style={navItemsStyle}>
        <li style={liStyle}>
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        <li style={liStyle}>
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li style={liStyle}>
          <a
            href="#blog"
            onClick={() => handlePageChange("Blog")}
            className={currentPage === "Blog" ? "nav-link active" : "nav-link"}
          >
            Blog
          </a>
        </li>
        <li style={liStyle}>
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </div>
    </ul>
  );
}

export default NavTabs;
