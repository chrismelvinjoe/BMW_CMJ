import React, { useEffect } from 'react';
import './Interior.css';

const Interior = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="interior-page">
            
            <header className="interior-hero">
                <img
                    src="/assets/images/BMW interior.jpg"
                    alt="BMW Modern Interior"
                    className="interior-hero-img"
                />
                <div className="interior-hero-gradient"></div>
                <div className="interior-hero-overlay">
                    <div className="interior-hero-eyebrow">
                        <span></span> BMW Interior Design
                    </div>
                    <h1 className="interior-hero-title">
                        THE ART OF THE <em>COCKPIT</em>
                    </h1>
                    <p className="interior-hero-subtitle">
                        Where innovation meets sanctuary. Discover how BMW redefines the relationship
                        between driver, technology, and luxury through meticulously crafted spaces.
                    </p>
                </div>
            </header>

            <main className="interior-content">
                
                <section className="interior-intro">
                    <div className="interior-intro-text">
                        <h2>The Driver-Centric Revolution</h2>
                        <p>
                            At the core of every BMW interior is the "Fahrerorientierung" — a dedicated
                            focus on the driver. Every screen, button, and surface is angled to empower
                            the person behind the wheel, creating an intuitive bond between man and machine.
                        </p>
                        <p>
                            Today, that philosophy extends into the digital realm with the BMW Curved Display
                            and the latest iDrive system, blending physical craftsmanship with
                            world-class software.
                        </p>
                    </div>
                    <img
                        src="/assets/images/BMW Interior(3).jpg"
                        alt="Curved Display"
                        className="interior-intro-img"
                    />
                </section>

                
                <section className="interior-stats">
                    <div className="interior-stat">
                        <span className="interior-stat-value">Curved</span>
                        <span className="interior-stat-label">Display Architecture</span>
                    </div>
                    <div className="interior-stat">
                        <span className="interior-stat-value">Sustainable</span>
                        <span className="interior-stat-label">Veganza & Veranza</span>
                    </div>
                    <div className="interior-stat">
                        <span className="interior-stat-value">OS 9.0</span>
                        <span className="interior-stat-label">Digital Heartbeat</span>
                    </div>
                </section>

                
                <section className="interior-design">
                    <div className="interior-design-grid">
                        <div className="interior-design-card">
                            <img src="/assets/images/BMW Interior(2).jpg" alt="Ambient Lighting" />
                            <div className="interior-design-overlay">
                                <h4>Interaction Bar</h4>
                                <p>Dynamic ambient lighting that communicates with the driver through color and pulse.</p>
                            </div>
                        </div>
                        <div className="interior-design-card">
                            <img src="/assets/images/BMW Interior(4).jpg" alt="Craftsmanship" />
                            <div className="interior-design-overlay">
                                <h4>Crystal Elements</h4>
                                *   <p>Hand-crafted glass controls that add a jewelry-like precision to the cockpit.</p>
                            </div>
                        </div>
                        <div className="interior-design-card">
                            <img src="/assets/images/BMW Interior(5).jpg" alt="Materials" />
                            <div className="interior-design-overlay">
                                <h4>Sustainable Luxury</h4>
                                <p>Premium recycled materials that prove performance can be responsible.</p>
                            </div>
                        </div>
                        <div className="interior-design-card">
                            <img src="/assets/images/BMW interior(1).jpg" alt="Classic Detail" />
                            <div className="interior-design-overlay">
                                <h4>Analog Heritage</h4>
                                <p>The tactile roots of the BMW cockpit, where every click had a purpose.</p>
                            </div>
                        </div>
                        <div className="interior-design-card">
                            <img src="/assets/images/BMW Interior(6).jpg" alt="Modern Ergonomics" />
                            <div className="interior-design-overlay">
                                <h4>Ergonomic Flow</h4>
                                <p>Sculpted seating and console layouts designed for long-distance comfort.</p>
                            </div>
                        </div>
                        <div className="interior-design-card">
                            <img src="/assets/images/BMW Interior(7).jpg" alt="Digital Cockpit" />
                            <div className="interior-design-overlay">
                                <h4>Software Soul</h4>
                                <p>Deep integration of vehicle telemetry and infotainment through a unified OS.</p>
                            </div>
                        </div>
                    </div>
                </section>

                
                <section className="interior-collaboration">
                    <div className="interior-collab-content">
                        <div className="interior-collab-text">
                            <div className="section-eyebrow">
                                <span></span> Limited Edition
                            </div>
                            <h3>BMW M4 Competition x KITH</h3>
                            <p>
                                A masterclass in branding and material science. This collaboration features
                                embossed Kith upholstery and specialized stitching, bridging the gap
                                between high-fashion and high-performance.
                            </p>
                        </div>
                        <div className="interior-collab-img-wrap">
                            <img
                                src="/assets/images/BMW Kith Interior.jpg"
                                alt="BMW Kith Interior"
                                className="interior-collab-img"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Interior;
