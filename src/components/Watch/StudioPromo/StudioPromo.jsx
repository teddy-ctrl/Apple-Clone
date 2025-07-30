// src/components/StudioPromo/StudioPromo.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './StudioPromo.module.css';

const StudioPromo = () => (
    <div className={styles.studioPromo}>
        <div className={styles.content}>
            <h3 className={styles.headline}>Mix. Match. Make it yours.</h3>
            <p className={styles.body}>Choose a case. Pick a band. Configure your perfect watch.</p>
            <Link to="/studio" className={styles.ctaButton}>Create your style</Link>
        </div>
        <div className={styles.imageContainer}>
            <img src="/images/watch/watch_studio.jpg" alt="A collage of Apple Watch faces and bands" />
        </div>
    </div>
);
export default StudioPromo;