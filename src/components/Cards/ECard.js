import React from "react";
import PropTypes from "prop-types";
import styles from "./ECard.module.css";

export const ECard = (props) => {
  const {
    product_img,
    product_title,
    product_category,
    product_des,
    product_color,
    product_price,
    product_sale_price,
    product_note,
    product_star,
  } = props;
  return (
    <main className={styles.ECard_container}>
      <div className={styles.ECard_header}>
        <img className={styles.ECard_head_img} src={product_img} alt="img" />
        <i class="fa-regular fa-heart fa-lg"></i>
      </div>
      <div className={styles.ECard_body}>
        <div className={styles.ECard_body_categories}>
          color
          <div className={styles.product_category}>{product_category}</div>
        </div>
        <h3 className={styles.product_title}>{product_title}</h3>
        <div className={styles.product_price}>{product_price}</div>
        <div className={styles.product_sale_price}>
          THB {product_sale_price}
        </div>
        <div className={styles.product_note}>{product_note}</div>
        <div className={styles.product_star}>
          {/* {product_star} */}
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
      </div>
    </main>
  );
};

ECard.defaultProps = {
  product_img: "../../images/sportswear.webp",
  product_title: "WOMAN เสื้อออกกำลังกาย",
  product_category: "woman",
  product_des: "Product description",
  product_color: [
    {
      color: "blue",
      icon: "./images/icons/categories/blue.svg",
    },
    {
      color: "gray",
      icon: "./images/icons/categories/blue.svg",
    },
  ],
  product_price: 1000,
  product_sale_price: 800,
  product_star: 4,
  product_note: "Special price from 05 Apr 2022 while stocks last",
};

ECard.propTypes = {
  product_img: PropTypes.string,
  product_title: PropTypes.string,
  product_category: PropTypes.string,
  product_des: PropTypes.string,
  product_color: PropTypes.object,
  product_price: PropTypes.number,
  product_sale_price: PropTypes.number,
  product_star: PropTypes.number,
};
