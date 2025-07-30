import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EssentialsCard.module.css';

const EssentialsCard = ({ title, subtitle, link, imageUrl }) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                {title && <h3 className={styles.title}>{title}</h3>}
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                
                {/* --- THIS IS THE FIX --- */}
                {link && (
                    <Link to={link.to} className={styles.link}>
                        {link.text}
                        {/* 
                          Use {' >'} to render the greater-than symbol correctly.
                          The space before it is for proper visual spacing.
                        */}
                        {' >'} 
                    </Link>
                )}
            </div>
            
            {imageUrl && <img src={imageUrl} alt={title || ''} className={styles.image} />}
        </div>
    );
};

export default EssentialsCard;