import React from 'react';
import styles from './HeroPage.module.css';

const HeroPage = () => (
    <section className={styles.pageHero}>
        <div className={styles.pageHero__content}>
            <h1 className={styles.pageHero__title}>Mac</h1>
            <div className={styles.pageHero__subtitle}>
                <p>If you can dream it,</p>
                <p>Mac can do it.</p>
            </div>
        </div>
    </section>
);

export default HeroPage;