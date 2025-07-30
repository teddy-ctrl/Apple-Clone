// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ eyebrow, title, price, imageUrl, theme = 'light' }) => (
    <div className={`${styles.card} ${styles[theme]}`}>
        <div className={styles.content}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h3 className={styles.title}>{title}</h3>
            {price && <p className={styles.price}>{price}</p>}
            <div className={styles.links}>
                <Link to="#" className={styles.buyButton}>Buy</Link>
                <Link to="#" className={styles.learnMore}>Learn more{" >"}</Link>
            </div>
        </div>
        <img src={imageUrl} alt={title} className={styles.image} />
    </div>
);
export default ProductCard;