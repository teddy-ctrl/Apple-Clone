import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSlider.module.css';

// Using the same slide data you provided
const slideData = [
    {
        id: 'chief-of-war',
        backgroundUrl: '/images/movie/FountainofYouts.jpg',
        ctaLink: '/tv/chief-of-war',
    },
    {
        id: 'platonic',
        backgroundUrl: '/images/movie/MurDerBot.jpg',
        ctaText: 'Stream now',
        genre: 'Comedy',
        description: 'New season.',
        ctaLink: '/tv/platonic',
    },
    {
        id: 'see',
        backgroundUrl: '/images/movie/Stick.jpg',
        ctaLink: '/tv/see',
    },
    {
        id: 'buccaneers',
        backgroundUrl: '/images/movie/TedLasso.jpg',
        ctaLink: '/tv/buccaneers',
    },
    {
        id: 'foundation',
        backgroundUrl: '/images/movie/YourFriends&Neighbors.jpg',
        ctaLink: '/tv/foundation',
    },
];

const HeroSlider = ({ slides = slideData, autoplayInterval = 5000 }) => {
    // We start at index 1 because index 0 will be a clone of the last slide.
    const [activeIndex, setActiveIndex] = useState(1);
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef(null);
    const transitionTimeoutRef = useRef(null);

    // Create a new array with cloned slides at the beginning and end for a seamless loop
    const extendedSlides = useMemo(() => {
        if (slides.length === 0) return [];
        const first = slides[0];
        const last = slides[slides.length - 1];
        return [last, ...slides, first];
    }, [slides]);

    // --- AUTOPLAY AND NAVIGATION ---
    const nextSlide = useCallback(() => {
        setActiveIndex(prevIndex => prevIndex + 1);
    }, []);

    const goToSlide = (index) => {
        // Clear any pending transition to avoid conflicts
        if (transitionTimeoutRef.current) {
            clearTimeout(transitionTimeoutRef.current);
            if (containerRef.current) {
                 containerRef.current.style.transition = 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
            }
        }
        setActiveIndex(index + 1); // Add 1 because of the prepended clone
    };

    useEffect(() => {
        if (!isPaused) {
            const intervalId = setInterval(nextSlide, autoplayInterval);
            return () => clearInterval(intervalId);
        }
    }, [isPaused, nextSlide, autoplayInterval]);


    // --- SEAMLESS LOOP LOGIC ---
    useEffect(() => {
        // This effect handles the "jump" when the slider reaches a cloned slide
        if (activeIndex === 0 || activeIndex === extendedSlides.length - 1) {
            // After the slide animation finishes (800ms), we perform the jump
            transitionTimeoutRef.current = setTimeout(() => {
                if (containerRef.current) {
                    // 1. Disable the CSS transition for an instant jump
                    containerRef.current.style.transition = 'none';
                    // 2. Jump to the corresponding "real" slide
                    const newIndex = activeIndex === 0 ? slides.length : 1;
                    setActiveIndex(newIndex);

                    // 3. Re-enable the transition after the jump is rendered
                    // We use a 0ms timeout to ensure this runs in the next browser paint cycle
                    setTimeout(() => {
                        if (containerRef.current) {
                            containerRef.current.style.transition = 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
                        }
                    }, 0);
                }
            }, 800); // This MUST match the transition duration in your CSS
        }
        // Cleanup the timeout if the component unmounts or index changes
        return () => {
             if (transitionTimeoutRef.current) {
                clearTimeout(transitionTimeoutRef.current);
            }
        }
    }, [activeIndex, slides.length, extendedSlides.length]);


    // --- SLIDE POSITIONING LOGIC ---
    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current;
            const activeSlide = container.children[activeIndex];
            if (activeSlide) {
                const containerWidth = container.parentElement.offsetWidth;
                const slideWidth = activeSlide.offsetWidth;
                const slideLeft = activeSlide.offsetLeft;
                const offset = -(slideLeft - (containerWidth / 2) + (slideWidth / 2));
                container.style.transform = `translateX(${offset}px)`;
            }
        }
    }, [activeIndex, extendedSlides]);


    // --- RENDER ---
    return (
        <section
            className={styles.heroSlider}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className={styles.carousel}>
                <div className={styles.carouselContainer} ref={containerRef}>
                    {extendedSlides.map((slide, index) => (
                        <div
                            key={`${slide.id}-${index}`} // Use index for a unique key for clones
                            className={`${styles.slide} ${activeIndex === index ? styles.activeSlide : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <img src={slide.backgroundUrl} alt={slide.id} className={styles.backgroundImage} />
                            {activeIndex === index && (
                                <div className={styles.slideContent}>
                                    <div className={styles.ctaGroup}>
                                        <Link to={slide.ctaLink} className={styles.ctaButton}>
                                            {slide.ctaText || 'Stream now'}
                                        </Link>
                                        {slide.genre && (
                                            <p className={styles.slideDescription}>
                                                <strong>{slide.genre}</strong> &middot; {slide.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.pagination}>
                {slides.map((_, index) => {
                    // This logic maps the extended index back to the original index for the dots
                    let currentRealIndex = activeIndex - 1;
                    if (activeIndex === 0) {
                        currentRealIndex = slides.length - 1;
                    } else if (activeIndex === extendedSlides.length - 1) {
                        currentRealIndex = 0;
                    }
                    const isActive = currentRealIndex === index;
                    return (
                        <button
                            key={index}
                            className={`${styles.dot} ${isActive ? styles.activeDot : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default HeroSlider;