import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryNav.module.css';

// Data for the category links
const categoryData = [
    { name: 'Mac', icon: '/images/icons/mac.svg', to: '/store/mac' },
    { name: 'iPhone', icon: '/images/icons/iphone.svg', to: '/store/iphone' },
    { name: 'iPad', icon: '/images/icons/ipad.svg', to: '/store/ipad' },
    { name: 'Apple Watch', icon: '/images/icons/watch.svg', to: '/store/watch' },
    { name: 'AirPods', icon: '/images/icons/airpods.svg', to: '/store/airpods' },
    { name: 'AirTag', icon: '/images/icons/airtag.svg', to: '/store/airtag' },
    { name: 'Apple TV 4K', icon: '/images/icons/appletv.svg', to: '/store/tv' },
    { name: 'HomePod', icon: '/images/icons/homepod.svg', to: '/store/homepod' },
    { name: 'Accessories', icon: '/images/icons/accessories.svg', to: '/store/accessories' },
];

const CategoryNav = () => {
    return (
        <nav className={styles.categoryNav}>
            <ul className={styles.list}>
                {categoryData.map(item => (
                    <li key={item.name} className={styles.item}>
                        <Link to={item.to} className={styles.link}>
                            <img src={item.icon} alt="" className={styles.icon} />
                            <span className={styles.text}>{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default CategoryNav;