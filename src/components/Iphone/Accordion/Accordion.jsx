// Accordion.jsx
import React, { useState } from 'react';
import styles from './Accordion.module.css';

const accordionData = [
    { title: 'iPhone and Mac', content: 'With iPhone Mirroring, you can view your iPhone screen on your Mac. Continuity features also let you answer calls, etc.' },
    { title: 'iPhone and Apple Watch', content: 'Content for iPhone and Apple Watch.' },
    { title: 'iPhone and AirPods', content: 'Content for iPhone and AirPods.' },
];

const AccordionItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.item}>
            <button className={styles.header} onClick={() => setIsOpen(!isOpen)}>
                <span>{item.title}</span>
                <span className={`${styles.icon} ${isOpen ? styles.open : ''}`}></span>
            </button>
            <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
                <div className={styles.contentInner}>{item.content}</div>
            </div>
        </div>
    );
};

const Accordion = () => (
    <div className={styles.accordion}>
        <div className={styles.textColumn}>
            {accordionData.map(item => <AccordionItem key={item.title} item={item} />)}
        </div>
        <div className={styles.imageColumn}>
            <img src="/images/iphone/significant_others.jpg" alt="iPhone and Mac working together" />
        </div>
    </div>
);
export default Accordion;