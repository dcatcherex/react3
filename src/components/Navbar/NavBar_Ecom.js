import React from "react";
import PropTypes from "prop-types";
import styles from "./NavBar_Ecom.module.css";
import { NavLink } from "react-router-dom";

// import styles from './login-card.module.css'

export const Navbar_Ecom = ({
  link1_url,
  link2_url,
  link3_url,
  link4_url,
  link5_url,
  link6_url,
  link1_text,
  link2_text,
  link3_text,
  link4_text,
  link5_text,
  link6_text,
}) => {
  return (
    <div className={styles["ecom_container"]}>
      <div className={styles.my_container}>
        <div className={styles["topbar"]}>
          <div className={styles.left_container}>
            <img
              className={styles["logo_min"]}
              src="./images/logos/logo.png"
              alt=""
              width={250}
            />
          </div>
          <div className={styles["right_container"]}>
            <div className={styles["search"]}>
              <input
                className={styles["searchbox"]}
                type="text"
                name="searchbox"
                id=""
              />
            </div>
            <div className={styles["menu_icon"]}>
              <button>
                <i class="fa-regular fa-face-smile fa-sm"></i>
              </button>
              <button>
                <i class="fa-regular fa-heart fa-sm"></i>
              </button>
              <button>
                {" "}
                <img
                  src="./images/icons/cart.svg"
                  height={25.2}
                  width={25.2}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <nav className={styles["menu_bar"]}>
        <ul className={styles.menu}>
          <li>
            <NavLink to={link1_url} activeClassName="selected">
              {link1_text}
            </NavLink>
          </li>
          <li>
            <NavLink to={link2_url} activeClassName="selected">
              {link2_text}
            </NavLink>
          </li>
          <li>
            <NavLink to={link3_url} activeClassName="selected">
              {link3_text}
            </NavLink>
          </li>
          <li>
            <NavLink to={link4_url} activeClassName="selected">
              {link4_text}
            </NavLink>
          </li>
          <li>
            <NavLink to={link5_url} activeClassName="selected">
              {link5_text}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Navbar_Ecom.defaultProps = {
  link1_url: "/",
  link2_url: "/activity",
  link3_url: "/ecommerce",
  link4_url: "/blog",
  link5_url: "/roadmap",
  link6_url: "#",
  link1_text: "home",
  link2_text: "activity",
  link3_text: "market",
  link4_text: "blog",
  link5_text: "roadmap",
  link6_text: "contact us",
};

Navbar_Ecom.propTypes = {
  link1_url: PropTypes.string,
  link2_url: PropTypes.string,
  link3_url: PropTypes.string,
  link4_url: PropTypes.string,
  link5_url: PropTypes.string,
  link6_url: PropTypes.string,
  link1_text: PropTypes.string,
  link2_text: PropTypes.string,
  link3_text: PropTypes.string,
  link4_text: PropTypes.string,
  link5_text: PropTypes.string,
  link6_text: PropTypes.string,
};
