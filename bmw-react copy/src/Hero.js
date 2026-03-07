import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [BMWMHover, setBMWMHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="image"
      style={{
        backgroundImage: 'url("/assets/images/R.gif")',
        backgroundColor: "#cccccc",
        height: "750px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        paddingTop: "80px"
      }}
    >
      <div className="text1">
        <button
          type="button"
          className="button btn-liquid-glass"
          style={BMWMHover ? {
            backgroundImage: 'url("/assets/images/BMW-M-logo.png")',
            backgroundPosition: "center",
            backgroundSize: "150%",
            backgroundRepeat: "no-repeat",
            color: "transparent",
            border: "2px solid transparent"
          } : {}}
          onMouseEnter={() => setBMWMHover(true)}
          onMouseLeave={() => setBMWMHover(false)}
          onClick={() => navigate('/BMWM')}
        >
          
          <svg style={{ display: "none" }}>
            <filter id="hero-lg-dist" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise" />
              <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
              <feDisplacementMap in="SourceGraphic" in2="blurred" scale="50" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>

          
          <div style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            borderRadius: "inherit",
            overflow: "hidden"
          }}>
            
            <div style={{
              position: "absolute",
              inset: 0,
              backdropFilter: "blur(2px)",
              filter: "url(#hero-lg-dist)",
              isolation: "isolate",
              opacity: BMWMHover ? 0.5 : 1, 
              transition: "opacity 0.4s ease"
            }}></div>
          </div>
        </button>

        <h1 style={{
          fontSize: "20px",
          fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
          fontWeight: "300",
          letterSpacing: "8px",
          color: "#e6e6e6",
          marginTop: "10px",
          textTransform: "uppercase"
        }}>Bavarian Motor Works</h1>
        <h1 style={{
          fontSize: "65px",
          fontFamily: "'Mirano', sans-serif",
          fontWeight: "normal",
          letterSpacing: "15px",
          textTransform: "uppercase"
        }}>BMW</h1>
      </div>
    </div>
  );
}

export default Hero;
