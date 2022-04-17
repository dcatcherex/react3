import React, { useState } from "react";
import styles from "./Roadmap.module.css";
import { List } from "../components/Roadmap/List";

const Roadmap = () => {
  return (
    <main className={styles.Roadmap}>
      <header>
        <div className={styles.title_one}>
          ร่วมเสนอ <span className={styles.title_two}>ไอเดีย แผนงาน</span>
        </div>
        <div className={styles.feature_list}>
          <p>
            <i class="fa-solid fa-check"></i>รู้ว่าทีมงานกำลังทำอะไร
          </p>
          <p>
            <i class="fa-solid fa-check"></i>มีส่วนร่วมในการดำเนินงานของทีมงาน
          </p>
          <p>
            <i class="fa-solid fa-check"></i>เสนอไอเดียให้ทีมงาน
          </p>
          <p>
            <i class="fa-solid fa-check"></i>ร่วมโหวต สนับสนุนไอเดียที่เห็นด้วย
            เพื่อให้ทีมงานพิจารณาดำเนินการ
          </p>
        </div>
        <div className={styles.tab_set}>
          <button>
            <i class="fa-regular fa-file-lines fa-sm"></i>แผนงาน
          </button>
          <button>
            <i class="fa-regular fa-lightbulb fa-sm"></i>ไอเดีย
          </button>
          <button>
            <i class="fa-regular fa-face-smile"></i>ประกาศ
          </button>
        </div>
        <List />
        <List vote_count={20} />
        <List />
        <List />
      </header>
    </main>
  );
};

export default Roadmap;
