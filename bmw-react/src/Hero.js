import React, { useState } from "react";

function Hero() {
  const [knowMoreHover, setKnowMoreHover] = useState(false);

  return (
    <div
      className="image"
      style={{
        backgroundImage: 'url("/R.gif")',
        backgroundColor: "#cccccc",
        height: "700px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        paddingTop: "80px" // Add padding for sticky navbar
      }}
    >
      <div className="text1">
        <h1 style={{ fontSize: "50px", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>BMW</h1>
        <h1 style={{ fontSize: "20px", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>Bavarian Motor Works</h1>
        <br />
        <br />
        <button
          type="button"
          className="button button1"
          style={knowMoreHover ? {
            backgroundImage: 'url("/BMW-M-logo.png")',
            backgroundPosition: "center",
            backgroundSize: "150%",
            backgroundRepeat: "no-repeat",
            color: "transparent",
            border: "2px solid transparent"
          } : {}}
          onMouseEnter={() => setKnowMoreHover(true)}
          onMouseLeave={() => setKnowMoreHover(false)}
        >
          Know More
        </button>
      </div>
    </div>
  );
}

export default Hero;
