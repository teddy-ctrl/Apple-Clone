import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './MediaCarousel.module.css';

// You would typically fetch this data from an API
const dummyMediaData = [
    {
        id: '1',
        title: 'Severance',
        posterUrl: '/images/movie/MurDerBot.jpg',
        linkTo: '/tv/severance'
    },
    {
        id: '2',
        title: 'Foundation',
        posterUrl: '/images/movie/FountainofYouts.jpg',
        linkTo: '/tv/foundation'
    },
    {
        id: '3',
        title: 'The Morning Show',
        posterUrl: '/images/movie/Stick.jpg',
        linkTo: '/tv/the-morning-show'
    },
    {
        id: '4',
        title: 'Silo',
        posterUrl: '/images/movie/TedLasso.jpg',
        linkTo: '/tv/silo'
    },
     {
        id: '5',
        title: 'For All Mankind',
        posterUrl: 'images/movie/TheBuccaneers.jpg',
        linkTo: '/tv/for-all-mankind'
    },
      {
        id: '6',
        title: 'Ted Lasso',
        posterUrl: '/images/movie/TheStudio.jpg',
        linkTo: '/tv/ted-lasso'
    },
     {
        id: '7',
        title: 'Ted Lasso',
        posterUrl: '/images/movie/YourFriends&Neighbors.jpg',
        linkTo: '/tv/ted-lasso'
    },
];

const MediaCarousel = ({ title, mediaItems = dummyMediaData }) => {
    const scrollRef = useRef(null);

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            // Calculate the scroll amount based on the width of one card + gap
            const scrollAmount = current.querySelector(`.${styles.carousel__card}`).offsetWidth + 25;
            
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };
    
    return (
        <section className={styles.carouselSection}>
            {title && <h2 className={styles.carousel__title}>{title}</h2>}
            
            <div className={styles.carousel__wrapper}>
                <button 
                    className={`${styles.carousel__scrollButton} ${styles['carousel__scrollButton--left']}`} 
                    onClick={() => handleScroll('left')}
                    aria-label="Scroll left"
                >
                    ❮
                </button>

                <div className={styles.carousel__list} ref={scrollRef}>
                    {mediaItems.map((item) => (
                        <Link to={item.linkTo} key={item.id} className={styles.carousel__card}>
                            <img 
                                src={item.posterUrl} 
                                alt={item.title} 
                                className={styles.carousel__cardImage} 
                            />
                        </Link>
                    ))}
                </div>

                <button 
                    className={`${styles.carousel__scrollButton} ${styles['carousel__scrollButton--right']}`} 
                    onClick={() => handleScroll('right')}
                    aria-label="Scroll right"
                >
                    ❯
                </button>
            </div>
        </section>
    );
};

export default MediaCarousel;