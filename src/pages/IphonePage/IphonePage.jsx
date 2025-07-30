import React from 'react';
import styles from './IphonePage.module.css';

// Import all the necessary building blocks
import ComparisonGrid from '../../components/ComparisonGrid/ComparisonGrid';
import EssentialsCard from '../../components/Iphone/EssentialsCard/EssentialsCard';
import InfoCard from '../../components/Iphone/InfoCard/InfoCard';
import Accordion from '../../components/Iphone/Accordion/Accordion';
import IphoneSubNav from '../../components/Iphone/IphoneSubNav/IphoneSubNav';

const IphonePage = () => {
  return (
    <main className={styles.iphonePage}>
      {/* 1. Sub-navigation */}
      <IphoneSubNav />
      <div className={styles.tradeInBanner}>
        <p>Get $160-$600 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher. <a href="/shop/trade-in">Shop iPhone</a></p>
      </div>

      {/* 2. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>iPhone</h1>
          <p className={styles.heroSubtitle}>Designed to be loved.</p>
        </div>
        <div className={styles.heroImageContainer}>
          <img src="/images/iphone/iphone_hero.jpg" alt="iPhone 16 Pro" />
        </div>
      </section>

      {/* 3. "Get to know iPhone" Carousel */}

      {/* 4. "Explore the lineup" Comparison Grid */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Explore the lineup.</h2>
        <ComparisonGrid productType="iphone" />
      </section>

      {/* 5. "Take a closer look" Video Promo */}
      <section className={styles.videoPromo}>
        <h2 className={styles.sectionTitle}>Take a closer look.</h2>
        <div className={styles.videoWrapper}>
            <video src="/videos/iphone_guided_tour.mp4" autoPlay loop muted playsInline />
            <div className={styles.videoOverlay}>
                <h3>A Guided Tour of <br/> iPhone 16 & iPhone 16 Pro</h3>
                <button className={styles.watchButton}>Watch the film</button>
            </div>
        </div>
      </section>

      {/* 6. "Why Apple is the best place to buy iPhone" */}
      <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Apple is the best <br/> place to buy iPhone.</h2>
          <InfoCard />
      </section>

      {/* 7. "iPhone essentials" */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>iPhone essentials.</h2>
        <div className={styles.essentialsGrid}>
          <EssentialsCard
            title="iPhone accessories"
            subtitle="Explore colorful cases, USB-C Power adapters, MagSafe accessories, and more."
            link={{ text: "Shop iPhone accessories", to: "/accessories" }}
            imageUrl="/images/iphone/iphone_accessories.jpg"
          />
          <EssentialsCard
            title="AirTag"
            subtitle="Attach one to your keys. Put another in your backpack. If they’re misplaced, just use the Find My app."
            link={{ text: "Buy", to: "/shop/airtag" }}
            imageUrl="/images/iphone/airtag.jpg"
          />
        </div>
      </section>
      
      {/* 8. "Significant others" Accordion */}
      <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Significant others.</h2>
          <Accordion />
      </section>

    </main>
  );
};

export default IphonePage;