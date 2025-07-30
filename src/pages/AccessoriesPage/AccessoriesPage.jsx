import React from 'react';
import styles from './AccessoriesPage.module.css';

// Import all necessary components
import AccessoriesNav from '../../components/Accessories/AccessoriesNav/AccessoriesNav';
import ProductGrid from '../../components/Accessories/ProductGrid/ProductGrid';
import InfoGrid from '../../components/Accessories/InfoGrid/InfoGrid';

// --- In a real app, this data would come from an API/CMS ---
const playfulPicksData = [
  { id: 1, name: 'mophie 3-in-1 Travel Charger', price: '$149.95', imageUrl: '/images/accessories/mophie-charger.jpg', tag: 'Only at Apple' },
  { id: 2, name: 'Tech21 Translucent EvoPop Case - Coral', price: '$39.95', imageUrl: '/images/accessories/tech21-case.jpg' },
  { id: 3, name: 'PopSockets MagSafe Grip - Blueberry', price: '$34.95', imageUrl: '/images/accessories/popsocket.jpg' },
];
const iphoneAccessoriesData = [
  { id: 1, name: 'iPhone 16 Plus Silicone Case - Peony', price: '$49.00', imageUrl: '/images/accessories/iphone-case-peony.jpg' },
  { id: 2, name: 'iPhone 16 Pro Clear Case with MagSafe', price: '$49.00', imageUrl: '/images/accessories/iphone-case-clear.jpg' },
  { id: 3, name: 'iPhone 16e Silicone Case - Winter Blue', price: '$39.00', imageUrl: '/images/accessories/iphone-case-blue.jpg' },
];
// ... you would create similar data arrays for iPad, Watch, Mac, etc.

const AccessoriesPage = () => {
  return (
    <main className={styles.accessoriesPage}>
      {/* 1. Main Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Accessorize in a snap.</h1>
          <p className={styles.heroSubtitle}>Find a MagSafe case, wallet, or charger that’s right for you.</p>
          <a href="/shop/magsafe" className={styles.heroLink}>Shop MagSafe {">"}</a>
        </div>
        <div className={styles.heroImageContainer}>
          <img src="/images/accessories/magsafe_hero.jpg" alt="MagSafe accessories" />
        </div>
      </section>

      {/* 2. "Find the accessories" Navigation */}
      <AccessoriesNav />

      {/* 3. Reusable Product Grids for each category */}
      <ProductGrid title="Playful Picks" products={playfulPicksData} />
      <ProductGrid title="Featured iPhone Accessories" products={iphoneAccessoriesData} />
      {/* <ProductGrid title="Featured iPad Accessories" products={ipadAccessoriesData} /> */}
      {/* <ProductGrid title="Apple Watch Bands" products={watchBandsData} /> */}
      {/* <ProductGrid title="Featured Mac Accessories" products={macAccessoriesData} /> */}
      {/* <ProductGrid title="Sound Essentials" products={soundEssentialsData} /> */}
      {/* <ProductGrid title="AirTag" products={airtagData} /> */}
      
      {/* 4. Info Grid for delivery, pickup, etc. */}
      <InfoGrid />
    </main>
  );
};

export default AccessoriesPage;