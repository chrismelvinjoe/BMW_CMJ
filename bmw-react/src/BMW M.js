import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

function BMWM() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const m4gtImages = [
    "/assets/images/BMWM4GT(1).jpg", "/assets/images/BMWM4GT(2).jpg", "/assets/images/BMWM4GT(3).jpg", "/assets/images/BMWM4GT(4).jpg", "/assets/images/BMWM4GT(5).jpg",
    "/assets/images/BMWM4GT(6).jpg", "/assets/images/BMWM4GT(7).jpg", "/assets/images/BMWM4GT(8).jpg"
  ];

  const [visibleCount, setVisibleCount] = useState(window.innerWidth < 900 ? 1 : 2);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 900 ? 1 : 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= m4gtImages.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? m4gtImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

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
        <div className="m4gt-section">
          <div className="m4gt-container">
            <div
              className="m4gt-slider-wrapper"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="m4gt-slider-track" style={{
                transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 900 ? 1 : 2))}%)`,
                width: `${(m4gtImages.length * 100) / (window.innerWidth < 900 ? 1 : 2)}%`
              }}>
                {m4gtImages.map((img, idx) => (
                  <div key={idx} className="m4gt-slide">
                    <img src={img} alt={`BMW M4 GT ${idx}`} />
                  </div>
                ))}
              </div>
            </div>

            <div className="m4gt-info-content">
              <h2 className="m4gt-evo-title">THE BMW M4 GT3 EVO</h2>
              <h3 className="m4gt-racing-title">RACING PERFECTION</h3>
              <div className="m4gt-description-block">
                <div className="m4gt-highlight-box">
                  <p>
                    The M4 GT3 EVO represents the pinnacle of M Motorsport engineering.
                    Developed to dominate endurance circuits worldwide with a race-tuned
                    precision chassis and optimized aero efficiency.
                  </p>
                </div>

                <div className="m4gt-specs-grid">
                  <div className="spec-item"><span className="spec-label">[SYS_ID]:</span> S58_3.0L_I6</div>
                  <div className="spec-item"><span className="spec-label">[POWER]:</span> 590_HP</div>
                  <div className="spec-item"><span className="spec-label">[WEIGHT]:</span> 1,300_KG</div>
                  <div className="spec-item"><span className="spec-label">[TRANS]:</span> 6_SPD_SEQ</div>
                  <div className="spec-item full-width">
                    <span className="spec-label-red">[AERO]:</span> EVO_HIGH_DOWNFORCE_V3
                  </div>
                  <div className="spec-item full-width">
                    <span className="spec-status">[STATUS]:</span> TRACK_VALIDATION_ACTIVE
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="m4gt-controls">
            <button
              onClick={prevSlide}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="m4gt-nav-btn"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="m4gt-nav-btn"
            >
              ›
            </button>
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
