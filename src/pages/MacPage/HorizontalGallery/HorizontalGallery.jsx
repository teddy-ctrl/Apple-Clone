import React, { useRef } from 'react';
import styles from './HorizontalGallery.module.css';

const HorizontalGallery = () => {
    const scrollRef = useRef(null);

    const galleryItems = [
        { img: '/images/mac-images/heroimages/getMac6.jpg', alt: 'MacBook Air' },
        { img: '/images/mac-images/heroimages/getMac5.jpg', alt: 'MacBook Pro' },
        { img: '/images/mac-images/heroimages/getMac4.jpg', alt: 'iMac' },
        { img: '/images/mac-images/heroimages/getMac3.jpg', alt: 'Mac mini' },
        { img: '/images/mac-images/heroimages/getMac2.jpg', alt: 'Mac Studio' },
        { img: '/images/mac-images/heroimages/getMac1.jpg', alt: 'Mac Pro' },
    ];

    const handleScroll = (offset) => {
        if(scrollRef.current) {
            scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    }

    return (
         <section className={styles.productGallery}>
            <h2 className={styles.productGallery__title}>Get to know Mac.</h2>
            <div className={styles.productGallery__scrollContainer}>
                <div className={styles.productGallery__list} ref={scrollRef}>
                    {galleryItems.map((item, index) => (
                        <div className={styles.productGallery__card} key={index}>
                            <img className={styles.productGallery__image} src={item.img} alt={item.alt} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.productGallery__buttonContainer}>
                <button className={styles.productGallery__scrollButton} onClick={() => handleScroll(-300)}>❮</button>
                <button className={styles.productGallery__scrollButton} onClick={() => handleScroll(300)}>❯</button>
            </div>
        </section>
    );
};

export default HorizontalGallery;