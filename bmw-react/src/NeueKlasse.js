import React, { useEffect } from 'react';
import './NeueKlasse.css';

const NeueKlasse = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="neue-page">
            <div className="lightning-field">
                {[...Array(15)].map((_, i) => (
                    <div key={i} className="spark" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}vh`,
                        animationDelay: `${Math.random() * 5}s`
                    }}></div>
                ))}
            </div>
            
            <div className="neue-hero">
                <img
                    src="/assets/images/BMW%20Neue%20Klasse.jpg"
                    alt="BMW Neue Klasse"
                    className="neue-hero-img"
                />
                <div className="neue-hero-overlay">
                    <div className="neue-hero-label">
                        <span></span> Neue Klasse
                    </div>
                    <h1 className="neue-hero-title">The Next Chapter</h1>
                    <p className="neue-hero-subtitle">
                        BMW's bold leap into the future of mobility. The Neue Klasse redefines what it means to be the Ultimate Driving Machine in the electric era.
                    </p>
                </div>
            </div>

            
            <div className="neue-content">
                
                <div className="neue-section">
                    <div className="neue-section-label">
                        <span></span> Vision
                    </div>
                    <h2>A New Era Begins</h2>
                    <p>
                        The Neue Klasse represents the most significant transformation in BMW's history. Built on an entirely new architecture, it sets the benchmark for electric performance, digital innovation, and sustainable luxury.
                    </p>
                    <p>
                        Production begins with an unwavering commitment to BMW's core promise—sheer driving pleasure—reimagined for a new generation of drivers.
                    </p>
                </div>

                
                <div className="neue-stats">
                    <div className="neue-stat">
                        <span className="neue-stat-value">800V</span>
                        <span className="neue-stat-label">Architecture</span>
                    </div>
                    <div className="neue-stat">
                        <span className="neue-stat-value">30%</span>
                        <span className="neue-stat-label">More Range</span>
                    </div>
                    <div className="neue-stat">
                        <span className="neue-stat-value">Gen6</span>
                        <span className="neue-stat-label">Battery Cells</span>
                    </div>
                    <div className="neue-stat">
                        <span className="neue-stat-value">2025</span>
                        <span className="neue-stat-label">Production Start</span>
                    </div>
                </div>

                
                <div className="neue-section">
                    <div className="neue-section-label">
                        <span></span> Innovation
                    </div>
                    <h2>Defining Tomorrow</h2>

                    <div className="neue-media-gallery">
                        <div className="neue-media-item video-item">
                            <video
                                src="/assets/videos/BMW NeueKlasseX.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="neue-video"
                            />
                        </div>
                        <div className="neue-media-item">
                            <img src="/assets/images/BMWNeue Klasse(1).jpg" alt="BMW Neue Klasse 1" className="neue-media-img" />
                        </div>
                        <div className="neue-media-item">
                            <img src="/assets/images/BMWNeue Klasse(2).jpg" alt="BMW Neue Klasse 2" className="neue-media-img" />
                        </div>
                        <div className="neue-media-item">
                            <img src="/assets/images/BMWNeue Klasse(3).jpg" alt="BMW Neue Klasse 3" className="neue-media-img" />
                        </div>
                        <div className="neue-media-item">
                            <img src="/assets/images/BMW neueklasseX.jpg" alt="BMW Neue Klasse 4" className="neue-media-img" />
                        </div>
                    </div>
                </div>

                
                <div className="neue-section">
                    <div className="neue-section-label">
                        <span></span> Design Language
                    </div>
                    <h2>Neue Klasse Production Begins</h2>
                    <p>
                        A reinterpretation of BMW's iconic design cues for the electric age. The illuminated kidney grille, monolithic body surfaces, and slim lighting elements create a presence that is unmistakably BMW, yet entirely new.
                    </p>
                    <p>
                        Every line is drawn with purpose. Reduced complexity reveals the essence of driving, while advanced aerodynamics push the boundaries of efficiency.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NeueKlasse;
