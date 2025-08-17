import React from 'react';
import { Link } from 'react-router-dom';
import styles from './StoreCategoryNav.module.css';

// Data for the category links. This makes the component easy to manage and update.
// NOTE: The image paths assume your icons are in `public/images/store/nav/`
const categoryData = [
    { name: 'Mac', imageUrl: '/store/store-card-13-mac-nav-202503.png', linkTo: '/store/mac' },
    { name: 'iPhone', imageUrl: '/store/store-card-13-iphone-nav-202502_GEO_US.png', linkTo: '/store/iphone' },
    { name: 'iPad', imageUrl: '/store/store-card-13-ipad-nav-202405.png', linkTo: '/store/ipad' },
    { name: 'Apple Watch', imageUrl: '/store/store-card-13-watch-nav-202409.png', linkTo: '/store/watch' },
    { name: 'Apple Vision Pro', imageUrl: '/store/store-card-13-vision-pro-nav-202401.png', linkTo: '/store/vision' },
    { name: 'AirPods', imageUrl: '/store/store-card-13-airpods-nav-202409.png', linkTo: '/store/airpods' },
    { name: 'AirTag', imageUrl: '/store/store-card-13-airtags-nav-202108.png', linkTo: '/store/airtag' },
    { name: 'Apple TV 4K', imageUrl: '/store/store-card-13-appletv-nav-202210.png', linkTo: '/store/tv' },
    { name: 'HomePod', imageUrl: '/store/store-card-13-homepod-nav-202301.png', linkTo: '/store/homepod' },
    { name: 'Accessories', imageUrl: '/store/store-card-13-accessories-nav-202503.png', linkTo: '/store/accessories' },
    { name: 'Apple Gift Card', imageUrl: '/store/store-card-13-holiday-giftcards-asit-agc-nav-202111.png', linkTo: '/store/gift-card' },
];

const StoreCategoryNav = () => {
    return (
        <nav className={styles.navContainer}>
            <ul className={styles.list}>
                {categoryData.map(item => (
                    <li key={item.name} className={styles.item}>
                        <Link to={item.linkTo} className={styles.link}>
                            <img 
                                src={item.imageUrl} 
                                alt={item.name} 
                                className={styles.icon} 
                            />
                            <span className={styles.text}>{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default StoreCategoryNav;