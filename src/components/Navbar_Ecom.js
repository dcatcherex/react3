import React from "react";
import PropTypes from "prop-types";
import style from "./Navbar.module.css";
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
    <div className={style["container_ecom"]}>
      <header className={style["topbar"]}>
        <img
          className={style["logo_min"]}
          src="./images/logos/logo.png"
          alt=""
        />

        <div className={style["right_container"]}>
          <div className={style["search"]}>
            <input
              className={style["searchbox"]}
              type="text"
              name="searchbox"
              id=""
            />
          </div>
          <div className={style["menu_icon"]}>
            <button>
              {" "}
              {/* <img
                src="./images/icons/login.png"
                height={30}
                width={30}
                alt=""
              /> */}
              <i class="fa-regular fa-face-smile"></i>
            </button>
            <button>
              {" "}
              {/* <img
                src="./images/icons/Favorite.png"
                height={30}
                width={30}
                alt=""
              /> */}
              <i class="fa-regular fa-heart"></i>
            </button>
            <button>
              {" "}
              <img
                src="./images/icons/cart.svg"
                height={30}
                width={30}
                alt=""
              />
            </button>
          </div>
        </div>
      </header>
      <nav className={style["menu_bar"]}>
        <ul className={style.menu}>
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
  link5_url: "/about us",
  link6_url: "#",
  link1_text: "home",
  link2_text: "activity",
  link3_text: "ecommerce",
  link4_text: "blog",
  link5_text: "about us",
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
