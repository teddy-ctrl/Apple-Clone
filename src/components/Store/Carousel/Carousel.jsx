// src/components/Carousel/Carousel.jsx
import React from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ title, subtitle, children }) => {
    // In a real app, you would add scroll logic here with useRef
    return (
        <section className={styles.carouselSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title} <span className={styles.subtitle}>{subtitle}</span></h2>
            </div>
            <div className={styles.carousel}>
                {children}
            </div>
        </section>
    );
};
export default Carousel;