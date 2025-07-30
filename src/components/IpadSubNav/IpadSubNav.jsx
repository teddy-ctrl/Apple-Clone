import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IpadSubNav.module.css';

const navItems = [
    { name: 'iPad Pro', icon: '/images/icons/ipad-pro.svg', to: '/ipad-pro' },
    { name: 'iPad Air', icon: '/images/icons/ipad-air.svg', to: '/ipad-air' },
    { name: 'iPad', icon: '/images/icons/ipad.svg', to: '/ipad' },
    { name: 'iPad mini', icon: '/images/icons/ipad-mini.svg', to: '/ipad-mini' },
    { name: 'Compare', icon: '/images/icons/compare.svg', to: '/ipad/compare' },
    { name: 'Apple Pencil', icon: '/images/icons/pencil.svg', to: '/apple-pencil' },
    { name: 'Keyboards', icon: '/images/icons/keyboard.svg', to: '/keyboards' },
    { name: 'Accessories', icon: '/images/icons/accessories.svg', to: '/accessories' },
];

const IpadSubNav = () => {
    return (
        <div className={styles.subNavContainer}>
            <nav className={styles.subNav}>
                <ul className={styles.list}>
                    {navItems.map(item => (
                        <li key={item.name}>
                            <Link to={item.to} className={styles.link}>
                                <img src={item.icon} alt="" className={styles.icon} />
                                <span className={styles.text}>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default IpadSubNav;