import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="./images/logos/logo.png" alt="" width={150} />
          be better you (your health)
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.itrackContainer}>
            <div className={styles.title}>iTrack</div>
            <div className={styles.linksList}>
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Activity</a>
              <a href="#">Market</a>
              <a href="#">Knowledge</a>
              <a href="#">Blog</a>
            </div>
          </div>
          <div className={styles.policyContainer}>
            <div className={styles.title}>Policy</div>
            <div className={styles.linksList}>
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Activity</a>
              <a href="#">Market</a>
              <a href="#">Knowledge</a>
              <a href="#">Blog</a>
            </div>
          </div>
          <div className={styles.contactContainer}>
            <div className={styles.title}>Contact Us</div>
            <span>jone@gmail.com</span>
            <span>+123 52633478</span>
            <div className={styles.title}>Follow Us</div>
            <button>
              <i class="fa-brands fa-twitter fa-2xs"></i>
            </button>
            <button>
              <i class="fa-brands fa-instagram fa-2xs"></i>
            </button>
            <button>
              <i class="fa-brands fa-facebook fa-2xs"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
