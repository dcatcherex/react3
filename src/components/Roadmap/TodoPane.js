import React from "react";
import { List } from "./List";
import styles from "./TodoPane.module.css";

export const TodoPane = () => {
  return (
    <div className={styles.allpane}>
      <main className={styles.TodoPane}>
        <div className={styles.title}>แผนงาน</div>
        <div className={styles.ListView}>
          <List />
          <List />
          <List />
          <List />
        </div>
      </main>
      <main className={styles.TodoPane}>
        <div className={styles.title}>ดำเนินการ</div>
        <div className={styles.ListView}>
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </div>
      </main>
      <main className={styles.TodoPane}>
        <div className={styles.title}>เสร็จสิ้น</div>
        <div className={styles.ListView}>
          <List />
          <List />
          <List />
          <List />
          <List />
        </div>
      </main>
    </div>
  );
};
