import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const q = searchQuery.toLowerCase();


      if (q.includes('rac') || q.includes('gt') || q.includes('motor')) {
        navigate('/racing');
      }

      else if (q === 'm' || q.includes('bmw m') || q.includes('perf')) {
        navigate('/BMWM');
      }

      else if (q.includes('m3')) {
        navigate('/bmw-m3');
      }

      else if (q.includes('neue') || q.includes('klasse') || q.includes('elec') || q.includes('ev') || q.includes('future')) {
        navigate('/neue-klasse');
      }

      else if (q.includes('garmisch') || q.includes('concept') || q.includes('bertone') || q.includes('gold')) {
        navigate('/garmisch');
      }

      else if (q.includes('evol') || q.includes('hist') || q.includes('past')) {
        navigate('/evolution');
      }

      else if (q.includes('inter') || q.includes('inside') || q.includes('cabin') || q.includes('leather')) {
        navigate('/interior');
      }

      else if (q.includes('model') || q.includes('all') || q.includes('car') || q.includes('sedan') || q.includes('suv')) {
        navigate('/models');
      }

      else if (q.includes('home') || q.includes('main')) {
        navigate('/');
      }

      else if (q.trim() !== '') {
        navigate('/models');
      }

      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  useEffect(() => {
    let lastY = window.scrollY || 0;
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (y > lastY && y > 20) {
        setHidden(true);
        setMenuOpen(false);
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
        className={`nav glass-container ${menuOpen ? "menu-open" : ""}`}
        style={{
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

        <div className="glass-content">
          <header>
            <ul className="menu">
              <li>
                <a href="/" style={{ display: "inline-flex", alignItems: "center" }}>
                  <img src="/assets/images/bmw logo.png" alt="BMW logo" height="35" width="65" />
                </a>
              </li>
              <li className="slogan">The Ultimate Driving Machine</li>

              <div className="links-container">
                <li className="link">
                  <a href="/">Home</a>
                </li>
                <li className="link">
                  <a href="/neue-klasse">Electric</a>
                </li>
                <li className="link">
                  <a href="/models">Models</a>
                </li>
                <li className="link">
                  <a href="/evolution">Evolution</a>
                </li>
              </div>

              <button
                aria-label="Search"
                className="search-btn"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="7" stroke="#e5e5e5" strokeWidth="2" />
                  <line x1="16.5" y1="16.5" x2="22" y2="22" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              {searchOpen && (
                <div style={{ display: "flex", alignItems: "center", marginLeft: "10px", animation: "fadeIn 0.3s ease" }}>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearch}
                    placeholder="Search 'racing', 'm3'..."
                    autoFocus
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: "20px",
                      padding: "8px 16px",
                      color: "white",
                      outline: "none",
                      width: "180px",
                      fontFamily: "'Courier New', Courier, monospace",
                      fontSize: "0.9rem",
                      backdropFilter: "blur(4px)"
                    }}
                  />
                </div>
              )}

              <button
                aria-label="Menu"
                className="menu-btn"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {menuOpen ? (
                    <path d="M18 6L6 18M6 6l12 12" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" />
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" />
                      <line x1="3" y1="12" x2="21" y2="12" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" />
                      <line x1="3" y1="18" x2="21" y2="18" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" />
                    </>
                  )}
                </svg>
              </button>
            </ul>
          </header>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

