import React from "react";

import PropTypes from "prop-types";

import projectStyles from "../style.module.css";
import styles from "./Card.module.css";

export const Card = (props) => {
  const {
    image_alt2,
    header_image_src,
    edit_img,
    clone_img,
    trash_img,
    icon_size,
    date,
    topic,
    description,
    image_alt,
    icon_act_src,
    duration,
    image_alt1,
    icon_share_src,
  } = props;
  return (
    <div className={` ${styles["Card"]} ${projectStyles["kanit300"]} `}>
      <div className={styles["Card-header"]}>
        <img
          alt={props.image_alt2}
          src={props.header_image_src}
          className={styles["header-image"]}
        />
        <div className={styles["card-icon"]}>
          <button className={styles["btn-card"]} type="button">
            {" "}
            <img
              src={props.edit_img}
              height={props.icon_size}
              width={props.icon_size}
              alt=""
            />
          </button>
          <button className={styles["btn-card"]} type="button">
            {" "}
            <img
              src={props.clone_img}
              height={props.icon_size}
              width={props.icon_size}
              alt=""
            />
          </button>
          <button className={styles["btn-card"]} type="button">
            {" "}
            <img
              src={props.trash_img}
              height={props.icon_size}
              width={props.icon_size}
              alt=""
            />
          </button>
        </div>
      </div>
      <div className={styles["Card-body"]}>
        <span className={styles["date"]}>{props.date}</span>
        <h1 className={styles["topic"]}>{props.topic}</h1>
        <span className={styles["description"]}>{props.description}</span>
      </div>
      <div className={styles["Card-footer"]}>
        <div className={styles["icon-act-container"]}>
          <img
            alt={props.image_alt}
            src={props.icon_act_src}
            className={styles["icon-act"]}
            width={30}
          />
        </div>
        <div className={styles["duration-container"]}>
          <span>{props.duration}</span>
        </div>
        <div className={styles["icon-share-container"]}>
          <img
            alt={props.image_alt1}
            src={props.icon_share_src}
            className={styles["icon-share"]}
          />
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  date: "15 กุมภา 22",
  icon_share_src: "./images/icons/Share.png",
  header_image_src: "./images/run1.jpg",
  rootClassName: "",
  topic: "พาเพื่อนขี่รถเล่น",
  image_alt2: "image",
  duration: "1 hr 20 m",
  image_alt: "image",
  description:
    "วันอาทิตย์ไปขี่จักรยานเล่นที่สวนเบญจกิตติ ไปกัน 5 คน นัดกันแต่เช้า เช่าจักรยาน 4 คัน",
  icon_act_src: "./images/icons/Walking.png",
  image_alt1: "image",
  edit_img: "./images/icons/Edit.png",
  clone_img: "./images/icons/Copy.png",
  trash_img: "./images/icons/Remove.png",
  icon_size: 20,
};

Card.propTypes = {
  date: PropTypes.string,
  image_src1: PropTypes.string,
  header_image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  topic: PropTypes.string,
  image_alt2: PropTypes.string,
  duration: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
  icon_act_src: PropTypes.string,
  image_alt1: PropTypes.string,
  edit_img: PropTypes.string,
  clone_img: PropTypes.string,
  trash_img: PropTypes.string,
  icon_size: PropTypes.number,
};

// export default Card
