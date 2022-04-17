import React, { useState } from "react";

import CardView from "../components/Cards/CardView";
import { Filter } from "../components/Filters/Filter";
// import { Viewbar } from "../components/Filters/ViewBar";
import { Table } from "../components/Tables/Table";
import banner_img from "../assets/images/banner/banner2.jpg";

import styles from "./Activity.module.css";

export const Activity = () => {
  const [view, setView] = useState(<CardView />);
  const [filter, setFilter] = useState(<Filter />);

  const onCardViewClick = () => {
    setView(<CardView />);
  };
  const onListViewClick = () => {
    setView(<Table />);
  };

  return (
    <div>
      {/* <div className={styles["banner"]}>
        <img src={banner_img} alt="" width={1920} height={764} />
      </div> */}
      <main className={styles["activity_container"]}>
        <div className={styles["filter_container"]}>
          {/* <Filter /> */}
          {/* <Filter Filter_topic='Month'/> */}
        </div>
        <div className={styles["view_container"]}>
          {/* <Viewbar /> */}

          <div className={styles["view_control"]}>
            <div className={styles["viewmode"]}>
              <button type="button">
                <img
                  src="./images/icons/filter.png"
                  height={30}
                  width={30}
                  alt=""
                />
              </button>
            </div>
            <div className={styles["viewmode"]}>
              <button>
                {" "}
                <img
                  src="./images/icons/calendar.png"
                  height={30}
                  width={30}
                  alt=""
                />
              </button>
              <button onClick={onCardViewClick}>
                {" "}
                <img
                  src="./images/icons/cardview.png"
                  height={30}
                  width={30}
                  alt=""
                />
              </button>
              <button onClick={onListViewClick}>
                {" "}
                <img
                  src="./images/icons/listview.png"
                  height={30}
                  width={30}
                  alt=""
                />
              </button>
            </div>
          </div>
          {view}
        </div>
      </main>
    </div>
  );
};
