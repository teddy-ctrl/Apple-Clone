// src/components/DifferenceCard/DifferenceCard.jsx
import React from 'react';
import styles from './DifferenceCard.module.css';
const differenceData = [
  { title: 'Trade in your current device.', text: 'Get credit toward a new one.', icon: '/images/icons/trade-in.svg' },
  { title: 'Make them yours.', text: 'Engrave a mix of emoji, names, and numbers for free.', icon: '/images/icons/engrave.svg' },
  // ... add all 6 items
];
const DifferenceCard = () => (
    <div className={styles.grid}>
        {differenceData.map(item => (
            <div key={item.title} className={styles.card}>
                <img src={item.icon} alt="" />
                <h4>{item.title}</h4>
                <p>{item.text}</p>
            </div>
        ))}
    </div>
);
export default DifferenceCard;