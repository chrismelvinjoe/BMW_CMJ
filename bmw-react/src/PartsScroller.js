import React, { useState } from "react";

function PartsScroller() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const button2Data = [
    { img: "/assets/images/bmw brake disc.jpg", alt: "BMW brake disc", label: "Brake disc" },
    { img: "/assets/images/bmw wiper blade.jpg", alt: "BMW wiper blade", label: "Wiper blade" },
    { img: "/assets/images/bmw spark plug.jpg", alt: "BMW spark plug", label: "Spark plug" },
    { img: "/assets/images/bmw battery.jpg", alt: "BMW battery", label: "Battery" },
    { img: "/assets/images/bmw air filter.jpg", alt: "BMW air filter", label: "Air filter" }
  ];

  const turboHoverStyle = {
    backgroundImage: 'url("/assets/images/turbo.png")',
    backgroundPosition: "center",
    backgroundSize: "55%",
    backgroundRepeat: "no-repeat",
    color: "transparent",
    border: "2px solid transparent"
  };

  return (
    <div style={{ backgroundColor: "black", padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ 
          color: "white", 
          textAlign: "center", 
          fontSize: "2.5rem", 
          marginBottom: "40px",
          fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
        }}>
          GENUINE PARTS
        </h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "20px",
          marginTop: "40px"
        }}>
          {button2Data.map((item, idx) => (
            <div key={item.label} style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "10px",
              overflow: "hidden",
              transition: "transform 0.3s ease",
              cursor: "pointer"
            }} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
               onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
              <img 
                src={item.img} 
                alt={item.alt} 
                style={{ 
                  width: "100%", 
                  height: "200px",
                  objectFit: "cover"
                }} 
              />
              <div style={{ padding: "15px" }}>
                <button
                  className="button button2"
                  style={hoveredButton === idx ? turboHoverStyle : {}}
                  onMouseEnter={() => setHoveredButton(idx)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  {item.label}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartsScroller; 