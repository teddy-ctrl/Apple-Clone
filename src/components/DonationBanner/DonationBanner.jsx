import React from 'react';
import styles from './DonationBanner.module.css';

const DonationBanner = () => {
  return (
    <div className="top-100">
      <div className="container">
        <div className={`row text-center ${styles.donation}`}>
          <div className={`col-lg-6 ${styles.donate}`}>
            <img
              className="float-lg-right"
              src="/images/icons/logo_arc__cqzlb6z7yfo2_small_2x.jpg"
              alt="ARC Logo"
            />
          </div>
          <div className={`col-lg-6 pt-1 ${styles.donateText}`}>
            <a className="pt-3 float-lg-left" href="">
              Donate to 2025 Southern California wildfires
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationBanner;