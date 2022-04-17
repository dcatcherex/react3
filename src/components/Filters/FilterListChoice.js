import React from "react";
import PropTypes from "prop-types";
import styles from "./FilterListChoice.module.css";

export const FilterListChoice = (props) => {
  return (
    <div className={styles["filter-list"]}>
      <input type="checkbox" checked="true" className={styles["checkbox"]} />
      <div className={styles["container"]}>
        <span>{props.type}</span>
        <span>({props.amount})</span>
      </div>
    </div>
  );
};

FilterListChoice.defaultProps = {
  type: "Run",
  amount: 20,
};

FilterListChoice.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
};
