import React from 'react';
import styles from './PromoGrid.module.css';

const PromoGrid = ({ sectionClass, title, subtitle, links, logoSrc, textColor, side, children }) => {
  const textStyle = { color: textColor || '#1d1d1f' };
  const marginClass = side === 'left' ? styles.marginRight : styles.marginLeft;
  
  return (
    <div className={`${styles.hero} ${styles[sectionClass]} ${marginClass} my-1`}>
      <div className="text-center pt-5">
        {logoSrc && (
          <h2 className={styles.logoWrapper}>
            <img className={styles.logoIcone} src={logoSrc} alt="Product Logo" />
          </h2>
        )}
        {title && <h2 className="h1" style={textStyle}>{title}</h2>}
        {subtitle && <p className="h5" style={textStyle} dangerouslySetInnerHTML={{ __html: subtitle }} />}
        <div className="pt-2">
           {links.map((link, index) => (
              <a
                key={index}
                className={`border p-2 text-decoration-none ${link.type === 'primary' ? 'back-dark' : ''} ${index > 0 ? '' : 'mr-3'}`}
                href={link.href}
              >
                {link.text}
              </a>
            ))}
        </div>
        {children}
      </div>
    </div>
  );
};

export default PromoGrid;