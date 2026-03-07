import React, { useEffect } from 'react';
import './Garmisch.css';

const Garmisch = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="garmisch-page">
            {/* Hero Section */}
            <header className="garmisch-hero">
                <img
                    src="/assets/images/BMW%20Garmisch.jpg"
                    alt="BMW Garmisch Concept"
                    className="garmisch-hero-img"
                />
                <div className="garmisch-hero-gradient"></div>
                <div className="garmisch-hero-overlay">
                    <div className="garmisch-hero-eyebrow">
                        <span></span> BMW Heritage
                    </div>
                    <span className="garmisch-hero-year">1970 / 2019</span>
                    <h1 className="garmisch-hero-title">
                        THE <em>GARMISCH</em> <br /> CONCEPT
                    </h1>
                    <p className="garmisch-hero-subtitle">
                        A lost masterpiece rediscovered. Originally designed by Marcello Gandini,
                        the Garmisch bridge the gap between classic elegance and futuristic geometry.
                    </p>
                </div>
            </header>

            <main className="garmisch-content">
                {/* Intro Section */}
                <section className="garmisch-intro">
                    <div className="garmisch-intro-text">
                        <div className="section-eyebrow">
                            <span></span> The Origin
                        </div>
                        <h2>A Proposal for Bertone</h2>
                        <p>
                            Unveiled at the 1970 Geneva Motor Show, the BMW Garmisch was not a factory commission,
                            but an independent design proposal by the legendary Bertone studio.
                            It was Marcello Gandini's vision of a modern, mid-sized coupe for BMW.
                        </p>
                        <p>
                            Built on the chassis of a BMW 2002 tii, the Garmisch combined BMW's precision
                            with the провокационный flair of Italian styling houses.
                        </p>
                    </div>
                    <div className="garmisch-intro-img-wrap">
                        <video
                            src="/assets/videos/BMW%20garmisch.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="garmisch-video-loop"
                        />
                    </div>
                </section>

                {/* Stat Strip */}
                <section className="garmisch-stats">
                    <div className="garmisch-stat">
                        <span className="garmisch-stat-value">2002</span>
                        <span className="garmisch-stat-label">Chassis Base</span>
                    </div>
                    <div className="garmisch-stat">
                        <span className="garmisch-stat-value">Vertical</span>
                        <span className="garmisch-stat-label">Kidney Grille</span>
                    </div>
                    <div className="garmisch-stat">
                        <span className="garmisch-stat-value">Honeycomb</span>
                        <span className="garmisch-stat-label">Rear Mesh</span>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="garmisch-timeline">
                    <div className="garmisch-timeline-header">
                        <div className="section-eyebrow">
                            <span></span> The Journey
                        </div>
                        <h2>Lost and Found</h2>
                    </div>

                    <div className="garmisch-timeline-line"></div>

                    <div className="garmisch-timeline-items">
                        {/* 1970 */}
                        <div className="garmisch-timeline-item">
                            <div className="garmisch-tl-text">
                                <span className="garmisch-tl-year">1970</span>
                                <h3>The Debut</h3>
                                <p>
                                    The Garmisch stuns audiences in Geneva with its angular lines and
                                    radical vertical grille. It represents a bold step away from the
                                    rounded forms of the 1960s.
                                </p>
                            </div>
                            <div className="garmisch-tl-dot">
                                <div className="garmisch-tl-dot-inner"></div>
                            </div>
                            <div className="garmisch-tl-media">
                                <img src="/assets/images/BMW%20Garmisch(8).jpg" alt="1970 Debut" />
                            </div>
                        </div>

                        {/* The Disappearance */}
                        <div className="garmisch-timeline-item">
                            <div className="garmisch-tl-text">
                                <span className="garmisch-tl-year">???</span>
                                <h3>The Mystery</h3>
                                <p>
                                    After the show circuit, the car vanished. No records, no sale,
                                    no scrap yard. The Garmisch became a ghost in BMW's history books,
                                    surviving only in a handful of black-and-white photos.
                                </p>
                            </div>
                            <div className="garmisch-tl-dot">
                                <div className="garmisch-tl-dot-inner"></div>
                            </div>
                            <div className="garmisch-tl-media">
                                <img src="/assets/images/BMW%20Garmisch(3).jpg" alt="Mystery" />
                            </div>
                        </div>

                        {/* 2019 */}
                        <div className="garmisch-timeline-item">
                            <div className="garmisch-tl-text">
                                <span className="garmisch-tl-year">2019</span>
                                <h3>The Rebirth</h3>
                                <p>
                                    BMW Design, led by Adrian van Hooydonk, decides to recreate
                                    the car from scratch. Marcello Gandini himself assists in
                                    re-specifying the colors and materials to ensure absolute authenticity.
                                </p>
                            </div>
                            <div className="garmisch-tl-dot">
                                <div className="garmisch-tl-dot-inner"></div>
                            </div>
                            <div className="garmisch-tl-media">
                                <img src="/assets/images/BMW%20Garmisch(1).jpg" alt="2019 Rebirth" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote Block */}
                <section className="garmisch-quote">
                    <blockquote>
                        "We wanted to create a modern mid-sized coupe that was faithful to BMW's design language,
                        but also more dynamic and even a bit provocative."
                    </blockquote>
                    <cite>— Marcello Gandini</cite>
                </section>

                {/* Design Grid */}
                <section className="garmisch-design">
                    <div className="garmisch-design-header">
                        <div className="section-eyebrow">
                            <span></span> Artistry
                        </div>
                        <h2>Distinctive Details</h2>
                    </div>
                    <div className="garmisch-design-grid">
                        <div className="garmisch-design-card">
                            <img src="/assets/images/BMW%20Garmisch(2).jpg" alt="Vertical Console" />
                            <div className="garmisch-design-card-overlay">
                                <h4>Vertical Console</h4>
                                <p>An unconventional radio arrangement that challenged the ergonomic standards of 1970.</p>
                            </div>
                        </div>
                        <div className="garmisch-design-card">
                            <img src="/assets/images/BMW%20Garmisch(4).jpg" alt="Artisan Door Panels" />
                            <div className="garmisch-design-card-overlay">
                                <h4>Artisan Details</h4>
                                <p>Luxurious wood trim and specialized hardware reflecting Gandini's "Piemontese twist."</p>
                            </div>
                        </div>
                        <div className="garmisch-design-card">
                            <img src="/assets/images/BMW%20Garmisch(6).jpg" alt="Iconic Mirror" />
                            <div className="garmisch-design-card-overlay">
                                <h4>The Fold-out Mirror</h4>
                                <p>A signature luxury element for the passenger, blending utility with alpine elegance.</p>
                            </div>
                        </div>
                        <div className="garmisch-design-card">
                            <img src="/assets/images/BMW%20Garmisch(7).jpg" alt="Honeycomb Rear Window" />
                            <div className="garmisch-design-card-overlay">
                                <h4>Signature Mesh</h4>
                                <p>The honeycomb rear window cover—a Gandini hallmark that redefined visibility and style.</p>
                            </div>
                        </div>
                        <div className="garmisch-design-card">
                            <img src="/assets/images/BMW%20Garmisch(5).jpg" alt="Geometric Vents" />
                            <div className="garmisch-design-card-overlay">
                                <h4>Geometric Form</h4>
                                <p>Precise louvers on the C-pillars that echo the car's angular, futuristic silhouette.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Garmisch;
