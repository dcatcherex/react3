import React from "react";
import Card from "./Card";
import AddCard from "./AddCard";

import styles from "./CardView.module.css";
import trackdatas from "../../data/trackdatas";

const CardView = () => {
  const cardElements = trackdatas.map((trackdata, index) => {
    // console.log( <Card key={index} trackdata={trackdata.icon_act_src} />);
    return <Card key={index} trackdata={trackdata} />;
  });
  console.log(cardElements);

  return (
    <main className={styles.cardview_container}>
      <AddCard />
      {cardElements}
    </main>
  );
};

export default CardView;
