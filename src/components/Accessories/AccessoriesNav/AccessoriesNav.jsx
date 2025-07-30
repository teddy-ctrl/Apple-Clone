// src/components/AccessoriesNav/AccessoriesNav.jsx
import React from 'react';
import styles from './AccessoriesNav.module.css';

const categories = ['Mac', 'iPad', 'iPhone', 'Watch', 'Apple Vision Pro', 'TV & Home', 'Beats'];

const AccessoriesNav = () => (
    <div className={styles.navContainer}>
        <h3>Find the accessories you’re looking for.</h3>
        <div className={styles.searchBar}>
            <input type="text" placeholder="Search accessories" />
        </div>
        <div className={styles.categoryNav}>
            <h4>Browse by Product</h4>
            <ul>
                {categories.map(cat => <li key={cat}><a href="#">{cat}</a></li>)}
            </ul>
        </div>
    </div>
);
export default AccessoriesNav;