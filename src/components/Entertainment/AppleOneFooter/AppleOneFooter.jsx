// src/components/AppleOneFooter/AppleOneFooter.jsx
import React from 'react';
import styles from './AppleOneFooter.module.css';
const AppleOneFooter = () => (
    <footer className={styles.footer}>
        <div className={styles.logos}>
            {/* Logos for Music, TV+, Arcade, etc. */}
        </div>
        <h3>Bundle up to six Apple services and enjoy more for less.</h3>
        <div className={styles.links}>
            <a href="#" className={styles.primaryButton}>Try it free</a>
            <a href="#" className={styles.secondaryLink}>Learn more {">"}</a>
        </div>
    </footer>
);
export default AppleOneFooter;