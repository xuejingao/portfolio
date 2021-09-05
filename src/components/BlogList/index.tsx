import React from "react";

import styles from "./style.module.css";

import BlogItem from "../BlogItem";

const BlogList: React.FC = () => {
  return (
    <div className={styles.container}>
      <BlogItem />
      <BlogItem />
      The blog page is under contruction!
    </div>
  );
};

export default BlogList;
