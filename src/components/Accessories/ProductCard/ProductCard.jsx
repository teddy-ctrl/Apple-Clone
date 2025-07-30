// src/components/ProductCard/ProductCard.jsx (for Accessories)
import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ name, price, imageUrl, tag }) => (
    <div className={styles.card}>
        <div className={styles.imageContainer}>
            <img src={imageUrl} alt={name} />
        </div>
        <div className={styles.content}>
            {tag && <p className={styles.tag}>{tag}</p>}
            <h4 className={styles.name}>{name}</h4>
            <p className={styles.price}>{price}</p>
        </div>
    </div>
);
export default ProductCard;