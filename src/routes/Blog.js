import React from "react";
import { BlogPage } from "../components/BlogPage/BlogPage";
import Form from "../components/Forms/Form";

export const Blog = (props) => {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Blog</h2>
      <BlogPage />
      <Form />
    </main>
  );
};
