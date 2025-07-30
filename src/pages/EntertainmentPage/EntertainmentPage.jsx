import React from 'react';
import styles from './EntertainmentPage.module.css';

// Import all the necessary components
import EntertainmentSubNav from '../../components/Entertainment/EntertainmentSubNav/EntertainmentSubNav';
import ServiceSection from '../../components/Entertainment/ServiceSection/ServiceSection';
import AppleOneFooter from '../../components/Entertainment/AppleOneFooter/AppleOneFooter';

// --- Data for each service section ---
// In a real app, this would come from an API/CMS.

const appleOneData = {
  name: 'Apple One',
  headline: 'Get up to six services in one subscription with Apple One.',
  backgroundUrl: '/images/entertainment/apple_one_hero.jpg',
  theme: 'dark'
};

const tvPlusData = {
  name: 'Apple TV+',
  logoUrl: '/images/logos/tv_plus_logo.svg',
  headline: 'Stream award-winning Apple Originals on every screen.',
  backgroundUrl: '/images/entertainment/tv_plus_hero.jpg',
  theme: 'dark',
  carouselItems: [
    { id: 1, imageUrl: '/images/entertainment/tv/acapulco.jpg', title: 'Acapulco', subtitle: 'Comedy' },
    { id: 2, imageUrl: '/images/entertainment/tv/stick.jpg', title: 'Stick', subtitle: 'Comedy' },
    { id: 3, imageUrl: '/images/entertainment/tv/foundation.jpg', title: 'Foundation', subtitle: 'Sci-Fi' },
    { id: 4, imageUrl: '/images/entertainment/tv/smoke.jpg', title: 'Smoke', subtitle: 'Thriller' },
  ]
};

const musicData = {
  name: 'Apple Music',
  logoUrl: '/images/logos/apple_music_logo.svg',
  headline: 'All music. Highest audio quality. Zero ads.',
  backgroundUrl: '/images/entertainment/music_hero.jpg',
  theme: 'dark',
  carouselItems: [
    { id: 1, imageUrl: '/images/entertainment/music/rap_life.jpg', title: 'Rap Life', subtitle: 'Apple Music Hip-Hop' },
    { id: 2, imageUrl: '/images/entertainment/music/todays_hits.jpg', title: 'Today\'s Hits', subtitle: 'Apple Music' },
  ]
};

// ... You would create similar data objects for Arcade, Fitness+, News+, and Podcasts ...

const EntertainmentPage = () => {
  return (
    <main className={styles.entertainmentPage}>
      <EntertainmentSubNav />

      <section className={styles.heroSection}>
        <h1 className={styles.mainTitle}>Meet the A-list of entertainment.</h1>
        <p className={styles.mainSubtitle}>
          Award-winning movies. Binge-worthy shows. Your favorite music mastered in Spatial Audio. The most epic collection of mobile games. And the world’s largest library of 4K Ultra HD fitness content. They all live here — only on Apple.
        </p>
      </section>

      {/* Render the reusable ServiceSection for each service */}
      <ServiceSection {...appleOneData} />
      <ServiceSection {...tvPlusData} />
      <ServiceSection {...musicData} />
      {/* <ServiceSection {...arcadeData} /> */}
      {/* <ServiceSection {...fitnessData} /> */}
      {/* <ServiceSection {...newsData} /> */}
      {/* <ServiceSection {...podcastsData} /> */}
      
      <AppleOneFooter />
    </main>
  );
};

export default EntertainmentPage;