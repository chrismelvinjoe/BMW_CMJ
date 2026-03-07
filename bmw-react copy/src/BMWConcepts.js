import React from "react";
import { useNavigate } from "react-router-dom";

function BMWConcepts() {
  const navigate = useNavigate();
  const newsItems = [
    {
      title: "BMW M3 Celebrates 50 Years",
      description: "Sheer driving pleasure across seven generations of the iconic M3.",
      image: "/assets/images/BMW E30 M3.jpg",
      link: "/bmw-m3"
    },
    {
      title: "Neue Klasse Production Begins",
      description: "BMW Group launches series production of electric engines for Neue Klasse.",
      image: "/assets/images/BMW Neue Klasse.jpg",
      link: "/neue-klasse"
    },
    {
      title: "The Garmisch Concept",
      description: "The BMW Garmisch is a striking 1970 concept car designed by Marcello Gandini.",
      image: "/assets/images/BMW Garmisch.jpg",
      link: "/garmisch"
    }
  ];

  return (
    <div style={{ backgroundColor: "black", padding: "100px 20px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <h2 style={{
          color: "#e0e0e0",
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "60px",
          fontFamily: "'Century Gothic', 'Trebuchet MS', sans-serif",
          fontWeight: "300",
          letterSpacing: "10px",
          textTransform: "uppercase"
        }}>
          BMW Concepts
        </h2>

        <div className="responsive-grid grid-3-col" style={{
          gap: "40px",
          marginTop: "40px"
        }}>
          {newsItems.map((item, index) => (
            <div key={index} style={{
              backgroundColor: "transparent",
              borderRadius: "0px",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer"
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }} onClick={() => {
              if (item.link) {
                navigate(item.link);
              }
            }}>
              <div style={{
                backgroundImage: `url("${item.image}")`,
                height: "300px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "relative",
                border: "2px solid #333",
                borderRadius: "0px",
                marginBottom: "20px"
              }}>
              </div>

              <div style={{
                padding: "0px 20px 20px 20px",
                backgroundColor: "transparent"
              }}>
                <h3 style={{
                  color: "white",
                  fontSize: "1.2rem",
                  marginBottom: "10px",
                  fontFamily: "'Century Gothic', sans-serif",
                  fontWeight: "bold",
                  letterSpacing: "3px",
                  textTransform: "uppercase"
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: "#aaaaaa",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  fontStyle: "normal",
                  fontFamily: "'Century Gothic', 'Trebuchet MS', sans-serif",
                }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BMWConcepts;