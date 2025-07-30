// src/components/AccessoryCard/AccessoryCard.jsx
import React from 'react';
import styles from './AccessoryCard.module.css';

const AccessoryCard = ({ category, description, imageUrl, productName }) => (
    <div className={styles.card}>
        <div className={styles.content}>
            <h4 className={styles.category}>{category}</h4>
            <p className={styles.description}>{description}</p>
            <a href="#">Shop {category} {">"}</a>
        </div>
        <div className={styles.imageContainer}>
            <img src={imageUrl} alt={productName} />
            <p className={styles.productName}>{productName}</p>
        </div>
    </div>
);
export default AccessoryCard;