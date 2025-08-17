import React from 'react';
import styles from './Ipadpage.module.css';

// Import all the necessary building blocks
import IpadSubNav from '../../components/IpadSubNav/IpadSubNav';
import ComparisonGrid from '../../components/ComparisonGrid/ComparisonGrid';
import EssentialsCard from '../../components/EssentialsCard/EssentialsCard';

const IpadPage = () => {
  return (
    <main className={styles.ipadPage}>
      {/* 1. The icon-based sub-navigation at the top */}
      <IpadSubNav />

      {/* 2. The main hero section with the large iPad title */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>iPad</h1>
          <p className={styles.heroSubtitle}>Touch, draw, and type on one magical device.</p>
        </div>
        <div className={styles.heroImageContainer}>
          <img src="/images/ipad/ipad_hero.jpg" alt="A colorful array of iPads" className={styles.heroImage} />
        </div>
      </section>

     

      {/* 4. "Explore the lineup" - The complex comparison grid */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Explore the lineup.</h2>
        <ComparisonGrid productType="ipad" />
      </section>

      {/* 5. "iPad essentials" section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>iPad essentials.</h2>
        <div className={styles.essentialsGrid}>
          <EssentialsCard 
            title="Apple Pencil"
            subtitle="Dream it up. Jot it down."
            link={{ text: "Learn more", to: "/apple-pencil" }}
            imageUrl="/images/ipad/apple_pencil.jpg"
          />
          <EssentialsCard 
            title="Keyboards for iPad"
            subtitle="Type it out. Take it with you."
            link={{ text: "Learn more", to: "/keyboards" }}
            imageUrl="/images/ipad/magic_keyboard.jpg"
          />
        </div>
      </section>

      {/* You can continue adding other sections like "Why Apple is the best..." here */}

    </main>
  );
};

export default IpadPage;