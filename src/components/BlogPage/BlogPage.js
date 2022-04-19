import React, { useState } from "react";
import styles from "./BlogPage.module.css";
import { Transition } from "@headlessui/react";

export const BlogPage = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className={styles.fix_container}>
      <div className={styles.topic}>
        การออกกำลังกายอย่างถูกวิธี <i class="fa-solid fa-angle-down"></i>
      </div>
      <hr />
      <div className={styles.fix_title}>สารบัญ</div>
      <div className={styles.link}>
        <a href="#">การเตรียมพร้อมก่อนออกกำลังกาย</a>
        <a href="#">การออกกำลังกายอย่างปลอดภัย</a>
        <a href="#">การเตรียมตัวก่อนออกกำลังกาย</a>
        <a href="#">การปฏิบัติตัวหลังการออกกำลังกาย</a>
        <a href="#">ประโยชน์ของการออกกำลังกาย</a>
      </div>
      <div className={styles.fix_title}>Links</div>
      <div className={styles.link}>
        <i class="fa-brands fa-youtube"></i>
        <a
          className={styles.reflink}
          href="https://www.youtube.com/watch?v=8cI9q3gptng"
        >
          30 นาที ออกกำลังกายลดน้ำหนัก เบิร์นไขมันทั่วร่าง กระชับทุกส่วน
        </a>

        <a href="https://www.youtube.com/watch?v=b6hPHJzD0-U">
          10 ท่าออกกำลังกายที่ปลอดภัยและกำจัดไขมันหน้าท้องได้อย่างง่ายดาย
        </a>
        <i class="fa-regular fa-file-pdf"></i>
        <a href="#">แคลลอรี่กับการออกกำลังกาย</a>
        <a href="#">สูตรการคำนวณแคลลอรี่</a>
      </div>
      <div className={styles.fix_title}>แบบทดสอบ</div>
      <div className={styles.link}>
        <div className="check">
          <input type="checkbox" name="" id="" />
          <a href="#">การเตรียมพร้อมก่อนออกกำลังกาย</a>
        </div>
        <div className="check">
          <input type="checkbox" name="" id="" />
          <a href="#">คำนวณแคลลอรี่</a>
        </div>
      </div>
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
