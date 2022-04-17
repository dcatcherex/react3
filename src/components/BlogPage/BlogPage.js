import React, { useState } from "react";
import styles from "./BlogPage.module.css";
import { Transition } from "@headlessui/react";

export const BlogPage = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className={styles.fix_container}>
      <hr />
      <h2>Table of contents</h2>
      <h3>topic</h3>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
      <h4>topic</h4>
      <hr />

      <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
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
        I will fade in and out
      </Transition>
    </div>
  );
};
