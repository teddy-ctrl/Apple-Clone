// src/components/InfoGrid/InfoGrid.jsx
import React from 'react';
import styles from './InfoGrid.module.css';
const infoItems = [ /* ... data for the four items ... */ ];
const InfoGrid = () => (
    <section className={styles.grid}>
        {infoItems.map(item => (
            <div key={item.title} className={styles.item}>
                <img src={item.iconUrl} alt="" />
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                <a href={item.link}>Learn more {">"}</a>
            </div>
        ))}
    </section>
);
export default InfoGrid;