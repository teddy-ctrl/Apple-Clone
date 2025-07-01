import React, { useRef, useEffect } from 'react';
import styles from './VideoHero.module.css';

const VideoHero = () => {
    const videoRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !videoRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const scrollY = window.scrollY;

            // Only perform calculations when the section is visible
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                // Calculate scroll progress from the point the video section starts
                const scrollProgress = Math.max(0, Math.min(1, scrollY / (rect.height * 0.8)));
                
                // Animate scale from 1 down to 0.8
                const scale = 1 - scrollProgress * 0.2;
                videoRef.current.style.transform = `scale(${Math.max(0.8, scale)})`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
       <section className={styles.videoHero} ref={sectionRef}>
            <div className={styles.videoHero__stickyContainer}>
                <video
                    ref={videoRef}
                    className={styles.videoHero__player}
                    src="https://www.apple.com/105/media/us/mac/family/2025/59856fc1-d007-421a-90ee-734ddf3fd25d/anim/welcome/large.mp4"
                    autoPlay muted loop playsInline
                ></video>
            </div>
        </section>
    );
};

export default VideoHero; 

