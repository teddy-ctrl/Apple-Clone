import React from 'react';
import styles from './AirpodsPage.module.css';

// Import all necessary components
import AirpodsSubNav from '../../components/Airpads/AirpodsSubNav/AirpodsSubNav';
import LargePromo from '../../components/Airpads/LargePromo/LargePromo';
import ComparisonGrid from '../../components/Airpads/ComparisonGrid/ComparisonGrid';
import HelpGrid from '../../components/Airpads/HelpGrid/HelpGrid';

const AirpodsPage = () => {
  return (
    <main className={styles.airpodsPage}>
      {/* 1. Sub-navigation */}
      <AirpodsSubNav />
      <div className={styles.infoBanner}>
        <p>AirPods Pro 2 now feature a scientifically validated Hearing Test and clinical-grade Hearing Aid capability. <a href="#">Learn more</a></p>
      </div>

      {/* 2. Stacked Hero Sections */}
      <LargePromo
        title="AirPods 4"
        subtitle="The next evolution of sound and comfort."
        priceInfo="Starting at $129"
        ancInfo="With Active Noise Cancellation $179"
        theme="light"
        alignment="bottomLeft"
        backgroundImageUrl="/images/airpods/airpods_4_hero.jpg"
      />
      <LargePromo
        title="AirPods Pro 2"
        subtitle="The world's first end-to-end hearing health experience."
        priceInfo="$249"
        ancInfo="Features available with a free software update."
        theme="dark"
        alignment="bottomCenter"
        backgroundImageUrl="/images/airpods/airpods_pro_hero.jpg"
      />
      <LargePromo
        title="AirPods Max"
        subtitle="For fresh colors. Bold sound."
        priceInfo="$549"
        theme="light"
        alignment="bottomCenter"
        backgroundImageUrl="/images/airpods/airpods_max_hero.jpg"
      />

      {/* 3. "Which AirPods are right for you?" Comparison */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Which AirPods are right for you?</h2>
        <ComparisonGrid productType="airpods" />
      </section>
      
     

      {/* 5. Apple Music Promo */}
      <section className={`${styles.section} ${styles.musicPromo}`}>
        <div className={styles.musicContent}>
            <img src="/images/icons/apple_music_logo.svg" alt="Apple Music" />
            <h3>Get 3 months of Apple Music free with your AirPods.*</h3>
            <a href="#">Learn more {">"}</a>
        </div>
        <div className={styles.musicImage}>
            <img src="/images/airpods/apple_music_promo.jpg" alt="Album art" />
        </div>
      </section>

      {/* 6. Help Grid */}
      <HelpGrid />
    </main>
  );
};

export default AirpodsPage;