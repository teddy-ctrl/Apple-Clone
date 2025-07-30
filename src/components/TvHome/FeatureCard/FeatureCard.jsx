// src/components/FeatureCard/FeatureCard.jsx
import React from 'react';
import styles from './FeatureCard.module.css';

const FeatureCard = ({ title, linkText, imageUrl }) => (
    <div className={styles.card}>
        <h4 className={styles.title}>{title}</h4>
        <a href="#" className={styles.link}>{linkText} {">"}</a>
        <img src={imageUrl} alt={title} className={styles.image} />
    </div>
);
export default FeatureCard;