export default function Footer() {
  const footerStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    margin: "auto auto 20px auto",
    width: "18%",
  };

  return ( // Add the return statement here
    <div style={footerStyles}>
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
