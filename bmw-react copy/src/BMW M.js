import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

function BMWM() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const m4gtImages = [
    "/assets/images/BMWM4GT(1).jpg", "/assets/images/BMWM4GT(2).jpg", "/assets/images/BMWM4GT(3).jpg", "/assets/images/BMWM4GT(4).jpg", "/assets/images/BMWM4GT(5).jpg",
    "/assets/images/BMWM4GT(6).jpg", "/assets/images/BMWM4GT(7).jpg", "/assets/images/BMWM4GT(8).jpg"
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2 >= m4gtImages.length ? 0 : prev + 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? m4gtImages.length - 2 : prev - 2));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2 >= m4gtImages.length ? 0 : prev + 2));
    }, 2000);
    return () => clearInterval(interval);
  }, [m4gtImages.length, isPaused]);

  const sparkColors = ["blue-light", "blue-dark", "red"];

  return (
    <article className="bmw-m-page">
      <div className="m-lightning-field">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`m-spark ${sparkColors[i % 3]}`} style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 20 - 10}vw`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}></div>
        ))}
      </div>
      <div className="m-sport-stripe" style={{
        height: "5px",
        width: "100%",
        background: "linear-gradient(to right, #0066cc 33.33%, #001240 33.33%, #001240 66.66%, #E21C26 66.66%)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 2000,
        opacity: 0.9
      }}></div>
      <Navbar />
      <main className="bmwm-article">
        <div className="article-container">
          <div className="video-section">
            <video
              src="/assets/videos/BMWM Airlines.mp4"
              autoPlay
              muted
              loop
              className="article-video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="content-section">
            <div className="article-header">
              <span className="article-tag">BMW MOTORSPORT</span>
              <h1 className="article-title">Born from Motorsport</h1>
            </div>
            <div className="article-body">
              <p>
                Welcome to BMW AIRLINES. Prepare for a high-intensity flight where performance
                knows no gravity. From the legendary M1 to the latest precision-engineered
                M-Series, we redefine the threshold of speed and agility.
              </p>
              <p>
                Engage "M-Flight Mode". Experience the uncompromising force of "The Ultimate
                Driving Machine" as it transitions from road to track with lethal efficiency.
              </p>
            </div>
          </div>
        </div>
        <div className="bmwm4gt">
          <div style={{
            backgroundColor: "#000",
            padding: "60px 20px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column"
          }}>
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                display: "flex",
                gap: "20px",
                marginBottom: "30px",
                alignSelf: "flex-start",
                marginLeft: "50px"
              }}>
              <div style={{
                width: "420px",
                height: "525px",
                overflow: "hidden",
              }}>
                <img
                  src={m4gtImages[currentIndex]}
                  alt="BMW M4 GT"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>

              <div style={{
                width: "420px",
                height: "525px",
                overflow: "hidden",
              }}>
                <img
                  src={m4gtImages[currentIndex + 1]}
                  alt="BMW M4 GT"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
              <div style={{
                maxWidth: "600px",
                marginTop: "20px",
                marginLeft: "20px"
              }}>
                <h2 style={{
                  background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontSize: "2.8rem",
                  fontWeight: "900",
                  margin: "0 0 15px 0",
                  fontFamily: "'Red Planet', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  textShadow: "0 0 30px rgba(25, 118, 210, 0.3)"
                }}>
                  THE BMW M4 GT3 EVO
                </h2>

                <h3 style={{
                  color: "#ffffff",
                  fontSize: "2rem",
                  fontWeight: "700",
                  margin: "0 0 25px 0",
                  fontFamily: "'Red Planet', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.2)"
                }}>
                  RACING PERFECTION
                </h3>
                <div style={{
                  padding: "10px",
                  color: "#ffffff",
                  fontSize: "1rem",
                  fontFamily: "'Corpta', sans-serif",
                  lineHeight: "1.6",
                  fontWeight: "400"
                }}>
                  <div style={{
                    padding: "20px",
                    fontFamily: "'Red Planet', sans-serif",
                    letterSpacing: "2px",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderLeft: "4px solid #0066cc",
                    marginBottom: "20px",
                    backdropFilter: "blur(10px)"
                  }}>
                    <p style={{ margin: 0, fontSize: "0.95rem", opacity: 0.9 }}>
                      The M4 GT3 EVO represents the pinnacle of M Motorsport engineering.
                      Developed to dominate endurance circuits worldwide with a race-tuned
                      precision chassis and optimized aero efficiency.
                    </p>
                  </div>

                  <div style={{
                    padding: "15px",
                    fontSize: "0.85rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    background: "rgba(0, 0, 0, 0.3)",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px"
                  }}>
                    <div><span style={{ color: "#0066cc" }}>[SYS_ID]:</span> S58_3.0L_I6</div>
                    <div><span style={{ color: "#0066cc" }}>[POWER]:</span> 590_HP</div>
                    <div><span style={{ color: "#0066cc" }}>[WEIGHT]:</span> 1,300_KG</div>
                    <div><span style={{ color: "#0066cc" }}>[TRANS]:</span> 6_SPD_SEQ</div>
                    <div style={{ gridColumn: "span 2", marginTop: "5px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "5px" }}>
                      <span style={{ color: "#E21C26" }}>[AERO]:</span> EVO_HIGH_DOWNFORCE_V3
                    </div>
                    <div style={{ gridColumn: "span 2" }}>
                      <span style={{ color: "#fff", opacity: 0.5 }}>[STATUS]:</span> TRACK_VALIDATION_ACTIVE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              display: "flex",
              gap: "20px",
              alignSelf: "flex-start",
              marginLeft: "715px"
            }}>
              <button
                onClick={prevSlide}
                onMouseEnter={(e) => {
                  setIsPaused(true);
                  e.currentTarget.style.transform = "scale(0.8)";
                  e.currentTarget.style.boxShadow = "0 4px 15px #000000";
                }}
                onMouseLeave={(e) => {
                  setIsPaused(false);
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 2px 10px #000000";
                }}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: "white",
                  color: "black",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "bold",
                  transition: "all 0.3s ease"
                }}
              >
                ‹
              </button>

              <button
                onClick={nextSlide}
                onMouseEnter={(e) => {
                  setIsPaused(true);
                  e.currentTarget.style.transform = "scale(0.8)";
                  e.currentTarget.style.boxShadow = "0 4px 15px #000000";
                }}
                onMouseLeave={(e) => {
                  setIsPaused(false);
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 2px 10px #000000";
                }}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: "white",
                  color: "black",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "bold",
                  transition: "all 0.3s ease"
                }}
              >
                ›
              </button>
            </div>
          </div>
        </div>
        <div className="BMWMNXT">
          <div className="bmwmnxt-container">
            <div className="bmwmnxt-content">
              <h2 className="bmwmnxt-title">IT KNOWS YOUR NEXT MOVE</h2>
              <div className="bmwmnxt-text">
                <p>
                  M NEXT represents the threshold of high-performance electric mobility.
                  Seamless intelligence means your car anticipates every apex and optimizes
                  power delivery before you even think of the move.
                </p>
              </div>
            </div>
            <div className="bmwmnxt-video">
              <video
                src="/assets/videos/BMWM Next.mp4"
                autoPlay i
                muted
                loop
                className="bmwmnxt-video-element"
              >
              </video>
            </div>
          </div>
        </div>
        <div className="rush-video">
          <video
            src="/assets/videos/The Rush.mp4"
            autoPlay
            muted
            loop
            className="article-video"
          >
          </video>
        </div>
      </main>
    </article>
  );
}

export default BMWM;
