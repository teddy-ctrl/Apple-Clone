import React from 'react';
import styles from './WatchPage.module.css';

// Import all necessary components
import WatchSubNav from '../../components/Watch/WatchSubNav/WatchSubNav';
import PromoBanner from '../../components/Watch/PromoBanner/PromoBanner';
import ComparisonGrid from '../../components/ComparisonGrid/ComparisonGrid';
import StudioPromo from '../../components/Watch/StudioPromo/StudioPromo';
import InfoCard from '../../components/Watch/InfoCard/InfoCard';
import EssentialsCard from '../../components/Watch/EssentialsCard/EssentialsCard';
import Accordion from '../../components/Watch/Accordion/Accordion';

const WatchPage = () => {
  return (
    <main className={styles.watchPage}>
      {/* 1. Sub-navigation */}
      <WatchSubNav />
      <div className={styles.fitnessBanner}>
        <p>Get 3 months of Apple Fitness+ when you buy any Apple Watch. <a href="/shop/apple-watch">Shop Apple Watch</a></p>
      </div>

      {/* 2. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Apple Watch</h1>
          <p className={styles.heroSubtitle}>The ultimate device <br />for a healthy life.</p>
        </div>
        <div className={styles.heroVideoContainer}>
          <video src="/videos/watch_hero_video.mp4" autoPlay loop muted playsInline />
        </div>
      </section>

      {/* 3. Pride Edition Promo Banner */}
      <PromoBanner />

     

      {/* 5. "Explore the lineup" Comparison Grid */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Explore the lineup.</h2>
        <ComparisonGrid productType="watch" />
      </section>

      {/* 6. Apple Watch Studio Promo */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Apple Watch Studio</h2>
        <StudioPromo />
      </section>

      {/* 7. "Why Apple is the best place to buy" */}
      <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Apple is the best <br /> place to buy Apple Watch.</h2>
          <InfoCard />
      </section>

      {/* 8. "Apple Watch essentials" */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Apple Watch essentials.</h2>
        <div className={styles.essentialsGrid}>
          <EssentialsCard
            title="A splash of color."
            subtitle="Shop Apple Watch bands"
            link={{ text: "Shop Apple Watch bands", to: "/shop/bands" }}
            imageUrl="/images/watch/watch_bands.jpg"
          />
          <EssentialsCard
            title="Magic runs in the family."
            subtitle="Explore all AirPods models and find the best ones for you."
            link={{ text: "Learn more", to: "/airpods" }}
            imageUrl="/images/watch/airpods_family.jpg"
          />
        </div>
      </section>
      
      {/* 9. "Made for each other" Accordion */}
      <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Made for each other.</h2>
          <Accordion productType="watch" />
      </section>
    </main>
  );
};

export default WatchPage;