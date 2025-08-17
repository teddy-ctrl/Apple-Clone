import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeSuBNav.module.css';

// Data for the navigation items. This makes the component easy to manage.
const navItems = [
    { name: 'Apple TV 4K', icon: '/images/icons/home/appletv4k.svg', to: '/tv-home/apple-tv-4k' },
    { name: 'Apple TV app', icon: '/images/icons/home/appletv_app.svg', to: '/tv-home/apple-tv-app' },
    { name: 'Apple TV+', icon: '/images/icons/home/appletv_plus.svg', to: '/tv-plus' },
    { name: 'HomePod', icon: '/images/icons/home/homepod.svg', to: '/homepod' },
    { name: 'HomePod mini', icon: '/images/icons/home/homepod_mini.svg', to: '/homepod-mini' },
    { name: 'Home app', icon: '/images/icons/home/home_app.svg', to: '/tv-home/home-app' },
    { name: 'Accessories', icon: '/images/icons/home/accessories.svg', to: '/tv-home/accessories' },
];

const HomeSubNav = () => {
    return (
        <div className={styles.subNavContainer}>
            <nav className={styles.subNav}>
                <ul className={styles.list}>
                    {navItems.map(item => (
                        <li key={item.name}>
                            <Link to={item.to} className={styles.link}>
                                <img 
                                    src={item.icon} 
                                    alt="" // Decorative icons can have empty alt text
                                    className={styles.icon} 
                                />
                                <span className={styles.text}>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default HomeSubNav;