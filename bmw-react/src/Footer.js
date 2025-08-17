import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "black", color: "white", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <p style={{ 
            fontSize: "x-large", 
            textAlign: "center", 
            color: "#0095ff", 
            marginBottom: "20px",
            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
          }}>
            Follow Us On
          </p>
        </div>
        
        <nav className="foot">
          <ul style={{
            listStyleType: "none",
            backgroundColor: "#000000",
            margin: 0,
            padding: 0,
            overflow: "hidden",
            borderTop: "1px solid #0095ff",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
            paddingTop: "20px"
          }}>
            <li style={{ textAlign: "center" }}>
              <a href="#" style={{
                color: "aliceblue",
                display: "block",
                padding: "6px 10px",
                textDecoration: "none",
                transition: "color 0.3s ease"
              }} onMouseEnter={(e) => e.target.style.color = "#0095ff"}
                 onMouseLeave={(e) => e.target.style.color = "aliceblue"}>
                Instagram
              </a>
            </li>
            <li style={{ textAlign: "center" }}>
              <a href="#" style={{
                color: "aliceblue",
                display: "block",
                padding: "6px 10px",
                textDecoration: "none",
                transition: "color 0.3s ease"
              }} onMouseEnter={(e) => e.target.style.color = "#0095ff"}
                 onMouseLeave={(e) => e.target.style.color = "aliceblue"}>
                Youtube
              </a>
            </li>
            <li style={{ textAlign: "center" }}>
              <a href="#" style={{
                color: "aliceblue",
                display: "block",
                padding: "6px 10px",
                textDecoration: "none",
                transition: "color 0.3s ease"
              }} onMouseEnter={(e) => e.target.style.color = "#0095ff"}
                 onMouseLeave={(e) => e.target.style.color = "aliceblue"}>
                Facebook
              </a>
            </li>
            <li style={{ textAlign: "center" }}>
              <a href="#" style={{
                color: "aliceblue",
                display: "block",
                padding: "6px 10px",
                textDecoration: "none",
                transition: "color 0.3s ease"
              }} onMouseEnter={(e) => e.target.style.color = "#0095ff"}
                 onMouseLeave={(e) => e.target.style.color = "aliceblue"}>
                Twitter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
