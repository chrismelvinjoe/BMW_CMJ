import React, { useEffect } from 'react';
import './Racing.css';

const Racing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="racing-page">
            
            <header className="racing-hero">
                <video
                    src="/assets/videos/BMW%20Hypercar%20Main.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="racing-hero-video"
                />
                <div className="racing-hero-gradient"></div>
                <div className="racing-hero-overlay">
                    <span className="racing-hero-eyebrow">HYBRID_CONCEPT_PROJECT</span>
                    <span className="racing-hero-year">LMDH / 2024_TECHNICAL_SPEC</span>
                    <h1 className="racing-hero-title">
                        THE <em>M HYBRID V8</em> <br /> PROTOTYPE
                    </h1>
                    <p className="racing-hero-subtitle">
                        ENGINEERING_LOG: The M Hybrid V8 marks BMW's returns to pinnacle endurance racing.
                        Integrating high-voltage systems with high-octane performance.
                    </p>
                </div>
            </header>

            <main className="racing-content">
                
                <section className="racing-intro">
                    <div className="racing-intro-text">
                        <span className="racing-hero-eyebrow">THE_VISION_ANNOTATION</span>
                        <h2>Uncompromising Speed</h2>
                        <p>
                            Designed to compete at the highest level of international sports car racing,
                            the BMW M Hybrid V8 is the first prototype developed by BMW M Motorsport
                            in over 25 years.
                        </p>
                        <p>
                            Its striking design is a tribute to the legendary BMW race cars of the past,
                            featuring an iconic wide kidney grille and technical "Hofmeister" geometry.
                        </p>
                    </div>
                    <div className="racing-intro-img-wrap sketch-3d-wrap">
                        <img
                            src="/assets/images/BMW%20Hyper&BMWM3.jpg"
                            alt="Racing Action"
                        />
                        <div className="sketch-layer">CHASSIS_V01</div>
                    </div>
                </section>

                
                <section className="racing-stats">
                    <div className="racing-stat">
                        <span className="racing-stat-value">640</span>
                        <span className="racing-stat-label">HP_OUTPUT</span>
                    </div>
                    <div className="racing-stat">
                        <span className="racing-stat-value">V8_T</span>
                        <span className="racing-stat-label">ENGINE_ARCHITECTURE</span>
                    </div>
                    <div className="racing-stat">
                        <span className="racing-stat-value">50_KW</span>
                        <span className="racing-stat-label">HYBRID_REGEN_DRIVE</span>
                    </div>
                </section>

                
                <section className="racing-timeline">
                    <div className="racing-timeline-header">
                        <span className="racing-hero-eyebrow">DEVELOPMENT_TIMELINE</span>
                        <h2>Race to Perfection</h2>
                    </div>

                    <div className="racing-timeline-items">
                        <div className="racing-timeline-item">
                            <div className="racing-tl-text">
                                <span className="racing-tl-year">2022</span>
                                <h3>The Reveal</h3>
                                <p>
                                    Initial phase: BMW M Motorsport unveils the official livery.
                                    Aero-mapping and technical validation begins.
                                </p>
                            </div>
                            <div className="racing-tl-media sketch-3d-wrap">
                                <img src="/assets/images/BMW%20M4%20Sport.jpg" alt="Reveal" />
                                <div className="sketch-layer">AERO_SHELL_V2</div>
                            </div>
                        </div>

                        <div className="racing-timeline-item">
                            <div className="racing-tl-text">
                                <span className="racing-tl-year">2023</span>
                                <h3>IMSA Debut</h3>
                                <p>
                                    Live field testing: The hybrid powertrain is pushed to limits
                                    across North American endurance circuits.
                                </p>
                            </div>
                            <div className="racing-tl-media sketch-3d-wrap">
                                <img src="/assets/images/BMW%20Hypercar%20pit.jpg" alt="Testing" />
                                <div className="sketch-layer">PIT_SYSTEMS_R1</div>
                            </div>
                        </div>

                        <div className="racing-timeline-item">
                            <div className="racing-tl-text">
                                <span className="racing-tl-year">2024</span>
                                <h3>WEC Challenge</h3>
                                <p>
                                    Global deployment: BMW enters the FIA WEC, targeting
                                    the 24 Hours of Le Mans.
                                </p>
                            </div>
                            <div className="racing-tl-media sketch-3d-wrap">
                                <img src="/assets/images/BMW%20Hyper&BMWM3(1).jpg" alt="Race track" />
                                <div className="sketch-layer">TRACK_AERO_FINAL</div>
                            </div>
                        </div>
                    </div>
                </section>

                
                <section className="racing-gallery">
                    <div className="racing-timeline-header">
                        <span className="racing-hero-eyebrow">BLUEPRINT_ARCHIVE</span>
                        <h2>Technical Gallery</h2>
                    </div>
                    <div className="racing-gallery-grid">
                        <div className="gallery-item sketch-3d-wrap">
                            <img src="/assets/images/BMW%20M%20Hybrid%20V8.jpg" alt="Archived Design 1" />
                            <div className="sketch-layer">DRAFT_A</div>
                        </div>
                        <div className="gallery-item sketch-3d-wrap">
                            <img src="/assets/images/BMW%20M%20Hybrid%20V8(1).jpg" alt="Archived Design 2" />
                            <div className="sketch-layer">DRAFT_B</div>
                        </div>
                        <div className="gallery-item sketch-3d-wrap">
                            <img src="/assets/images/BMWHypercar(1).jpg" alt="Archived Design 3" />
                            <div className="sketch-layer">DRAFT_C</div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Racing;
