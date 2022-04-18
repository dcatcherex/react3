import React, { useState } from "react";
import styles from "./BlogPage.module.css";
import { Transition } from "@headlessui/react";

export const BlogPage = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className={styles.fix_container}>
      <hr />
      <div className={styles.fix_title}>Table of contents</div>
      <div className={styles.link}>
        <a href="#">Introduction</a>
        <a href="#">Installation</a>
        {/* <ul>
          <li>
            <a href="#">ขั้นตอนแรก: setup</a>
          </li>
          <li>
            <a href="#">ขั้นตอนที่สอง: process</a>
          </li>
          <li>
            <a href="#">ขั้นตอนสุดท้าย</a>
          </li>
        </ul> */}
        <a href="#">Syntax</a>
        <a href="#">Conclusion</a>
      </div>

      {/* <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul> */}
      <hr />
      <div className={styles.social_share}>
        <button>
          <i class="fa-solid fa-link fa-2xs"></i>
        </button>
        <button>
          <i class="fa-brands fa-twitter fa-2xs"></i>
        </button>
        <button>
          <i class="fa-brands fa-instagram-square fa-2xs"></i>
        </button>
        <button>
          <i class="fa-brands fa-facebook fa-2xs"></i>
        </button>
      </div>

      {/* <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
        Toggle
      </button>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, illum?
      </Transition> */}
    </div>
  );
};
