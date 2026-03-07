import React, { useEffect, useRef } from 'react';
import './BMWM3.css';

const BMWM3 = () => {
    const observer = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Intersection Observer for Simple Scrollytelling transitions
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    // Optional: remove visible class to re-trigger animation when scrolling back up
                    entry.target.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: "0px 0px -100px 0px"
        });

        const elements = document.querySelectorAll('.scrolly-item');
        elements.forEach(el => observer.current.observe(el));

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);

    return (
        <div className="m3-page">
            {/* Papel Picado Header */}
            <div className="papel-picado-header">
                <div className="papel-flag flag-burnt"></div>
                <div className="papel-flag flag-orange"></div>
                <div className="papel-flag flag-amber"></div>
                <div className="papel-flag flag-cream"></div>
                <div className="papel-flag flag-burnt"></div>
                <div className="papel-flag flag-orange"></div>
                <div className="papel-flag flag-amber"></div>
                <div className="papel-flag flag-cream"></div>
            </div>

            <div className="m3-content-wrapper">
                <div className="scrolly-item">
                    <div className="scrolly-text">
                        <h2>The Soul of the Track</h2>
                        <p>Driven by passion, refined by heritage. The BMW E30 M3 embodies the soulful spirit of performance that resonates deep in the heart of automotive culture.</p>
                    </div>
                </div>
                <div className="scrolly-item">
                    <img src="/assets/images/BMW E30 M3 hanging.jpg" alt="BMW E30 M3 hanging" className="m3-scrolly-image" />
                </div>
                <div className="scrolly-item">
                    <div className="scrolly-text">
                        <h2>Beauty and Strength</h2>
                        <p>A masterclass in functional artistry. From its flared stance to the iconic silhouette, every detail reflects a vibrant balance of beauty and raw power.</p>
                    </div>
                </div>
                <div className="scrolly-item">
                    <img src="/assets/images/BMW E30 M3 hanging(3).jpg" alt="BMW E30 M3 hanging 3" className="m3-scrolly-image" />
                </div>
                <div className="scrolly-item">
                    <div className="scrolly-text">
                        <h2>Vibrant Heart</h2>
                        <p>The legendary S14 engine sings with intensity—naturally aspirated, high-revving, and full of life, setting the pace for a generation.</p>
                    </div>
                </div>
                <div className="scrolly-item">
                    <img src="/assets/images/BMW E30 M3 hanging(2).jpg" alt="BMW E30 M3 hanging 2" className="m3-scrolly-image" />
                </div>
                <div className="scrolly-item">
                    <div className="scrolly-text">
                        <h2>An Eternal Legacy</h2>
                        <p>Decades of excellence, one timeless icon. The E30 M3 remains the benchmark of soul and precision, a true masterpiece of automotive heritage.</p>
                    </div>
                </div>
                <div className="scrolly-item">
                    <img src="/assets/images/BMW E30 M3 hanging(1).jpg" alt="BMW E30 M3 hanging 1" className="m3-scrolly-image" />
                </div>

                {/* Signature Legacy Section */}
                <div className="m3-signature-section">
                    <div className="sunset-halo"></div>
                    <div className="signature-content">
                        <div className="gold-leaf-border top-leaf"></div>
                        <div className="heritage-badge">Patrimonio M</div>
                        <h2>The Benchmark of Passion</h2>
                        <p>“The E30 M3 is not just a car; it is a testament to the era where soul outweighed software, and passion dictated every turn.”</p>
                        <div className="signature-line"></div>
                        <div className="signature-footer">Authentic BMW M Heritage</div>
                        <div className="gold-leaf-border bottom-leaf"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BMWM3;
