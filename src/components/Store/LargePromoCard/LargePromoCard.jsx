// src/components/LargePromoCard/LargePromoCard.jsx
import React from 'react';
import styles from './LargePromoCard.module.css';

const LargePromoCard = ({ eyebrow, title, price, imageUrl, theme }) => (
    <div className={`${styles.card} ${styles[theme]}`} style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className={styles.content}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            <h3 className={styles.title}>{title}</h3>
            {price && <p className={styles.price}>{price}</p>}
        </div>
    </div>
);
export default LargePromoCard;