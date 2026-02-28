import React, { useRef } from "react";

function VideoTile({ src, poster, title, subtitle }) {
  const ref = useRef(null);

  const play = () => {
    const el = ref.current;
    if (!el) return;
    try {
      el.currentTime = 0;
      const p = el.play();
      if (p && typeof p.then === "function") p.catch(() => {});
    } catch {}
  };

  const pause = () => {
    const el = ref.current;
    if (!el) return;
    try {
      el.pause();
      el.currentTime = 0;
    } catch {}
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
        <h3 style={{ color: "white", fontSize: "1.2rem", margin: 0 }}>{title}</h3>
        {subtitle && (
          <p style={{ color: "#cccccc", fontSize: ".95rem", marginTop: 6 }}>{subtitle}</p>
        )}
      </div>
    </div>
  );
}

function BMWShowcase() {
  const tiles = [
    { src: "/assets/videos/bmwM4.mp4", title: "BMW Hidden Features", subtitle: "Discover clever functions in your BMW." },
    { src: "/assets/videos/bmwM5.mp4", title: "The Heart of Joy", subtitle: "Redefining driving pleasure." }
  ];

  return (
    <div style={{ backgroundColor: "black", padding: "60px 20px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <h2
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: 40,
            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
          }}
        >
          BMW Showcase
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 30
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
