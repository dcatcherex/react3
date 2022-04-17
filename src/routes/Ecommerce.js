import React from "react";
import { ECardView } from "../components/Cards/ECardView";
import styles from "./Ecommerce.module.css";

export const Ecommerce = (props) => {
  return (
    <main className={styles.Ecommerce_container}>
      <ECardView />
    </main>
  );
};
