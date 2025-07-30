// src/components/ServicePrograms/ServicePrograms.jsx
import React from 'react';
import styles from './ServicePrograms.module.css';
const programs = [ 'Mac mini Service Program for No Power Issue', 'iPhone 14 Plus Service Program for Rear Camera Issue', 'iPhone 12 and iPhone 12 Pro Service Program for No Sound Issues', '15-inch MacBook Pro Battery Recall Program' ];
const ServicePrograms = () => (
    <section className={styles.programSection}>
        <h3 className={styles.title}>Apple Service Programs</h3>
        <ul className={styles.list}>{programs.map(p => <li key={p}><a href="#">{p}</a></li>)}</ul>
        <a href="#" className={styles.seeAll}>See all programs {">"}</a>
    </section>
);
export default ServicePrograms;