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

  return (
    <article>
      <div className="m-sport-stripe"></div>
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
              <h1 className="article-title">BMW M – Born from Motorsport</h1>
            </div>
            <div className="article-body">
              <p>
                From the legendary M1 supercar to today's M3, M4, and M5 models, BMW M continues 
                to push the boundaries of automotive performance. Each M vehicle combines 
                race-bred technology with everyday usability, delivering an uncompromising 
                driving experience that defines the essence of "The Ultimate Driving Machine."
              </p>
              <p>
                Experience pure adrenaline with BMW M's signature features: high-revving engines, 
                precision-tuned chassis, aggressive aerodynamics, and the iconic M badge that 
                represents 50+ years of motorsport excellence.
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
                  fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  textShadow: "0 0 30px rgba(25, 118, 210, 0.3)"
                }}>
                  THE BMW M4 GT3 EVO:
                </h2>
                <h3 style={{
                  color: "#ffffff",
                  fontSize: "2.4rem",
                  fontWeight: "700",
                  margin: "0 0 25px 0",
                  fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.2)"
                }}>
                  RACING PERFECTION
                </h3>
                <p style={{
                  color: "#e0e0e0",
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                  margin: "0 0 25px 0",
                  fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
                  fontWeight: "300",
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)"
                }}>
                  Experience the ultimate evolution of motorsport engineering with the BMW M4 GT3 EVO. Built for professional racing, this track-focused machine delivers uncompromising performance with advanced aerodynamics, lightweight construction, and race-proven technology that dominates circuits worldwide.
                </p>
                <div style={{
                  padding: "20px",
                  color: "#ffffff",
                  fontSize: "1rem",
                  fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
                  lineHeight: "1.6",
                  fontWeight: "400"
                }}>
                  <div style={{ marginBottom: "8px" }}>
                    <strong style={{ color: "#42a5f5", fontWeight: "600" }}>Engine:</strong> <span style={{ color: "#ffffff" }}>3.0L Twin-Turbo S58 I6</span> • <strong style={{ color: "#42a5f5", fontWeight: "600" }}>Power:</strong> <span style={{ color: "#ffffff" }}>590 HP</span>
                  </div>
                  <div style={{ marginBottom: "8px" }}>
                    <strong style={{ color: "#42a5f5", fontWeight: "600" }}>Weight:</strong> <span style={{ color: "#ffffff" }}>1,300 kg</span> • <strong style={{ color: "#42a5f5", fontWeight: "600" }}>Transmission:</strong> <span style={{ color: "#ffffff" }}>6-Speed Sequential</span>
                  </div>
                  <div>
                    <strong style={{ color: "#42a5f5", fontWeight: "600" }}>Aerodynamics:</strong> <span style={{ color: "#ffffff" }}>Carbon Fiber Body Kit</span> • <strong style={{ color: "#42a5f5", fontWeight: "600" }}>Top Speed:</strong> <span style={{ color: "#ffffff" }}>300+ km/h</span>
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
                  Seamless intelligence also means that your car anticipates your next move.
                </p>
                <p>
                  <strong>BMW M NEXT</strong> represents the future of high-performance electric mobility, combining 
                  BMW M's motorsport DNA with cutting-edge electric technology. This revolutionary concept showcases 
                  how pure driving emotion and sustainable performance can coexist, delivering instant torque and 
                  zero emissions without compromising the thrilling M experience.
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
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="rush-video">
          <div className="rush-text-top-left">United by Performance</div>
          <div className="rush-text-bottom-right">GEN M</div>
          <video 
            src="/assets/videos/The Rush.mp4" 
            autoPlay 
            muted 
            loop
            className="article-video"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </main>
    </article>
  );
}

export default BMWM;
