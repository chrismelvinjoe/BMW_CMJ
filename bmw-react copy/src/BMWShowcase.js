import React, { useRef } from "react";

function VideoTile({ src, poster, title, subtitle }) {
  const ref = useRef(null);

  const play = () => {
    const el = ref.current;
    if (!el) return;
    try {
      el.currentTime = 0;
      const p = el.play();
      if (p && typeof p.then === "function") p.catch(() => { });
    } catch { }
  };

  const pause = () => {
    const el = ref.current;
    if (!el) return;
    try {
      el.pause();
      el.currentTime = 0;
    } catch { }
  };

  return (
    <div
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocus={play}
      onBlur={pause}
      tabIndex={0}
      style={{
        backgroundColor: "rgb(0, 0, 0)",
        borderRadius: 0,
        overflow: "hidden",
        transition: "transform .25s ease, box-shadow .25s ease",
        cursor: "pointer"
      }}
      aria-label={title}
    >
      <div style={{ position: "relative", aspectRatio: "16 / 9" }}>
        <video
          ref={ref}
          src={src}
          poster={poster}
          muted
          playsInline
          preload="metadata"
          loop
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      <div style={{ padding: 16 }}>
        <h3 style={{
          color: "white",
          fontSize: "2rem",
          margin: 0,
          fontFamily: "'Nuqun', sans-serif",
          fontStyle: "normal",
          textTransform: "uppercase",

        }}>{title}</h3>
        {subtitle && (
          <p style={{
            color: "#ffffffff",
            fontSize: "1rem",
            marginTop: 6,
            fontFamily: "'Nuqun', sans-serif",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "3px"
          }}>{subtitle}</p>
        )}
      </div>
    </div>
  );
}

function BMWShowcase() {
  const tiles = [
    { src: "/assets/videos/bmwM4.mp4", title: "BMW M4 Dynamics", subtitle: "Uncompromising performance and athletic design." },
    { src: "/assets/videos/BMW Mcompetition.mp4", title: "BMW M Competition", subtitle: "The absolute pinnacle of driving dynamics." }
  ];

  return (
    <div style={{ backgroundColor: "black", padding: "100px 20px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <h2
          style={{
            color: "#ffffffff",
            textAlign: "center",
            fontSize: "5rem",
            marginBottom: 60,
            fontFamily: "'Nuqun', sans-serif",
            fontStyle: "normal",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          BMW Showcase
        </h2>

        <div
          className="responsive-grid grid-2-col"
          style={{
            gap: "40px"
          }}
        >
          {tiles.map((t) => (
            <VideoTile key={t.title} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BMWShowcase;
