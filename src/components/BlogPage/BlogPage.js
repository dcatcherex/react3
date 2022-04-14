import React from "react";
import styles from "./BlogPage.module.css";

export const BlogPage = () => {
  return (
    <div className={styles.fix_container}>
      <hr />
      <h2>Table of contents</h2>
      <h3>topic</h3>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
      <h4>topic</h4>
      <hr />
    </div>
  );
};
