import React from "react";

import PROFILE_IMG from "../../constant/images/xg_logo.jpeg";

// const styles = require("./styles.css");
import styles from "./styles.module.css";

const NavigationBar: React.FC = () => {
  // console.log(styles);
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <img
          className={styles.profile_img}
          src={PROFILE_IMG}
          alt="Profile Of Xuejin Gao"
        />

        <ul className={styles.list}>
          <li className={styles.listItem}>Projects</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
