// src/components/SupportCard/SupportCard.jsx
import React from 'react';
import styles from './SupportCard.module.css';
const SupportCard = ({ title, text, linkText, buttonText, imageUrl, layout = 'default' }) => (
    <div className={`${styles.card} ${styles[layout]}`}>
        <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
            {linkText && <a href="#" className={styles.link}>{linkText}{" >"}</a>}
            {buttonText && <button className={styles.button}>{buttonText}</button>}
        </div>
        {imageUrl && <div className={styles.imageContainer}><img src={imageUrl} alt="" /></div>}
    </div>
);
export default SupportCard;