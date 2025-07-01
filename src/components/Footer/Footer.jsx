import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    // Data for footer links to avoid repetition
    const footerLinks = {
        'Shop and Learn': ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'AirPods', 'HomePod', 'iPod touch', 'Accessories', 'Gift Cards'],
        'Services': ['Apple Music', 'Apple News+', 'Apple TV+', 'Apple Arcade', 'Apple Card', 'iCloud'],
        'Account': ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
        'Apple Store': ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Field Trip', 'Apple Store App', 'Refurbished and Clearance', 'Financing', 'Apple Trade In', 'Order Status', 'Shopping Help'],
        'For Business': ['Apple and Business', 'Shop for Business'],
        'For Education': ['Apple and Education', 'Shop for College'],
        'For Healthcare': ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
        'For Government': ['Apple and Education', 'Shop for College'],
        'Apple Values': ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Field Trip', 'Apple Store App'],
        'About Apple': ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Field Trip', 'Apple Store App'],
    };

  return (
    <footer className={styles.footerWrapper}>
      <div className="container">
        <div className={styles.upperTextContainer}>
          <p>
            1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in good condition. Additional trade‑in values require purchase of a new iPhone, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID (local law may require saving this information). Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or Apple’s trade-in partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24-month installment loan with Citizens One or Apple Card Monthly Installments and iPhone activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and shipping not included. Additional Apple Card Monthly Installments terms are in the <a href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf" target="_blank" rel="noopener noreferrer"> Customer Agreement</a>. Additional iPhone Payments terms are <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/"> here</a>.
          </p>
          <p>
            2. Subscription required.<br /><br />
            Magic Keyboard sold separately.<br /><br />
            Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other <a href="https://www.apple.com/promo/">terms </a> apply.
          </p>
        </div>
        <div className={styles.footerLinksWrapper}>
            {/* You can map over the footerLinks data here to generate these columns dynamically */}
            {/* This is a simplified version for clarity */}
            <div className={styles.linksWrapper}>
                <h3>Shop and Learn</h3>
                <ul>{footerLinks['Shop and Learn'].map(link => <li key={link}><a href="#">{link}</a></li>)}</ul>
            </div>
            <div className={styles.linksWrapper}>
                <h3>Services</h3>
                <ul>{footerLinks['Services'].map(link => <li key={link}><a href="#">{link}</a></li>)}</ul>
                <h3>Account</h3>
                <ul>{footerLinks['Account'].map(link => <li key={link}><a href="#">{link}</a></li>)}</ul>
            </div>
            <div className={styles.linksWrapper}>
                <h3>Apple Store</h3>
                <ul>{footerLinks['Apple Store'].map(link => <li key={link}><a href="#">{link}</a></li>)}</ul>
            </div>
            <div className={styles.linksWrapper}>
                <h3>For Business</h3>
                <ul>{footerLinks['For Business'].map(link => <li key={link}><a href="#">{link}</a></li>)}</ul>
                <h3>For Education</h3>
                <ul>{footerLinks['For Education'].map(link => <li key={link}><a href="#">{link}</a></li>)}</ul>
            </div>
            <div className={styles.linksWrapper}>
                <h3>Apple Values</h3>
                <ul>{footerLinks['Apple Values'].map(link => <li key={link}><a href="#">{link}</a></li>)}</ul>
                <h3>About Apple</h3>
                <ul>{footerLinks['About Apple'].map(link => <li key={link}><a href="#">{link}</a></li>)}</ul>
            </div>
        </div>
        <div className={styles.myAppleWrapper}>
          More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>
        <div className={styles.copyrightWrapper}>
          <div className={styles.copyright}>
            Copyright © 2024 Apple Inc. All rights reserved.
          </div>
          <div className={styles.footerLinksTerms}>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Sales and Refunds</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Site Map</a></li>
            </ul>
          </div>
          <div className={styles.footerCountry}>
            <div className={styles.flagWrapper}><img src="/images/icons/16.png" alt="USA Flag" /></div>
            <div className={styles.footerCountryName}>United States</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;