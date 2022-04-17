import React from "react";
import styles from "./Table.module.css";

export const TableRow = (props) => {
  const { trackdata } = props;

  return (
    <tr className={styles.table_row}>
      <td className={styles.checkbox}>
        <input type="checkbox" name="checkbok" id="checkbok" />
      </td>
      <td className={styles.preview}>
        <img
          className={styles.thumbpic}
          src={trackdata.header_image_src}
          alt={trackdata.image_alt2}
        />
      </td>
      <td className={styles.topic}>{trackdata.topic}</td>
      <td className={styles.des}>{trackdata.description}</td>
      <td className={styles.type}>
        <img
          alt={trackdata.image_alt}
          src={trackdata.icon_act_src}
          width={30}
        />
        {/* trekking */}
      </td>
      <td className={styles.duration}>{trackdata.duration}</td>
      <td className={styles.date}>{trackdata.date}</td>
      <td className={styles.kcal}>1000 cal</td>
      <td className={styles.tag}>
        <button>วิ่ง</button>
        <button>สวนลุม</button>
      </td>
      <td className={styles.edit}>
        {/* <i className="fa-solid fa-star"></i> */}
        <button>
          <i class="fa-solid fa-share-nodes"></i>
        </button>
        <button>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>
  );
};
