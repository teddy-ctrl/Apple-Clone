// src/components/Header/Header.jsx (Final Version)

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

// Import the new SVG icon components
import AppleLogo from '../Icons/AppleLogo';
import SearchIcon from '../Icons/SearchIcon';
import BagIcon from '../Icons/BagIcon';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinksData = [
        { name: 'Store', to: '/store' },
        { name: 'Mac', to: '/mac' },
        { name: 'iPad', to: '/ipad' },
        { name: 'iPhone', to: '/iphone' },
        { name: 'Watch', to: '/watch' },
        { name: 'Vision', to: '/vision' },
        { name: 'AirPods', to: '/airpods' },
        { name: 'TV & Home', to: '/tv-home' },
        { name: 'Entertainment', to: '/entertainment' },
        { name: 'Accessories', to: '/accessories' },
        { name: 'Support', to: '/support' },
    ];
    
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add(styles.noScroll);
        } else {
            document.body.classList.remove(styles.noScroll);
        }
        return () => {
            document.body.classList.remove(styles.noScroll);
        };
    }, [isMenuOpen]);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                        <AppleLogo className={styles.icon} />
                    </Link>
                </div>

                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                    {navLinksData.map((link) => (
                        <li key={link.name}>
                            <Link to={link.to} onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
                        </li>
                    ))}
                </ul>

                <div className={styles.navRight}>
                    <div className={styles.searchIcon}>
                        <Link to="/search">
                            <SearchIcon className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.bagIcon}>
                         <Link to="/cart">
                            <BagIcon className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.toggler}>
                        <button
                            className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                            onClick={toggleMenu}
                        >
                            <span className={styles.hamburger}></span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;