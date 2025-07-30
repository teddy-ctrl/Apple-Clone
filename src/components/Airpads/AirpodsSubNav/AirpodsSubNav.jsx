import React, { useRef } from 'react';
import styles from './AirpadsSubNav.module.css';

const AirpodsSubNav = () => {
    const scrollRef = useRef(null);

    const navItems = [
        { img: '/images/mac-images/iconeImages/macbookair15.macbookair13_7e8b978ec.svg', name: 'MacBook Air', isNew: true },
        { img: '/images/mac-images/iconeImages/macbook_pro_light__bvnmtmeikj1e_large.svg', name: 'MacBook Pro' },
        { img: '/images/mac-images/iconeImages/imac_light__cx5ex9nbqxme_large.svg', name: 'iMac' },
        { img: '/images/mac-images/iconeImages/mac_mini_light__e7ojhup2ezau_large.svg', name: 'Mac mini' },
        { img: '/images/mac-images/iconeImages/mac_studio_light__fcr3455qk0i2_large.svg', name: 'Mac Studio', isNew: true },
        { img: '/images/mac-images/iconeImages/mac_pro_light__bly2b0ua4seq_large.svg', name: 'Mac Pro' },
        { img: '/images/mac-images/iconeImages/helpmechoose_dc7206dee.svg', name: 'Help Me Choose' },
        { img: '/images/mac-images/iconeImages/displays_light__d67yrnk0qsa6_large.svg', name: 'Displays' },
        { img: '/images/mac-images/iconeImages/mac_compare_light__capy8s4wrbhy_large.svg', name: 'Compare' },
        { img: '/images/mac-images/iconeImages/mac_os_light__6mb5pqhztcie_large.svg', name: 'Sequoia' },
         { img: '/images/mac-images/iconeImages/accessories_3bf8fc936.svg', name: 'Accessories' },
        { img: '/images/mac-images/iconeImages/shop_mac_b01536048.svg', name: 'Shop Mac' },
    ];

    const handleScroll = (scrollOffset) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        }
    };

    return (
         <section className={styles.subNav}>
            <div className={styles.subNav__wrapper}>
                <div className={`${styles.subNav__scrollButton} ${styles['subNav__scrollButton--left']}`} onClick={() => handleScroll(-200)}>❮</div>
                <div className={styles.subNav__list} ref={scrollRef}>
                    {navItems.map((item, index) => (
                        <div className={styles.subNav__item} key={index}>
                            <img className={styles.subNav__icon} src={item.img} alt={item.name} />
                            {/* THIS IS THE CHANGE: Wrap text in a container */}
                            <div className={styles.subNav__textContainer}>
                                <span className={styles.subNav__label}>{item.name}</span>
                                {item.isNew && <span className={styles.subNav__newBadge}>New</span>}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`${styles.subNav__scrollButton} ${styles['subNav__scrollButton--right']}`} onClick={() => handleScroll(200)}>❯</div>
            </div>
        </section>
    );
};

export default AirpodsSubNav;