import React from "react";
import { BlogContent } from "../components/BlogPage/BlogContent";
import { BlogPage } from "../components/BlogPage/BlogPage";
import Form from "../components/Forms/Form";
import styles from "./Blog.module.css";

export const Blog = (props) => {
  return (
    <main className={styles.Blog}>
      <BlogPage />
      <BlogContent />
      <Form />
    </main>
  );
};
