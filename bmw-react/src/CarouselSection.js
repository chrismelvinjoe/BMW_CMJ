import React, { useState, useRef, useEffect } from "react";
import './BMWM3.css';

function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [headerFont, setHeaderFont] = useState("'Nose Transport ThinDot', sans-serif");
  const carouselRef = useRef(null);

  const carouselItems = [
    { src: "/assets/videos/BMWmultiLogo.mp4", title: "Evolution of the Emblem", description: "Tracing the heritage of the iconic roundel", link: "https://open.spotify.com/playlist/402ISOrawOnr8XSVxaTtbh" },
    { src: "/assets/videos/BMW tunnel.mp4", title: "Underground Symphony", description: "The acoustics of pure performance", link: "https://open.spotify.com/playlist/25CW1MLBXrNNhPthpwZw7v" },
    { src: "/assets/videos/NeueKlasse.mp4", title: "Vision Neue Klasse", description: "A glimpse into a purely electric future", link: "https://open.spotify.com/playlist/5kalJ2Fv3bHv2gjhjUREXk" },
    { src: "/assets/videos/RedElectro.mp4", title: "Luminescent Dynamics", description: "Electrifying power in a stunning finish", link: "https://open.spotify.com/playlist/2AErqtgkrYBBQFydYrpObE" },
    { src: "/assets/videos/BMW cut's.mp4", title: "Cinematic Cuts", description: "Precision engineering caught on camera", link: "https://open.spotify.com/playlist/4z6vnWRMyVYog3OdIir7D0" },
    { src: "/assets/videos/BMWM Drift.mp4", title: "M-Power Drift", description: "Controlling chaos with sheer driving pleasure", link: "https://open.spotify.com/playlist/17A2dpiwTt19Txd2UNSLp1" },
    { src: "/assets/videos/BMW M3.mp4", title: "The M3 Blueprint", description: "Foundations of Bavarian track dominance", link: "https://open.spotify.com/playlist/6gM6zOIQ3p2vkXyxiSgPiF" },
  ];

  const [visibleCount, setVisibleCount] = useState(window.innerWidth < 700 ? 1 : 2.5);
  const stepPercent = 100 / carouselItems.length;
  const maxIndex = Math.max(0, carouselItems.length - visibleCount);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 7 ? 2 : 4);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= maxIndex) {
        setIsTransitionEnabled(false);

        setTimeout(() => setIsTransitionEnabled(true), 50);
        return 0;
      }
      setIsTransitionEnabled(true);
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        setIsTransitionEnabled(false);

        setTimeout(() => setIsTransitionEnabled(true), 50);
        return maxIndex;
      }
      setIsTransitionEnabled(true);
      return prevIndex - 1;
    });
  };

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(id);
  }, [isPaused, maxIndex]);

  return (
    <div style={{
      backgroundColor: "#000000",
      padding: visibleCount === 1 ? "60px 20px" : "100px 20px",
      position: "relative",
      marginTop: "10px",
      overflow: "hidden"
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="podcast-grid">
          <div style={{
            padding: "40px 0"
          }}>
            <h2
              onMouseEnter={() => setHeaderFont("'Nose Transport RegularDot', sans-serif")}
              onMouseLeave={() => setHeaderFont("'Nose Transport ThinDot', sans-serif")}
              onMouseDown={() => setHeaderFont("'Nose Transport RegularDot', sans-serif")}
              onMouseUp={() => setHeaderFont("'Nose Transport RegularDot', sans-serif")}
              style={{
                color: "#ffffffff ",
                textShadow: "4px 4px 6px #ffffffff",
                fontFamily: headerFont,
                fontSize: "5rem",
                marginBottom: "20px",
                fontWeight: "normal",
                fontStyle: "normal",
                lineHeight: "1.1",
                transition: "font-family 0.2s ease",
                cursor: "pointer"
              }}>
              THE BMW PODCAST:<br />
              CHANGING LANES
            </h2>

            <p
              onMouseEnter={() => setHeaderFont("'Nose Transport RegularDot', sans-serif")}
              onMouseLeave={() => setHeaderFont("'Nose Transport ThinDot', sans-serif")}
              onMouseDown={() => setHeaderFont("'Nose Transport RegularDot', sans-serif")}
              onMouseUp={() => setHeaderFont("'Nose Transport RegularDot', sans-serif")}
              style={{
                color: "#cccccc",
                fontSize: "1.2rem",
                lineHeight: "1.8",
                marginBottom: "35px",
                transition: "font-family 0.2s ease",
                fontFamily: headerFont,
              }}>
              Discover the latest insights on sustainability, innovation, technology, and mobility.
              Join us as we explore the future of driving and the stories behind BMW's continued evolution.
            </p>

            <button style={{
              backgroundColor: "transparent",
              border: "2px solid white",
              color: "white",
              padding: "12px 30px",
              fontSize: "1rem",
              cursor: "pointer",
              fontFamily: "'Chiroto', sans-serif",
              fontWeight: "500",
              transition: "all 0.3s ease"
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "black";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "white";
              }}
              onClick={() => window.open('https://open.spotify.com/user/bmw?si=aa435384ba984316&nd=1&dlsi=461bace32cd5481d', '_blank', 'noopener,noreferrer')}
            >
              Listen now
            </button>
          </div>

          <div className="podcast-carousel-container">
            <div
              ref={carouselRef}
              className="podcast-carousel-track"
              style={{
                display: "flex",
                transform: `translateX(-${currentIndex * stepPercent}%)`,
                transition: isTransitionEnabled ? "transform 0.5s ease-in-out" : "none",
                width: `${(carouselItems.length * 100) / visibleCount}%`,
                overflow: "hidden"
              }}
            >
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  style={{
                    width: `${100 / carouselItems.length}%`,
                    padding: "0 5px",
                    boxSizing: "border-box",
                    flexShrink: 0
                  }}
                >
                  <div style={{
                    borderRadius: "0px",
                    overflow: "hidden",
                    cursor: "pointer",
                    height: "100%",
                    backgroundColor: "#000",
                    transition: "all 0.3s ease"
                  }}
                    onMouseEnter={() => {
                      setIsPaused(true);
                    }}
                    onMouseLeave={() => {
                      setIsPaused(false);
                    }}
                    onClick={() => {
                      if (item.link) {
                        window.open(item.link, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    <div style={{ position: "relative", width: "100%", aspectRatio: "2 / 3", backgroundColor: "#000" }}>
                      {item.src.toLowerCase().match(/\.(jpeg|jpg|gif|png)$/) ? (
                        <img
                          src={item.src}
                          alt={item.title}
                          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                      ) : (
                        <video
                          src={item.src}
                          muted
                          playsInline
                          preload="metadata"
                          loop
                          autoPlay
                          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                      )}
                    </div>

                    <div style={{
                      padding: "20px",
                      backgroundColor: "#000000"
                    }}>
                      <h3
                        onMouseEnter={() => setHeaderFont("'Nose Transport RegularDot', sans-serif")}
                        onMouseLeave={() => setHeaderFont("'Nose Transport ThinDot', sans-serif")}
                        onMouseDown={() => setHeaderFont("'Nose Transport RegularDot', sans-serif")}
                        onMouseUp={() => setHeaderFont("'Nose Transport RegularDot', sans-serif")}
                        style={{
                          color: "white",
                          fontSize: "1.6rem",
                          margin: "0 0 8px 0",
                          fontFamily: headerFont,
                          fontWeight: "250"
                        }}>
                        {item.title}
                      </h3>
                      <p
                        onMouseEnter={() => setHeaderFont("'Nose Transport RegularDot', sans-serif")}
                        onMouseLeave={() => setHeaderFont("'Nose Transport ThinDot', sans-serif")}
                        onMouseDown={() => setHeaderFont("'Nose Transport RegularDot', sans-serif")}
                        onMouseUp={() => setHeaderFont("'Nose Transport RegularDot', sans-serif")}
                        style={{
                          color: "#cccccc",
                          fontSize: "1.2rem",
                          margin: 0,
                          lineHeight: "1.4",
                          fontFamily: "'Nose Transport RegularDot', sans-serif",
                        }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="podcast-nav-controls">
              <button
                onClick={prevSlide}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: "white",
                  color: "black",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 10px #000000"
                }}
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
              >
                ‹
              </button>

              <button
                onClick={nextSlide}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: "white",
                  color: "black",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 10px #000000"
                }}
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
              >
                ›
              </button>
            </div>
          </div>
        </div>

        
        <div className="m3-gallery-accordion-section" style={{ marginTop: "80px" }}>
          <div className="m3-gallery-accordion">
            <div className="accordion-panel">
              <img src="/assets/images/BMW E30 M3EOD.jpg" alt="BMW E30 M3 EOD" />
            </div>
            <div className="accordion-panel">
              <img src="/assets/images/BMW M3(2).jpg" alt="BMW M3 2" />
            </div>
            <div className="accordion-panel">
              <img src="/assets/images/BMW M3light.jpg" alt="BMW M3 Light" />
            </div>
            <div className="accordion-panel">
              <img src="/assets/images/BMW M3light(1).jpg" alt="BMW M3 Light 2" />
            </div>
            <div className="accordion-panel">
              <img src="/assets/images/BMW M3(3).jpg" alt="BMW M3 3" />
            </div>
            <div className="accordion-panel">
              <img src="/assets/images/BMW M3(1).jpg" alt="BMW M3 1" />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default CarouselSection;
