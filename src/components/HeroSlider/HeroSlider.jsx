import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSlider.module.css';

// Data for each slide. This would typically come from a CMS or API.
const slideData = [
    {
        id: 'stick',
        logoUrl: '/images/movie/FountainofYouts.jpg', // Transparent PNG logo
        backgroundUrl: '/images/movie/FountainofYouts.jpg',
        genre: 'Comedy',
        description: 'A heartfelt comedy about life and other hazards.',
        ctaLink: '/tv/stick'
    },
    {
        id: 'murderbot',
        logoUrl: '/images/movie/MurDerBot.jpg',
        backgroundUrl: '/images/movie/MurDerBot.jpg',
        genre: 'Sci-Fi',
        description: 'Some robots are friendly. This one is not.',
        ctaLink: '/tv/murderbot'
    },
    {
        id: 'buccaneers',
        logoUrl: '/images/movie/Stick.jpg',
        backgroundUrl: '/images/movie/Stick.jpg',
        genre: 'Drama',
        description: 'New money. Old secrets.',
        ctaLink: '/tv/buccaneers'
    },
    // Add more slides here...
];

const HeroSlider = ({ slides = slideData, autoplayInterval = 3000 }) => {
       const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const listRef = useRef(null); // Ref for the sliding list

    // Function to move to the next slide
    const nextSlide = useCallback(() => {
        setActiveIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, [slides.length]);

    // Function to jump to a specific slide
    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    // Autoplay logic
    useEffect(() => {
        if (!isPaused && autoplayInterval > 0) {
            const intervalId = setInterval(nextSlide, autoplayInterval);
            return () => clearInterval(intervalId);
        }
    }, [activeIndex, isPaused, autoplayInterval, nextSlide]);

    // This effect calculates the CSS transform to center the active slide
    useEffect(() => {
        if (listRef.current) {
            const list = listRef.current;
            const items = list.children;
            if (items[activeIndex]) {
                const item = items[activeIndex];
                // Calculate the offset needed to center the active item
                const listWidth = list.offsetWidth;
                const itemWidth = item.offsetWidth;
                const itemLeft = item.offsetLeft;
                
                // The transform value is the negative of the item's left position,
                // adjusted by half the list width and half the item width to center it.
                const transformValue = -(itemLeft - (listWidth / 2) + (itemWidth / 2));
                list.style.transform = `translateX(${transformValue}px)`;
            }
        }
    }, [activeIndex, slides]); // Re-calculate on index change

    return (
        <section 
            className={styles.coverFlowSlider}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className={styles.listWrapper}>
                <div className={styles.list} ref={listRef}>
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`${styles.slide} ${index === activeIndex ? styles['slide--active'] : ''}`}
                            onClick={() => goToSlide(index)} // Click on adjacent slide to navigate
                        >
                            <img src={slide.backgroundUrl} alt="" className={styles.slide__image} />
                            <div className={styles.slide__content}>
                                {/* <img src={slide.logoUrl} alt={`${slide.id} Logo`} className={styles.slide__logo} /> */}
                                <Link to={slide.ctaLink} className={styles.slide__ctaButton}>Stream now</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.pagination}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.pagination__dot} ${index === activeIndex ? styles['pagination__dot--active'] : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;