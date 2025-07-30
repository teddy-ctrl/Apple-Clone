// src/components/LargePromo/LargePromo.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LargePromo.module.css';

const LargePromo = ({ title, subtitle, priceInfo, ancInfo, theme, alignment, backgroundImageUrl }) => {
    return (
        <section 
            className={`${styles.promo} ${theme === 'dark' ? styles.dark : styles.light}`} 
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
            <div className={`${styles.content} ${styles[alignment]}`}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
                <div className={styles.priceInfo}>
                    <span>{priceInfo}</span>
                    {ancInfo && <span>{ancInfo}</span>}
                </div>
                <div className={styles.links}>
                    <Link to="#" className={styles.learnMore}>Learn more</Link>
                    <Link to="#" className={styles.buyButton}>Buy</Link>
                </div>
            </div>
        </section>
    );
};
export default LargePromo;