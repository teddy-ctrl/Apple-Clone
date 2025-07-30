// src/components/HelpGrid/HelpGrid.jsx
import React from 'react';
import styles from './HelpGrid.module.css';

const helpData = [
    { title: 'Get help buying', text: 'Have a question? Call a Specialist or chat online.', linkText: 'Contact us', icon: '/images/icons/help_chat.svg' },
    { title: 'Make them yours', text: 'Engrave your AirPods with your initials or favorite emoji - free. Only at Apple.', linkText: 'Learn more', icon: '/images/icons/help_engrave.svg' },
    { title: 'Fast, free delivery', text: 'Or pick up available items at an Apple Store.', linkText: 'Learn more', icon: '/images/icons/help_delivery.svg' },
    { title: 'Pay monthly at 0% APR', text: 'You can pay over time when you choose to check out with Apple Card Monthly Installments.', linkText: 'Learn more', icon: '/images/icons/help_payment.svg' },
];

const HelpGrid = () => (
    <section className={styles.helpSection}>
        <div className={styles.grid}>
            {helpData.map(item => (
                <div key={item.title} className={styles.item}>
                    <img src={item.icon} alt="" className={styles.icon} />
                    <h4 className={styles.title}>{item.title}</h4>
                    <p className={styles.text}>{item.text}</p>
                    <a href="#" className={styles.link}>{item.linkText} {">"}</a>
                </div>
            ))}
        </div>
    </section>
);
export default HelpGrid;