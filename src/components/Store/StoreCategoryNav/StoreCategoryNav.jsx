import React from 'react';
import { Link } from 'react-router-dom';
import styles from './StoreCategoryNav.module.css';

// Data for the category links. This makes the component easy to manage and update.
// NOTE: The image paths assume your icons are in `public/images/store/nav/`
const categoryData = [
    { name: 'Mac', imageUrl: '/images/store/nav/mac.png', linkTo: '/store/mac' },
    { name: 'iPhone', imageUrl: '/images/store/nav/iphone.png', linkTo: '/store/iphone' },
    { name: 'iPad', imageUrl: '/images/store/nav/ipad.png', linkTo: '/store/ipad' },
    { name: 'Apple Watch', imageUrl: '/images/store/nav/watch.png', linkTo: '/store/watch' },
    { name: 'Apple Vision Pro', imageUrl: '/images/store/nav/vision.png', linkTo: '/store/vision' },
    { name: 'AirPods', imageUrl: '/images/store/nav/airpods.png', linkTo: '/store/airpods' },
    { name: 'AirTag', imageUrl: '/images/store/nav/airtag.png', linkTo: '/store/airtag' },
    { name: 'Apple TV 4K', imageUrl: '/images/store/nav/tv4k.png', linkTo: '/store/tv' },
    { name: 'HomePod', imageUrl: '/images/store/nav/homepod.png', linkTo: '/store/homepod' },
    { name: 'Accessories', imageUrl: '/images/store/nav/accessories.png', linkTo: '/store/accessories' },
    { name: 'Apple Gift Card', imageUrl: '/images/store/nav/giftcard.png', linkTo: '/store/gift-card' },
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