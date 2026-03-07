import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            const { clientX, clientY } = e;
            if (!isVisible) setIsVisible(true);

            // Instant dot movement
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
            }

            // Smooth ring movement via CSS transition (or we could use requestAnimationFrame for LERP)
            // For a premium feel, we'll let CSS handle the smooth follow
            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
            }
        };

        const onMouseDown = () => setIsHovering(true);
        const onMouseUp = () => setIsHovering(false);
        const onMouseLeave = () => setIsVisible(false);
        const onMouseEnter = () => setIsVisible(true);

        const handleHoverStart = (e) => {
            const target = e.target;
            const isInteractive = target.closest('a, button, .hover-target') ||
                window.getComputedStyle(target).cursor === 'pointer';

            if (isInteractive) {
                setIsHovering(true);
            }
        };

        const handleHoverEnd = (e) => {
            if (e.target.closest('a, button, .hover-target')) {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseover', handleHoverStart);
        document.addEventListener('mouseout', handleHoverEnd);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseover', handleHoverStart);
            document.removeEventListener('mouseout', handleHoverEnd);
        };
    }, [isVisible]);

    return (
        <div className={`custom-cursor-container ${isVisible ? 'visible' : ''} ${isHovering ? 'hovering' : ''}`}>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
        </div>
    );
};

export default CustomCursor;
