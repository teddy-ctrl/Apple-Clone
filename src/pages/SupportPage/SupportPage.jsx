import React from 'react';
import styles from './SupportPage.module.css';

// Import all necessary components
import SupportNav from '../../components/Support/SupportNav/SupportNav';
import SupportCard from '../../components/Support/SupportCard/SupportCard';
import WarningCardGrid from '../../components/Support/WarningCardGrid/WarningCardGrid';
import ServicePrograms from '../../components/Support/ServicePrograms/ServicePrograms';

const SupportPage = () => {
  return (
    <main className={styles.supportPage}>
      {/* 1. Header Image Collage */}
      <div className={styles.imageCollage}>
        <img src="/images/support/support_collage.jpg" alt="People using Apple products" />
      </div>

      {/* 2. Main Title */}
      <section className={styles.section}>
        <h1 className={styles.mainTitle}>Apple Support</h1>
      </section>

      {/* 3. Product Navigation */}
      <SupportNav />

      {/* 4. Common Issues & Search */}
      <section className={styles.searchSection}>
        <div className={styles.commonIssues}>
          <a href="#" className={styles.issueCard}>Forgot Apple Account password</a>
          <a href="#" className={styles.issueCard}>Apple Repair</a>
          <a href="#" className={styles.issueCard}>Billing and subscriptions</a>
        </div>
        <h2 className={styles.sectionTitle}>Search for more topics</h2>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search Support" />
        </div>
      </section>

      {/* 5. Support Cards */}
      <div className={styles.cardGrid}>
        <SupportCard
          title="Apple Support on YouTube"
          text="Check out our official YouTube channel to get the most out of the latest features, devices, and services."
          linkText="Visit Apple Support on YouTube"
          imageUrl="/images/support/youtube_promo.png"
        />
        <SupportCard
          title="Get Support"
          text="Give us a few details and we’ll offer the best solution. Connect by phone, chat, email, and more."
          buttonText="Start now"
          imageUrl="/images/support/get_support_promo.png"
          layout="imageTop"
        />
        <SupportCard
          title="Apple Support app"
          text="Get help for all of your Apple products in one place, or connect with an expert."
          linkText="Get to know the Apple Support app"
          imageUrl="/images/support/support_app_promo.png"
          layout="imageTop"
        />
        <SupportCard
          title="My Support"
          text="Get warranty information, check your coverage status, or look up an existing repair."
          linkText="Sign in with your Apple ID"
        />
      </div>

      {/* 6. AppleCare and Warnings Grid */}
      <WarningCardGrid />

      {/* 7. Service Programs List */}
      <ServicePrograms />
    </main>
  );
};

export default SupportPage;