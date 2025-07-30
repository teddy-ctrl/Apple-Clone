// src/components/HelpCard/HelpCard.jsx
import React from 'react';
import styles from './HelpCard.module.css';
const HelpCard = ({ eyebrow, title, description, imageUrl }) => (
    <div className={styles.card} style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className={styles.content}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    </div>
);
export default HelpCard;