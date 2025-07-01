import React from 'react';
import styles from './Hero.module.css';

const Hero = ({ sectionClass, title, subtitle, links, logoSrc, children, textColor }) => {
  const textStyle = { color: textColor || 'initial' };

  return (
    <div className={`${styles.hero} ${styles[sectionClass]} my-2`}>
      <div className="text-center">
        {logoSrc && (
          <div className={styles.logoIcon}>
            <img src={logoSrc} alt="Product Logo" />
          </div>
        )}
        {title && <h2 style={textStyle}>{title}</h2>}
        {subtitle && <h3 className="pt-1 pb-3" style={textStyle}>{subtitle}</h3>}
        {children /* For custom content like the TV section paragraphs */}
        {links && (
          <div>
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
        )}
      </div>
    </div>
  );
};

export default Hero;