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
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up or near top
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`nav ${menuOpen ? "open" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "transparent",
        padding: "16px 20px",
        transform: hidden ? "translateY(-110%)" : "translateY(0)",
        transition: "transform 200ms ease"
      }}
    >
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
          {/* Left cluster (logo + slogan stay on the left) */}
          <li>
            <a href="/" style={{ display: "inline-flex", alignItems: "center" }}>
              <img src="bmw logo.png" alt="BMW logo" height="35" width="65" />
            </a>
          </li>
          <li
            className="slogan"
            style={{
              color: "#e5e5e5",
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

          {/* Right-side links (pushed to the far right) */}
          <li className="link" style={{ marginLeft: "auto" }}>
            <a href="/" style={{ color: "#e5e5e5", textDecoration: "none", fontFamily: fontStack, fontWeight: 250, fontSize: 18 }}>Home</a>
          </li>
          <li className="link">
            <a href="/electric" style={{ color: "#e5e5e5", textDecoration: "none", fontFamily: fontStack, fontWeight: 250, fontSize: 18 }}>Electric</a>
          </li>
          <li className="link">
            <a href="/service" style={{ color: "#e5e5e5", textDecoration: "none", fontFamily: fontStack, fontWeight: 250, fontSize: 18 }}>Service</a>
          </li>
          <li className="link">
            <a href="/models" style={{ color: "#e5e5e5", textDecoration: "none", fontFamily: fontStack, fontWeight: 100, fontSize: 18 }}>Models</a>
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

          {/* Hamburger (CSS controls visibility on small screens). Dropdown removed per request */}
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
    </nav>
  );
}

export default Navbar;
