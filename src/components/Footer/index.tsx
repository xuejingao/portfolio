import React from "react";

import styles from "./styles.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      {/* <div className={styles.listContainer}>
        <ul>
          <li className={styles.listHeader}>Header</li>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
        </ul>
        <ul>
          <li className={styles.listHeader}>Header</li>
          <li>List Item 2</li>
          <li>List Item 2</li>
          <li>List Item 2</li>
          <li>List Item 2</li>
        </ul>
      </div> */}
      <p className={styles.note}>
        <span>Last Updated: 8/6/2021</span>
        <br />
        <span>Xuejin Gao</span>
      </p>
    </footer>
  );
};

export default Footer;
