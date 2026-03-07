import React from "react";
import { useNavigate } from "react-router-dom";

function Slideshow() {
  const navigate = useNavigate();

  const performanceItems = [
    { image: "/assets/images/BMWmodel.jpg", description: "All Models", link: "/models" },
    { image: "/assets/images/bmwevolution.jpg", description: "Evolution", link: "/evolution" },
    { image: "/assets/images/BMWhypercar.jpg", description: "Racing", link: "/racing" },
    { image: "/assets/images/bmw interior.jpg", description: "Interior", link: "/interior" },
    { image: "/assets/images/spotifybmw.jpg", description: "Spotify Playlist", link: "https://open.spotify.com/user/bmw?si=aa435384ba984316" }
  ];

  return (
    <div style={{ backgroundColor: "black", padding: "60px 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <h2 style={{
          color: "white",
          textAlign: "center",
          fontSize: "2rem",
          fontFamily: "'Lucida Console', Monaco, monospace",
          fontWeight: "normal",
          letterSpacing: "8px",
          textTransform: "uppercase",
          borderBottom: "1px solid #333",
          paddingBottom: "20px",
          marginBottom: "40px"
        }}>
          EXPLORE
        </h2>
        <div className="slideshow-flex" style={{
          marginTop: "40px"
        }}>
          {performanceItems.map((item, index) => (
            <div key={index} style={{
              backgroundColor: "transparent",
              borderRadius: "0px",
              overflow: "hidden",
              transition: "all 0.2s ease",
              cursor: item.link ? "pointer" : "default",
              flex: "1",
              maxWidth: "900px",
              width: "50%"
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.3)";
                e.currentTarget.style.zIndex = "10";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.zIndex = "1";
              }}
              onClick={() => {
                if (item.link) {
                  if (item.link.startsWith('http')) {
                    window.open(item.link, '_blank', 'noopener,noreferrer');
                  } else {
                    navigate(item.link);
                  }
                }
              }}>
              <div style={{
                backgroundImage: `url("${item.image}")`,
                height: "450px",
                backgroundPosition: "70% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "relative",
                border: "2px solid #333",
                borderRadius: "0px",
                transition: "all 0.5s ease"
              }} />

              <div style={{
                marginTop: "15px",
                color: "#ffffffff",
                textAlign: "left",
                fontSize: "1.1rem",
                letterSpacing: "1px",
                fontFamily: "'Courier New', Courier, monospace",
                textTransform: "uppercase"
              }}>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
