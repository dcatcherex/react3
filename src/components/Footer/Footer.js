import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="./images/logos/logo.png" alt="" width={150} />
            <p>good health community</p>
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
              <div className={styles.title}>Support & Policy</div>
              <div className={styles.linksList}>
                <a href="#">คำถามที่พบบ่อย</a>
                <a href="#">การคืนสินค้า</a>
                <a href="#">การเข้าใช้บริการเว็บไซต์</a>
                <a href="#">เงื่อนไขการใช้งาน</a>
                <a href="#">นโยบายความเป็นส่วนตัว</a>
              </div>
            </div>
            <div className={styles.contactContainer}>
              <div className={styles.title}>Contact Us</div>
              <div className={styles.linksList}>
                <a href="#">jone@gmail.com</a>
                <a href="#">+123 52633478</a>
              </div>

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
      <div className={styles.Footer2}>© 2022 iTrack, All Rights Reserved.</div>
    </>
  );
};
