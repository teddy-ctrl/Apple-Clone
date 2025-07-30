// src/components/PromoBanner/PromoBanner.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PromoBanner.module.css';

const PromoBanner = () => (
    <section className={styles.promoBanner}>
        <div className={styles.content}>
            <h3 className={styles.eyebrow}>New Pride Edition Sport Band.</h3>
            <h4 className={styles.headline}>Show your stripes.</h4>
            <p className={styles.body}>Featuring rainbow stripes of color that vary in shape and size, the new Pride Edition band and matching Pride Harmony watch face proudly celebrate the strength, beauty, and individuality of LGBTQ+ communities around the world.</p>
            <div className={styles.links}>
                <Link to="/shop/pride-band" className={styles.buyButton}>Buy</Link>
                <Link to="/learn-more/pride-band" className={styles.learnMore}>Learn more {">"}</Link>
            </div>
        </div>
        <div className={styles.imageContainer}>
            <img src="/images/watch/pride_band.jpg" alt="Pride Edition Sport Band on Apple Watch" />
        </div>
    </section>
);
export default PromoBanner;