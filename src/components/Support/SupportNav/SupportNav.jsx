// src/components/SupportNav/SupportNav.jsx
import React from 'react';
import styles from './SupportNav.module.css';
const products = [ { name: 'iPhone', icon: '/images/icons/products/iphone.svg' }, { name: 'Mac', icon: '/images/icons/products/mac.svg' }, { name: 'iPad', icon: '/images/icons/products/ipad.svg' }, { name: 'Watch', icon: '/images/icons/products/watch.svg' }, { name: 'Vision', icon: '/images/icons/products/vision.svg' }, { name: 'AirPods', icon: '/images/icons/products/airpods.svg' }, { name: 'TV', icon: '/images/icons/products/tv.svg' }, ];
const SupportNav = () => (
    <nav className={styles.supportNav}>
        <ul className={styles.list}>
            {products.map(p => <li key={p.name}><a href="#"><img src={p.icon} alt=""/><span>{p.name}</span></a></li>)}
        </ul>
    </nav>
);
export default SupportNav;