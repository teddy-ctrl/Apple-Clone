// src/components/WarningCardGrid/WarningCardGrid.jsx
import React from 'react';
import styles from './WarningCardGrid.module.css';
const cards = [ { title: 'Handled with AppleCare', text: 'Every AppleCare plan provides one-stop service...', link: 'Learn more about AppleCare' }, { title: 'Designing for longevity', text: 'At Apple, we are always working to create the best experience for our customers...', link: 'Learn more about Apple’s approach...' }, { title: 'Beware of counterfeit parts', text: 'Some counterfeit and third party power adapters...', link: 'Learn more' }, { title: 'Be aware of gift card scams', text: 'Be aware of scams involving iTunes Gift Cards...', link: 'Learn more' } ];
const WarningCardGrid = () => (
    <section className={styles.gridSection}>
        {cards.map(card => (
            <div key={card.title} className={styles.card}>
                <h4>{card.title}</h4><p>{card.text}</p><a href="#">{card.link}{" >"}</a>
            </div>
        ))}
    </section>
);
export default WarningCardGrid;