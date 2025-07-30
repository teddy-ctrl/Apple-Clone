import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EntertainmentSubNav.module.css';

// Data for the navigation items. This makes the component easy to manage.
const navItems = [
    { name: 'Apple One', icon: '/images/logos/apple_one_icon.svg', to: '/apple-one' },
    { name: 'Apple TV+', icon: '/images/logos/tv_plus_icon.svg', to: '/tv-plus' },
    { name: 'Apple Music', icon: '/images/logos/apple_music_icon.svg', to: '/apple-music' },
    { name: 'Apple Arcade', icon: '/images/logos/apple_arcade_icon.svg', to: '/apple-arcade' },
    { name: 'Apple Fitness+', icon: '/images/logos/apple_fitness_plus_icon.svg', to: '/apple-fitness-plus' },
    { name: 'Apple News+', icon: '/images/logos/apple_news_plus_icon.svg', to: '/apple-news-plus' },
    { name: 'Apple Podcasts', icon: '/images/logos/apple_podcasts_icon.svg', to: '/apple-podcasts' },
    { name: 'Apple Books', icon: '/images/logos/apple_books_icon.svg', to: '/apple-books' },
];

const EntertainmentSubNav = () => {
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

export default EntertainmentSubNav;