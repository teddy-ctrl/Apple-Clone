// src/components/ProductGrid/ProductGrid.jsx
import React from 'react';
import styles from './ProductGrid.module.css';
import ProductCard from '../ProductCard/ProductCard';

const ProductGrid = ({ title, products }) => (
    <section className={styles.gridSection}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.carousel}>
            {products.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
        <a href="#" className={styles.shopAllLink}>Shop all {title} {">"}</a>
    </section>
);
export default ProductGrid;