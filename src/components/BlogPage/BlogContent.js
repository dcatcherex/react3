import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./BlogContent.module.css";

export const BlogContent = ({
  topic,
  subtopic,
  content,
  image,
  image_title,
  quate,
}) => {
  return (
    <main className={styles.BlogContent}>
      <div className="title">การออกกำลังกายอย่างถูกวิธี</div>
    </main>
  );
};

BlogContent.defaultProps = {};
BlogContent.propTypes = {};
