import React from "react";

import styles from "./style.module.css";

const BlogItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <ul className={styles.date}>
          <li>August 2021</li>
        </ul>
        <ul className={styles.tags}>
          <li className={styles.tag}>Web Development</li>
          <li className={styles.tag}>Data Science</li>
          <li className={styles.tag}>Something</li>
        </ul>
      </div>
      <div>
        <h1>Tile of blog</h1>
        <h4>Brief description of blog</h4>
      </div>
    </div>
  );
};

export default BlogItem;
