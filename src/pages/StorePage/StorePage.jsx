import React from 'react';
import styles from './StorePage.module.css';

// Import all the necessary components
import StoreCategoryNav from '../../components/Store/StoreCategoryNav/StoreCategoryNav';
import Carousel from '../../components/Store/Carousel/Carousel';
import LargePromoCard from '../../components/Store/LargePromoCard/LargePromoCard';
import HelpCard from '../../components/Store/HelpCard/HelpCard';
import DifferenceCard from '../../components/Store/DifferenceCard/DifferenceCard';
import ProductCard from '../../components/Store/ProductCard/ProductCard';
// import ExperienceCard from '../../components/Store/ExperienceCard/ExperienceCard';

// In a real app, all this data would come from an API/CMS
const latestData = [
  { id: 1, eyebrow: 'LIMITED-TIME OFFER', title: 'Save on Mac and iPad for college, choose AirPods or an eligible accessory.', imageUrl: '/images/store/latest_college.jpg', theme: 'light' },
  { id: 2, eyebrow: '', title: 'iPhone 16 Pro', price: 'From $999 or $41.62/mo.', imageUrl: '/images/store/latest_iphone16pro.jpg', theme: 'dark' },
  { id: 3, eyebrow: '', title: 'MacBook Air', price: 'From $999 or $83.25/mo.', imageUrl: '/images/store/latest_macbookair.jpg', theme: 'light' },
  { id: 4, eyebrow: '', title: 'iPad Air', price: 'From $599 or $49.91/mo.', imageUrl: '/images/store/latest_ipadair.jpg', theme: 'light' },
];
const helpData = [
  { id: 1, eyebrow: 'APPLE SPECIALIST', title: 'Shop one on one with a Specialist. Online or in a store.', imageUrl: '/images/store/help_specialist.jpg' },
  { id: 2, eyebrow: '', title: 'Shop with a Specialist over video.', description: 'Choose your next device in a guided, one-way video session.', imageUrl: '' },
  { id: 3, eyebrow: 'TODAY AT APPLE', title: 'Explore Apple Intelligence', description: 'Come try it for yourself in a free session at the Apple Store.', imageUrl: '/images/store/help_ai.jpg' },
];
const accessoriesData = [
  { id: 1, name: 'iPhone 16 Pro Max Silicone Case - Peony', price: '$49.00', imageUrl: '/images/accessories/iphone-case-peony.jpg' },
  { id: 2, name: 'iPhone 16 Clear Case with MagSafe', price: '$49.00', imageUrl: '/images/accessories/iphone-case-clear.jpg' },
  { id: 3, name: '46mm Tangerine Sport Band', price: '$49.00', imageUrl: '/images/accessories/watch_band_tangerine.jpg' },
  { id: 4, name: 'iPhone 16e Silicone Case - Lake Green', price: '$39.00', imageUrl: '/images/accessories/iphone-case-green.jpg' },
];
// ... Add data for all other sections as needed

const StorePage = () => {
  return (
    <main className={styles.storePage}>
      {/* 1. Banners and Main Title */}
      <div className={styles.topBanner}>For a limited time, shop tax-free on select products in certain states — online and in-store. <a href="#">Learn more {">"}</a></div>
      <section className={styles.heroSection}>
        <h1 className={styles.mainTitle}>Store. <span className={styles.subtleText}>The best way to buy the products you love.</span></h1>
        <div className={styles.helpLinks}>
          <a href="#">Need shopping help? Ask a Specialist {">"}</a>
          <a href="#">Visit an Apple Store. Find one near you {">"}</a>
        </div>
      </section>

      {/* 2. Category Navigation */}
      <StoreCategoryNav />

      {/* 3. "The latest" Carousel */}
      <Carousel title="The latest." subtitle="Take a look at what’s new, right now.">
        {latestData.map(item => <LargePromoCard key={item.id} {...item} />)}
      </Carousel>

      {/* 4. "Help is here" Carousel */}
      <Carousel title="Help is here." subtitle="Whenever and however you need it.">
        {helpData.map(item => <HelpCard key={item.id} {...item} />)}
      </Carousel>

      {/* 5. "The Apple Store difference" Grid */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Apple Store difference. <span className={styles.subtleText}>Even more reasons to shop with us.</span></h2>
        <DifferenceCard />
      </section>

      {/* 6. "Accessories" Carousel */}
      <Carousel title="Accessories." subtitle="Essentials that pair perfectly with your favorite devices.">
        <ProductCard name="Here and wow." description="The accessories you love. In a fresh mix of colors." imageUrl="/images/store/accessories_hero.jpg" isPromoCard={true} />
        {accessoriesData.map(item => <ProductCard key={item.id} {...item} />)}
      </Carousel>
      
      {/* Add other sections ("Loud and clear", "The Apple experience", etc.) here using the same Carousel and Card patterns */}

    </main>
  );
};

export default StorePage;