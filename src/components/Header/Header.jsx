import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    // State to manage the mobile menu's open/closed status
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null); // Ref to the nav element for click-outside detection

    // Data for navigation links for easier mapping
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
    
    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    // Effect to handle body scroll lock when the menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        // Cleanup function to remove the class if the component unmounts
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isMenuOpen]);

    // Effect to close the menu on window resize to desktop view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 833) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className={styles.header}>
            <nav className={styles.nav} ref={navRef}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img
                            src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
                            alt="Apple Logo"
                        />
                    </Link>
                </div>

                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                    {navLinksData.map((link) => (
                        <li key={link.name}>
                            {/* Using NavLink could be better for active styling, but Link is fine */}
                            <Link to={link.to} onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
                        </li>
                    ))}
                </ul>

                <div className={styles.navRight}>
                    <div className={styles.icons}>
                        <Link to="/search">
                            <img
                                src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_large.svg"
                                alt="Search"
                            />
                        </Link>
                        <Link to="/cart">
                            <img
                                src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg"
                                alt="Cart"
                            />
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