import React, { useEffect, useState } from "react";

function Navbar() {
  const fontStack = "Inter, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY || 0;
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (y > lastY && y > 20) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <svg style={{ display: "none" }}>
        <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
          <feDisplacementMap in="SourceGraphic" in2="blurred" scale="70" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      
      <nav
        className={`nav glass-container`}
        style={{
          position: "fixed",
          top: 8,
          left: 0,
          right: 0,
          zIndex: 999,
          overflow: "hidden",
          boxShadow: "0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)",
          transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1)",
          transform: hidden ? "translateY(-110%)" : "translateY(10px)"
        }}
      >
        <div className="glass-filter" style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backdropFilter: "blur(0px)",
          filter: "url(#lg-dist)",
          isolation: "isolate"
        }}></div>
        
        <div className="glass-overlay" style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}></div>
        
        <div className="glass-specular" style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          borderRadius: "inherit",
          overflow: "hidden",
          boxShadow: "inset 0 0 0 rgba(255, 255, 255, 0.75), inset 0 0 0 rgba(255, 255, 255, 0.75)"
        }}></div>
        
        <div className="glass-content" style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "1rem 1.5rem 0.9rem"
        }}>
      <header>
        <ul
          className="menu"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            margin: 0,
            padding: 0,
            listStyle: "none",
            borderBottom: "none",
            fontFamily: fontStack
          }}
        >
          <li>
            <a href="/" style={{ display: "inline-flex", alignItems: "center" }}>
              <img src="/assets/images/bmw logo.png" alt="BMW logo" height="35" width="65" />
            </a>
          </li>
          <li
            className="slogan"
            style={{
              color: "#ffffffff",
              fontSize: 18,
              fontWeight: 250,
              whiteSpace: "nowrap",
              fontFamily: fontStack,
              letterSpacing: 0.1,
              flex: "0 0 auto"
            }}
          >
            The Ultimate Driving Machine
          </li>

          <li className="link" style={{ marginLeft: "550px" }}>
            <a href="/" style={{ color: "#ffffffff", textDecoration: "none", fontFamily: fontStack, fontWeight: 250, fontSize: 18 }}>Home</a>
          </li>
          <li className="link">
            <a href="/electric" style={{ color: "#ffffffff", textDecoration: "none", fontFamily: fontStack, fontWeight: 250, fontSize: 18 }}>Electric</a>
          </li>
          <li className="link">
            <a href="/service" style={{ color: "#ffffffff", textDecoration: "none", fontFamily: fontStack, fontWeight: 250, fontSize: 18 }}>Service</a>
          </li>
          <li className="link">
            <a href="/models" style={{ color: "#ffffffff", textDecoration: "none", fontFamily: fontStack, fontWeight: 100, fontSize: 18 }}>Models</a>
          </li>
          <li>
            <button
              aria-label="Search"
              className="search-btn"
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center"
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="7" stroke="#e5e5e5" strokeWidth="2" />
                <line x1="16.5" y1="16.5" x2="22" y2="22" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </li>

          <li>
            <button
              aria-label="Menu"
              className="menu-btn"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              style={{
                background: "transparent",
                border: "none",
                padding: 6,
                cursor: "pointer",
                alignItems: "center"
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="3" y1="6" x2="21" y2="6" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="12" x2="21" y2="12" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="18" x2="21" y2="18" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </li>
        </ul>
      </header>
    </div>
    </nav>
    </>
  );
};

export default Navbar;
