import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HelpMeChoosePromo.module.css';

const HelpMeChoosePromo = () => (
   <section className={styles.featurePromo}>
        <h2 className={styles.featurePromo__title}>
            Help Me Choose.
        </h2>
        <div className={styles.featurePromo__body}>
            <p className={styles.featurePromo__subtitle}>
                Answer a few questions to find <br />
                the best Mac for you.
            </p>
            <Link className={styles.featurePromo__cta} to="/mac/help-me-choose">Get started</Link>
        </div>
        <div className={styles.featurePromo__imageContainer}>
            <img className={styles.featurePromo__image} src="/image/mac-images/heroimages/help_me_choose__0cunyw534bmm_xlarge.jpg" alt="A collection of Mac computers" />
        </div>
    </section>
);

export default HelpMeChoosePromo;