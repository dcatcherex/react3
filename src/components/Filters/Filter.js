import React from "react";
import PropTypes from "prop-types";
import { FilterListChoice } from "./FilterListChoice";
import styles from "./Filter.module.css";

export const Filter = (props) => {
  return (
    <div className={styles["Filter"]}>
      <span className={styles["Filter-topic"]}>{props.Filter_topic}</span>
      <div className={styles["Filter-list"]}>
        <FilterListChoice text="ขี่จักรยาน"></FilterListChoice>
        <FilterListChoice text="วิ่ง"></FilterListChoice>
        <FilterListChoice text="ว่ายน้ำ"></FilterListChoice>
        <FilterListChoice text="เดินเล่น"></FilterListChoice>
        <FilterListChoice text="โยคะ"></FilterListChoice>
        <FilterListChoice text="เที่ยว"></FilterListChoice>
        <FilterListChoice text="ปีนเขา"></FilterListChoice>
      </div>
    </div>
  );
};

Filter.defaultProps = {
  Filter_topic: "Activity Type",
};

Filter.propTypes = {
  Filter_topic: PropTypes.string,
};
