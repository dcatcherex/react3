import React from "react";
import { ECard } from "./ECard";
import styles from "./ECardView.module.css";

export const ECardView = () => {
  return (
    <main className={styles.ECardView_container}>
      <ECard />
      <ECard />
      <ECard />
      <ECard />
      <ECard />
    </main>
  );
};
