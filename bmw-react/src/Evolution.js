import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Evolution.css';

const Evolution = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="evolution-page">
            <div className="evolution-header">
                <div className="evolution-header-content">
                    <h1 className="evolution-title">TIMELINE OF INNOVATION</h1>
                    <p className="evolution-subtitle">The Ultimate Driving Machine Through The Eras</p>
                    <div className="evolution-line"></div>
                </div>
            </div>

            <div className="evolution-showcase">
                <div className="evolution-image-container">
                    <img
                        src="/assets/images/BMW%20evolution.jpg"
                        alt="BMW Evolution Timeline"
                        className="evolution-timeline-img"
                    />
                </div>

                <div className="evolution-details">
                    <div className="detail-card">
                        <h3>Heritage</h3>
                        <p>Over a century of building drivers' cars. A relentless pursuit of perfection that spans across generations.</p>
                        <button className="design-btn" onClick={() => navigate('/garmisch')}>Discover Garmisch</button>
                    </div>
                    <div className="detail-card">
                        <h3>Design DNA</h3>
                        <p>The iconic kidney grille, dynamic proportions, and Hofmeister kink—elements that distinguish a BMW at first glance.</p>
                        <button className="design-btn" onClick={() => navigate('/bmw-m3')}>Explore M3 Legacy</button>
                    </div>
                    <div className="detail-card">
                        <h3>Future Forward</h3>
                        <p>As we transition into the electric era, our rich heritage provides the foundation for tomorrow's mobility.</p>
                        <button className="design-btn" onClick={() => navigate('/neue-klasse')}>Neue Klasse Production Begins</button>
                    </div>
                </div>

                <div className="evolution-image-container evo-overlay-wrap">
                    <span className="evo-funky-text evo-top-left">BORN TO DRIVE</span>
                    <img
                        src="/assets/images/BMWEvlolution(1).jpg"
                        alt="BMW Evolution"
                        className="evolution-timeline-img"
                    />
                    <span className="evo-funky-text evo-bottom-right">SINCE 1916</span>
                </div>
            </div>
        </div>
    );
};

export default Evolution;
