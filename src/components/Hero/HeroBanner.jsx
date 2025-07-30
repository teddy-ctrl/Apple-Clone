// src/components/Hero/HeroBanner.js

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroBanner.module.css';
import HlsVideoPlayer from '../HlsVideoPlayer.jsx'; //

const HeroBanner = ({ sectionClass, title, subtitle, links, logoSrc, children, textColor, videoSrc }) => {
  const titleClass = textColor === 'white' ? 'white' : 'black';

  return (
    <div className={`${styles.bannerWrapper} ${styles[sectionClass]}`}>
      
      {/* --- THIS IS THE NEW VIDEO ELEMENT --- */}
    {videoSrc && (
  <HlsVideoPlayer
    className={styles.backgroundVideo} 
    src={videoSrc} // Pass the HLS URL here
  />
)}

      {/* The content is now wrapped to ensure it sits on top of the video */}
      <div className={styles.contentOverlay}>
        <div className="text-center">
          {logoSrc && (
            <div className={styles.logoWrapper}>
              <img src={logoSrc} alt="Product Logo" />
            </div>
          )}
          {title && <h2 className={titleClass}>{title}</h2>}
          {subtitle && <h3 className={`pt-1 pb-3 ${titleClass}`}>{subtitle}</h3>}
          {children}
          
          {links && (
            <div className={styles.linksWrapper}>
              {links.map((link, index) => (
                <Link
                  key={index}
                  className={`${styles.ctaLink} ${link.type === 'primary' ? styles.primary : styles.secondary}`}
                  to={link.href}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;