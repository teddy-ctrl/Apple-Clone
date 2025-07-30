import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PromoCard.module.css'; // Correctly imports its own CSS module

const PromoCard = ({
  sectionClass,
  textColor = 'black', 
  logoSrc,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  bottomContent,
}) => {
  const theme = textColor === 'white' ? 'dark' : 'light';
  const titleClass = textColor === 'white' ? 'white' : 'black';

  return (
    // Uses the .promoCard class from its CSS module
    <section className={`${styles.promoCard} ${styles[sectionClass]}`} data-theme={theme}>
      <div className="text-center">
        {logoSrc && <img src={logoSrc} alt="" className={`${styles.logoIcone} mx-auto`} />}
        {title && <h2 className={titleClass}>{title}</h2>}
        {subtitle && <h3 className={`pt-1 pb-3 ${titleClass}`} dangerouslySetInnerHTML={{ __html: subtitle }} />}
        
        <div className="pt-2">
          {ctaPrimary && <Link className={styles.primary} to={ctaPrimary.to}>{ctaPrimary.text}</Link>}
          {ctaSecondary && <Link className={styles.secondary} to={ctaSecondary.to}>{ctaSecondary.text}</Link>}
        </div>
        
        {bottomContent && (
            <div className={styles.bottomContent}>
                {bottomContent}
            </div>
        )}
      </div>
    </section>
  );
};

export default PromoCard;