import React from 'react';
import styles from './TvHomePage.module.css';

// Import all necessary components
import HomeSubNav from '../../components/TvHome/HomeSubNav/HomeSubNav';
import ProductCard from '../../components/TvHome/ProductCard/ProductCard';
import FeatureCard from '../../components/TvHome/FeatureCard/FeatureCard';
import AccessoryCard from '../../components/TvHome/AccessoryCard/AccessoryCard';
import EntertainmentGrid from '../../components/TvHome/EntertainmentGrid/EntertainmentGrid';
// import HelpGrid from '../../components/HelpGrid/HelpGrid';

const TvHomePage = () => {
  return (
    <main className={styles.homePage}>
      {/* 1. Sub-navigation */}
      <HomeSubNav />

      {/* 2. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>The future hits home.</h1>
          <p className={styles.heroSubtitle}>
            Simply connect your favorite devices and transform your house into a remarkably smart, convenient, and entertaining home. Elevate movie night with theater-like picture and sound. Play any song, in any room, from anywhere. And control lights, locks, and thermostats using Siri. All with the security and privacy of Apple.
          </p>
        </div>
        <div className={styles.heroImageContainer}>
          <img src="/images/home/homepod_hero.png" alt="HomePod and HomePod mini" />
        </div>
      </section>

      {/* 3. Product Promo Grid */}
      <div className={styles.productGrid}>
        <ProductCard title="Profound sound." eyebrow="HomePod" price="$299" imageUrl="/images/home/promo_homepod.jpg" theme="dark" />
        <ProductCard title="Surprising sound for its size." eyebrow="HomePod mini" price="$99" imageUrl="/images/home/promo_homepod_mini.jpg" theme="light" />
        <ProductCard title="The Apple experience. Cinematic in every sense." eyebrow="Apple TV 4K" price="Starting at $129" imageUrl="/images/home/promo_tv4k.jpg" theme="light" />
        <ProductCard title="The foundation for a smarter home." eyebrow="Home app" imageUrl="/images/home/promo_home_app.jpg" theme="light" />
      </div>

      {/* 4. "Every reason to..." Feature Grid */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Every reason to turn your house into a smart home.</h2>
        <div className={styles.featureGrid}>
          <FeatureCard title="Easily control your home from anywhere with your favorite devices." linkText="Learn more about the Home app" imageUrl="/images/home/feature_control.jpg" />
          <FeatureCard title="Seamlessly connected entertainment in every room." linkText="Learn more about HomePod" imageUrl="/images/home/feature_entertainment.jpg" />
          <FeatureCard title="Run it all with your voice." linkText="Learn more about Siri" imageUrl="/images/home/feature_siri.png" />
          <FeatureCard title="All with the security and privacy of Apple." linkText="Learn more about Privacy" imageUrl="/images/home/feature_privacy.png" />
        </div>
      </section>

      {/* 5. Accessories Grid */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Accessories. Around your home and across your devices.</h2>
        <div className={styles.accessoryGrid}>
          <AccessoryCard category="Lighting" description="Put your home in its best light..." imageUrl="/images/home/accessory_lighting.jpg" productName="Nanoleaf A19 Bulb" />
          <AccessoryCard category="Security" description="Keep an eye on what matters most..." imageUrl="/images/home/accessory_security.jpg" productName="Logitech Circle View Wired Doorbell" />
          <AccessoryCard category="Comfort" description="Turn up the heat or keep your cool..." imageUrl="/images/home/accessory_comfort.jpg" productName="ecobee Smart Thermostat" />
          <AccessoryCard category="Entry" description="Unlock more ways to access your home..." imageUrl="/images/home/accessory_entry.jpg" productName="Level Lock+ with Home Key Support" />
        </div>
      </section>

      {/* 6. Entertainment Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Watch, sing, play, and work out. On the big screen.</h2>
        <EntertainmentGrid />
      </section>
      
      {/* 7. Help Grid */}
      {/* <HelpGrid /> */}

    </main>
  );
};

export default TvHomePage;