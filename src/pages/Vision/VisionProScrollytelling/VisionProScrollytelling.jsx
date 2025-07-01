import React, { useState, useEffect, useRef } from 'react';
import styles from './VisionProScrollytelling.module.css';

// Data for each scene: text and video source
const scenes = [
    {
        title: 'Productivity',
        description: 'Free your desktop. And your apps will follow. Your apps live in your space.',
        videoSrc: 'https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-productivity-a/medium.mp4'
    },
    {
        title: 'Entertainment',
        description: 'The ultimate theater. Wherever you are. Turn your room into a personal movie theater.',
        videoSrc: 'https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-entertainment-a/medium.mp4'
    },
    {
        title: 'Photos and Videos',
        description: 'Be in your favorite memories. Relive your panoramic photos and spatial videos.',
        videoSrc: 'https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-photos-videos/medium.mp4'
    },
    {
        title: 'Connection',
        description: 'Get on the same page. In the same space. Make FaceTime calls more natural with life-size tiles.',
        videoSrc: 'https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-connection-a/medium.mp4'
    },
     {
        title: 'Apps',
        description: 'A canvas for apps. An entirely new world for developers to build on.',
        videoSrc: 'https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-apps-a/medium.mp4'
    },
     {
        title: 'visionOS',
        description: 'A new dimension of computing. Designed from the ground up for spatial computing.',
        videoSrc: 'https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/visionos-a/medium.mp4'
    },
];

const VisionProScrollytelling = () => {
    const [activeSceneIndex, setActiveSceneIndex] = useState(0);
    const sceneRefs = useRef([]); // To hold refs for each scene's trigger div

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Get the index from the data-index attribute
                        const index = parseInt(entry.target.dataset.index, 10);
                        setActiveSceneIndex(index);
                    }
                });
            },
            {
                // This makes the trigger area the middle 50% of the viewport
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0
            }
        );

        // Observe each of the scene trigger elements
        sceneRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        // Cleanup on unmount
        return () => {
            sceneRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section 
            className={styles.scrollytellingSection}
            // The total height is the number of scenes * 100vh
            style={{ height: `${scenes.length * 100}vh` }}
        >
            <div className={styles.stickyContainer}>
                <video
                    // The key is crucial! It forces React to re-render the video tag 
                    // when the src changes, ensuring the new video plays.
                    key={scenes[activeSceneIndex].videoSrc}
                    className={styles.videoPlayer}
                    src={scenes[activeSceneIndex].videoSrc}
                    autoPlay muted loop playsInline
                />
            </div>

            <div className={styles.scrollContent}>
                {scenes.map((scene, index) => (
                    <div
                        key={index}
                        className={styles.scene}
                        // Assign a ref from our array to each scene div
                        ref={el => sceneRefs.current[index] = el}
                        data-index={index}
                    >
                        <div 
                            className={`${styles.scene__text} ${index === activeSceneIndex ? styles['scene__text--active'] : ''}`}
                        >
                            <h2 className={styles.scene__title}>{scene.title}</h2>
                            <p className={styles.scene__description}>{scene.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VisionProScrollytelling;