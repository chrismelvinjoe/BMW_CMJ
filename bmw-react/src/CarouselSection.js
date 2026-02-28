import React, { useState, useRef, useEffect } from "react";

function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const carouselRef = useRef(null);

  const carouselItems = [
    { src: "/assets/videos/BMWmultiLogo.mp4", title: "BMW M2", description: "Compact high-performance coupe" },
    { src: "/assets/videos/NeueKlasse.mp4", title: "BMW M3 GTR", description: "Iconic racing pedigree" },
    { src: "/assets/videos/RedElectro.mp4", title: "BMW M4", description: "Precision and power" },
    { src: "/assets/videos/BMWShoot.mp4", title: "BMW M4 GT", description: "Track-focused dynamics" },
    { src: "/assets/videos/BMW tunnel.mp4", title: "BMW M5", description: "Executive performance sedan" },
    { src: "/assets/videos/Snow Drift.mp4", title: "BMW X", description: "Versatile performance SUV" }
  ];

  const visibleCount = 3;
  const stepPercent = 82 / visibleCount;
  const maxIndex = Math.max(0, carouselItems.length - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= maxIndex) {
        // jump back to start without transition
        setIsTransitionEnabled(false);
        setTimeout(() => setIsTransitionEnabled(true), 0);
        return 0;
      }
      setIsTransitionEnabled(true);
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        setIsTransitionEnabled(false);
        setTimeout(() => setIsTransitionEnabled(true), 0);
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
      padding: "60px 20px",
      position: "relative"
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Two Column Layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "0.4fr 1fr",
          gap: "50px",
          alignItems: "center"
        }}>
          {/* Left Column - Text Container */}
          <div style={{
            padding: "40px 0"
          }}>
            <h2 style={{
              color: "white",
              fontSize: "2.5rem",
              marginBottom: "20px",
              fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              fontWeight: "bold",
              lineHeight: "1.2"
            }}>
              THE BMW PODCAST:<br />
              CHANGING LANES
            </h2>
            
            <p style={{
              color: "#cccccc",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              marginBottom: "30px",
              fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
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
              fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
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
            >
              Listen now
            </button>
          </div>

          {/* Right Column - Carousel Container */}
          <div style={{
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Carousel Track */}
            <div 
              ref={carouselRef}
              style={{
                display: "flex",
                transform: `translateX(-${currentIndex * stepPercent}%)`,
                transition: isTransitionEnabled ? "transform 0.5s ease-in-out" : "none",
                width: `${carouselItems.length * 25}%`
              }}
            >
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  style={{
                    width: "25%",
                    padding: "0 15px",    
                    boxSizing: "border-box",
                    flexShrink: 0
                  }}
                >
                  <div style={{
                    borderRadius: "0px",
                    overflow: "hidden",
                    cursor: "pointer",
                    height: "100%"
                  }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  >
                    {/* Video Section (2:3 aspect ratio) */}
                    <div style={{ position: "relative", width: "100%", aspectRatio: "2 / 3", backgroundColor: "#000" }}>
                      <video
                        src={item.src}
                        muted
                        playsInline
                        preload="metadata"
                        loop
                        autoPlay
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div style={{
                      padding: "20px",
                      backgroundColor: "#000000"
                    }}>
                      <h3 style={{
                        color: "white",
                        fontSize: "1.1rem",
                        margin: "0 0 8px 0",
                        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        fontWeight: "600"
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        color: "#cccccc",
                        fontSize: "0.9rem",
                        margin: 0,
                        lineHeight: "1.4"
                      }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div style={{
              display: "flex",
              justifyContent: "right",
              gap: "15px",
              marginTop: "10px"
            }}>
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
      </div>
    </div>
  );
}

export default CarouselSection;
