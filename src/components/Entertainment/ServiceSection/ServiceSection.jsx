// src/components/ServiceSection/ServiceSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceSection.module.css';
import ContentCard from '../ContentCard/ContentCard';

const ServiceSection = ({ name, logoUrl, headline, backgroundUrl, theme, carouselItems }) => {
    return (
        <section className={`${styles.serviceSection} ${styles[theme]}`} style={{ backgroundImage: `url(${backgroundUrl})` }}>
            <div className={styles.contentOverlay}>
                <div className={styles.header}>
                    {logoUrl && <img src={logoUrl} alt={`${name} logo`} className={styles.logo} />}
                    <span className={styles.bundleTag}>Bundle with One</span>
                </div>
                <h2 className={styles.headline}>{headline}</h2>
                <div className={styles.links}>
                    <Link to="#" className={styles.primaryButton}>Try it free</Link>
                    <Link to="#" className={styles.secondaryLink}>Learn more {">"}</Link>
                </div>
            </div>
            {carouselItems && (
                <div className={styles.carousel}>
                    {carouselItems.map(item => <ContentCard key={item.id} {...item} />)}
                </div>
            )}
        </section>
    );
};
export default ServiceSection;