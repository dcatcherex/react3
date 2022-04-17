import React from "react";
import { ECard } from "./ECard";
import styles from "./ECardView.module.css";

export const ECardView = () => {
  return (
    <main className={styles.ECardView_container}>
      <ECard product_img="./images/products/cloth5.webp" />
      <ECard product_img="./images/products/cloth1.webp" />
      <ECard product_img="./images/products/cloth2.webp" />
      <ECard product_img="./images/products/cloth3.webp" />
      <ECard product_img="./images/products/cloth4.webp" />
      <ECard product_img="./images/products/cloth6.webp" />
      <ECard product_img="./images/products/shoe1.webp" />
      <ECard product_img="./images/products/shoe2.webp" />
      <ECard product_img="./images/products/shoe3.webp" />
      <ECard product_img="./images/products/shoe4.webp" />
      <ECard product_img="./images/products/shoe5.webp" />
    </main>
  );
};
