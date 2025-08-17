import React from "react";

function NewsSection() {
  const newsItems = [
    {
      title: "BMW M3 Celebrates 50 Years",
      description: "Sheer driving pleasure across seven generations of the iconic M3.",
      image: "bmwM3.png",
      date: "2025"
    },
    {
      title: "Neue Klasse Production Begins",
      description: "BMW Group launches series production of electric engines for Neue Klasse.",
      image: "bmwM5.jpg",
      date: "2025"
    },
    {
      title: "BMW iX Sales Success",
      description: "BMW Group shows positive sales development in electric vehicles.",
      image: "bmwM8.jpg",
      date: "2025"
    }
  ];

  return (
    <div style={{ backgroundColor: "black", padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ 
          color: "white", 
          textAlign: "center", 
          fontSize: "2.5rem", 
          marginBottom: "40px",
          fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
        }}>
          LATEST NEWS
        </h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(3, 1fr)", 
          gap: "30px",
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
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 149, 255, 0.3)";
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              {/* Image Section - Separate */}
              <div style={{
                backgroundImage: `url("/${item.image}")`,
                height: "300px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "relative",
                border: "2px solid #333",
                borderRadius: "0px",
                marginBottom: "20px"
              }}>
                <div style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "rgba(0, 149, 255, 0.8)", 
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "15px",
                  fontSize: "0.8rem"
                }}>
                  {item.date}
                </div>
              </div>
              
              {/* Description Section - Separate and Under Image */}
              <div style={{ 
                padding: "0px 20px 20px 20px",
                backgroundColor: "transparent"
              }}>
                <h3 style={{ 
                  color: "white", 
                  fontSize: "1.3rem", 
                  marginBottom: "10px",
                  fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: "#cccccc", 
                  fontSize: "0.9rem",
                  lineHeight: "1.5"
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

export default NewsSection; 