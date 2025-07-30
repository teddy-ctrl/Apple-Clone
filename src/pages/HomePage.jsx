import React from 'react';

// Import your custom components
import MediaCarousel from '../components/MediaCarousel/MediaCarousel';
import HeroSlider from '../components/HeroSlider/HeroSlider';

// 1. IMPORT BOTH of your specialized components
import HeroBanner from '../components/Hero/HeroBanner'; // For full-width sections
import PromoCard from '../components/PromoCard/PromoCard';   // For grid items

// This alias is for the grid items only
const GridPromoBlock = (props) => {
    return <PromoCard {...props} />;
}

// The main HomePage component
const HomePage = () => {
  return (
    <div>
      {/* =================================================== */}
      {/* 1. Full-width Hero Sections using HeroBanner      */}
      {/* =================================================== */}

      <HeroBanner
        sectionClass="iphone16pro" // This class is defined in HeroBanner.module.css
        title="iPhone 16 Pro"
        subtitle="So Pro. So Smart."
        textColor="white"
        links={[
          { type: 'primary', text: 'Learn More', href: '/iphone-16-pro' },
          { type: 'secondary', text: 'Buy', href: '/shop/iphone-16-pro' }
        ]}
      />

      <HeroBanner
        sectionClass="iphone16" // This class is defined in HeroBanner.module.css
        title="iPhone 16"
        subtitle="A total powerhouse."
        textColor="white"
        links={[
          { type: 'primary', text: 'Learn More', href: '/iphone' },
          { type: 'secondary', text: 'Buy', href: '/iphone' }
        ]}
      />
      
      <HeroBanner
      sectionClass="tv"
       videoSrc="https://www.apple.com/105/media/us/home/2025/e69c4c5d-18bd-4bf4-a4d2-ba70ee7bece6/films/visual-intelligence-event/home-visual-intelligence-event-tpl-us-2025_16x9.m3u8"
        title="Apple Intelligence"
        textColor="white"
        links={[
          { type: 'primary', text: 'Watch the clip', href: '/tv-plus/severance' },
          { type: 'secondary', text: 'Learn more', href: '/tv-plus' }
        ]}
      >
        <p className="white" style={{ fontSize: '21px', marginTop: '10px' }}>
         Turn a Poster into a Calendar event with visual intelligence.
        </p>
      </HeroBanner>

      {/* =================================================== */}
      {/* 2. Grid Sections using PromoCard / GridPromoBlock */}
      {/* =================================================== */}
      <div className="promo-grid">
          
          {/* --- WATCH --- */}
          <GridPromoBlock
            sectionClass="watch" // This class is defined in PromoCard.module.css
            logoSrc="/images/icons/promo_logo_apple_watch_series_10.png"
            subtitle="Thinstant classic."
            textColor="black"
            ctaPrimary={{ text: 'Learn More', to: '/watch' }}
            ctaSecondary={{ text: 'Buy', to: '/shop/watch' }}
          />
          
          {/* --- iPAD PRO --- */}
          <GridPromoBlock
            sectionClass="ipad" // This class is defined in PromoCard.module.css
            title="iPad Pro"
            subtitle="Unbelievably thin. Incredibly powerful."
            textColor="white"
            ctaPrimary={{ text: 'Learn More', to: '/ipad-pro' }}
            ctaSecondary={{ text: 'Buy', to: '/shop/ipad-pro' }}
            bottomContent={<p>Hello, Apple Intelligence.</p>}
          />

          {/* --- MACBOOK --- */}
          <GridPromoBlock
            sectionClass="macbook" // This class is defined in PromoCard.module.css
            title="MacBook"
            subtitle="A work of smarts."
            textColor="white"
            ctaPrimary={{ text: 'Learn More', to: '/macbook' }}
            ctaSecondary={{ text: 'Buy', to: '/shop/macbook' }}
          />

          {/* --- AIRPODS --- */}
          <GridPromoBlock
            sectionClass="airpods" // This class is defined in PromoCard.module.css
            title="AirPods"
            subtitle="A new kind of magic."
            textColor="white"
            ctaPrimary={{ text: 'Learn More', to: '/airpods' }}
            ctaSecondary={{ text: 'Buy', to: '/shop/airpods' }}
          />

          {/* --- TRADE IN --- */}
          <GridPromoBlock
            sectionClass="tradein" // This class is defined in PromoCard.module.css
            title="Trade In"
            subtitle="Get $180-$650 in credit when you <br /> trade in iPhone 12 or higher.<sup>2</sup>"
            textColor="black"
            ctaSecondary={{ text: 'Get your estimate', to: '/shop/trade-in' }}
          />

          {/* --- CARD --- */}
          <GridPromoBlock
            sectionClass="card" // This class is defined in PromoCard.module.css
            logoSrc="/images/icons/logo_apple_card.png"
            subtitle="Get up to 3% Daily Cash Back <br /> with every purchase."
            textColor="black"
            ctaPrimary={{ text: 'Learn More', to: '/apple-card' }}
            ctaSecondary={{ text: 'Apply now', to: '/apple-card/apply' }}
          />
      </div>

      {/* =================================================== */}
      {/* 3. Other Page Components                        */}
      {/* =================================================== */}
      <HeroSlider />
      <MediaCarousel />

    </div>
  );
};

export default HomePage;