import React from "react";
import PropTypes from "prop-types";
import styles from "./List.module.css";

export const List = (props) => {
  const { topic, suggest_count, vote_count } = props;
  return (
    <main className={styles.List}>
      {topic}
      <div className={styles.stat}>
        <div className={styles.suggests}>
          <button>
            <i class="fa-solid fa-comment-dots fa-sm"></i>
            {suggest_count}
          </button>
        </div>
        <div className={styles.votes}>
          <button>
            <i class="fa-solid fa-thumbs-up fa-sm"></i>
            {vote_count}
          </button>
        </div>
      </div>
    </main>
  );
};

List.defaultProps = {
  topic: "วิดีโอ: การเลือกอาหารเสริมช่วยการนอนหลับ",
  suggest_count: 15,
  vote_count: 132,
};

List.propTypes = {
  topic: PropTypes.string,
  suggest_count: PropTypes.number,
  vote_count: PropTypes.number,
};
