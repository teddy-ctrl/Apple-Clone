// src/components/ContentCard/ContentCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ContentCard.module.css';

const ContentCard = ({ imageUrl, title, subtitle }) => (
    <Link to="#" className={styles.card}>
        <img src={imageUrl} alt={title} className={styles.image} />
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.subtitle}>{subtitle}</p>
    </Link>
);
export default ContentCard;