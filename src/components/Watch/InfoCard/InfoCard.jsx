// InfoCard.jsx
import React from 'react';
import styles from './InfoCard.module.css';
const infoData = [
    { title: 'Save with Apple Trade In', description: 'Get $160-$600 in credit toward iPhone 16.' },
    { title: 'Pay over time, interest-free', description: 'When you choose to check out with Apple Card Monthly Installments.' },
    { title: 'Apple. Your one-stop shop for incredible carrier deals.', description: 'Get up to $1000 in credit on a new iPhone with AT&T.' },
    { title: 'Get flexible delivery and easy pickup', description: 'Choose two-hour delivery from an Apple Store or free delivery.' },
];
const InfoCard = () => (
    <div className={styles.grid}>
        {infoData.map(item => (
            <div key={item.title} className={styles.card}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <button className={styles.plusButton}>+</button>
            </div>
        ))}
    </div>
);
export default InfoCard;