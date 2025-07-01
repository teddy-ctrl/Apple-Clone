import React from 'react';
import { Link } from 'react-router-dom';
import MediaCarousel from '../components/MediaCarousel/MediaCarousel';


const PromoBlock = ({
  sectionClass,
  title,
  subtitle,
  logoSrc,
  children,
  textColor = 'black', 
  ctaPrimary,
  ctaSecondary
}) => {
  const titleClass = textColor === 'white' ? 'white' : 'black';

  return (
    <section className={`hero ${sectionClass}`}>
      <div className="text-center">
        <div className="title">
          {logoSrc && <img src={logoSrc} alt="" className="logo-icone mx-auto pb-3" />}
          {title && <h2 className={titleClass}>{title}</h2>}
          {subtitle && <h3 className={`pt-1 pb-3 ${titleClass}`}>{subtitle}</h3>}
          {children}
        </div>
        <div className="pt-2">
          {ctaPrimary && <Link className="back-dark" to={ctaPrimary.to}>{ctaPrimary.text}</Link>}
          {ctaSecondary && <Link className="border" to={ctaSecondary.to}>{ctaSecondary.text}</Link>}
        </div>
      </div>
    </section>
  );
};


const GridPromoBlock = (props) => {
    return <PromoBlock {...props} />;
}

const HomePage = () => {
  return (
    <div>
      {/* Full-width Hero Sections */}
      <PromoBlock
        sectionClass="iphone-16-pro"
        title="iPhone 16 Pro"
        subtitle="Hello, Apple intelligence."
        textColor="white"
        ctaPrimary={{ text: 'Learn More', to: '/iphone-16-pro' }}
        ctaSecondary={{ text: 'Buy', to: '/shop/iphone-16-pro' }}
      />

      <PromoBlock
        sectionClass="iphone-16"
        title="iPhone 16"
        subtitle="Hello, Apple Intelligence."
        textColor="black"
        ctaPrimary={{ text: 'Learn More', to: '/iphone-16' }}
        ctaSecondary={{ text: 'Buy', to: '/shop/iphone-16' }}
      />
      
      <PromoBlock
        sectionClass="tv"
        logoSrc="/images/icons/hero_logo_severance__3mdz32tyn762_small_2x.png"
        textColor="white"
        ctaPrimary={{ text: 'Stream now', to: '/tv-plus/severance' }}
      >
        <p className="white h4">Welcome back.</p>
        <p className="white h5">Season 2 starts today.</p>
      </PromoBlock>

      {/* Grid Sections */}
      <div className="containers">
        <div className="promo-grid">
          <GridPromoBlock
            sectionClass="watch"
            logoSrc="/images/icons/promo_logo_apple_watch_series_10__qk5vaa89vnm2_small_2x.png"
            subtitle="Thinstant classic."
            textColor="black"
            ctaPrimary={{ text: 'Learn More', to: '/watch' }}
            ctaSecondary={{ text: 'Buy', to: '/shop/watch' }}
          />
          
          <GridPromoBlock
            sectionClass="ipad"
            title="iPad Pro"
            subtitle="Unblievably thin. Incredibly powerful."
            textColor="white"
            ctaPrimary={{ text: 'Learn More', to: '/ipad-pro' }}
            ctaSecondary={{ text: 'Buy', to: '/shop/ipad-pro' }}
          >
            <p className="title-bottom">Hello, Apple Intelligence.</p>
          </GridPromoBlock>

          <GridPromoBlock
            sectionClass="macbook"
            title="MacBook"
            subtitle="A work of smart."
            textColor="black"
            ctaPrimary={{ text: 'Learn More', to: '/macbook' }}
            ctaSecondary={{ text: 'Buy', to: '/shop/macbook' }}
          />

          <GridPromoBlock
            sectionClass="airpad"
            title="AirPods"
            subtitle="A new kind of magic."
            textColor="white"
            ctaPrimary={{ text: 'Learn More', to: '/airpods' }}
            ctaSecondary={{ text: 'Buy', to: '/shop/airpods' }}
          />

          <GridPromoBlock
            sectionClass="tradein"
            title="Trade In"
            subtitle="Get $180-$650 in credit when you <br /> trade in iPhone 12 or higher.<sup>2</sup>"
            textColor="black"
            ctaSecondary={{ text: 'Get your estimate', to: '/shop/trade-in' }}
          />

          <GridPromoBlock
            sectionClass="card"
            logoSrc="/images/icons/logo__dcojfwkzna2q_small_2x.png"
            subtitle="Get up to 3% Daily Cash Back <br /> with every purchase."
            textColor="black"
            ctaPrimary={{ text: 'Learn More', to: '/apple-card' }}
            ctaSecondary={{ text: 'Apply now', to: '/apple-card/apply' }}
          />
        </div>
      </div>
      <MediaCarousel />
    </div>
  );
};

export default HomePage;