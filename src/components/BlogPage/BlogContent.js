import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./BlogContent.module.css";

export const BlogContent = ({
  topic,
  subtopic,
  content,
  image,
  image_title,
  quate,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.BlogContent}>
        <div className={styles.title}>การออกกำลังกายอย่างถูกวิธี</div>
        <div className={styles.right}>
          <div className={styles.author}>รศ.นพ.อภิชาติ อัศวมงคลกุล</div>
          <br />
          ภาควิชาศัลยศาสตร์ออร์โธปิดิคส์และกายภาพบำบัด
          <br /> Faculty of Medicine Siriraj Hospital
          <br />
          คณะแพทยศาสตร์ศิริราชพยาบาล
        </div>
        <img className={styles.image} src="./images/1920/runbig.jpg" alt="" />
        <div className={styles.quate_container}>
          <div className={styles.quate}>
            หากทุกคนต้องการความแข็งแรงของร่างกายทุกส่วน ทุกอวัยวะ
            ควรออกกำลังกายอย่างสม่ำเสมออย่างน้อยวันละ 20-30 นาที สัปดาห์ละ 3-4
            ครั้ง
            <div className={styles.authorsmall}>
              - รศ.นพ.อภิชาติ อัศวมงคลกุล
            </div>
          </div>
        </div>
        <div className={styles.content}>
          การมีสุขภาพดีนับว่าเป็นสิ่งที่ประเสริฐที่ทุกคนปรารถนา
          คำว่าสุขภาพดีในที่นี้หมายถึงการที่เราดูแลตัวเองอย่างถูกต้อง
          ตั้งแต่เรื่องการออกกำลังกายอย่างสม่ำเสมอ
          การรับประทานอาหารที่มีประโยชน์ครบถ้วน การพักผ่อนที่เพียงพอ
          การป้องกันโรค การลดหรือเลิกสิ่งที่บันทอนสุขภาพ
          ซึ่งจะส่งผลให้ร่างกายมีความสดชื่น กระฉับกระเฉง
          พร้อมที่จะดำเนินชีวิตประจำวันได้อย่างมีประสิทธิภาพ
          ปัจจุบันคนไทยได้หันมาให้ความสนใจ และเอาใจใส่ต่อสุขภาพกันมากขึ้น
          ดังจะเห็นได้จากการเลือกรับประทานอาหารที่มีประโยชน์และถูกหลักโภชนาการ
          หรือการรวมกลุ่มกันเล่นกีฬาและออกกำลังกายเพื่อสุขภาพ
          ซึ่งกำลังเป็นที่นิยมมากในขณะนี้ การออกกำลังกายให้ได้ผลดีนั้นจะต้องค่อย
          ๆ ทำ ต้องใช้เวลา และควรทำอย่างสม่ำเสมอด้วยวิธีการที่เหมาะสม
          จะทำให้ร่างกายเกิดพัฒนาการอย่างมีคุณภาพและมีสุขภาพแข็งแรงในระยะยาว
          สำหรับการออกกำลังกายที่ดีและถูกต้องนั้นต้องประกอบด้วย
        </div>
        <div className={styles.subtopic}>การเตรียมพร้อมก่อนออกกำลังกาย</div>
        <div className={styles.content}>
          ในการออกกำลังกายนั้นไม่ว่าท่านจะมีอายุอยู่ในช่วงวัยใด
          และไม่ว่าจะออกกำลังกายนานแค่ไหน
          หรือบางท่านยังไม่เคยออกกำลังกายมาก่อนเลย
          ท่านก็สามารถที่จะออกกำลังกายได้โดยเริ่มต้นจากวิธีง่าย ๆ คือ
          การออกกำลังกายจากกิจวัตรประจำวัน เช่น การเดินหรือขี่จักรยาน
          เมื่อไปยังสถานที่ที่ไม่ไกล หรือหยุดการใช้รถ
          แต่ใช้การเดินไปทำงานสำหรับผู้ที่มีบ้านและที่ทำงานไม่ไกลจากกัน
          หรือใช้บันไดแทนการขึ้นลิฟต์หรือบันไดเลื่อน เป็นต้น
          ให้ท่านทำกิจวัตรเหล่านี้ทุกวันเป็นเวลา 1-2 เดือน จากนั้นจึงค่อย ๆ
          เพิ่มการออกกำลังกายเพื่อให้ร่างกายแข็งแรงขึ้น เช่น เดินให้เร็วขึ้น
          ขี้จักรยานให้นานขึ้น ขึ้นบันไดหลายชั้นขึ้น ว่ายน้ำ เป็นต้น
          และในช่วงแรก ๆ ของออกกำลังกายไม่ควรหยุด
          ให้ออกกำลังอย่างสม่ำเสมอจนเป็นนิสัย หากเป็นไปได้ควรจะมีกลุ่มเพื่อน
          เพื่อช่วยกันประคับประคอง
          หรือท่านอาจจะให้คนในครอบครัวมามีส่วนร่วมด้วยก็จะดี
        </div>
        <div className={styles.content}>
          ท่านที่เริ่มต้นออกกำลังกาย ควรใช้วิธีเดินไม่ควรวิ่ง
          เนื่องจากการเดินจะทำให้ท่านไม่เหนื่อยมาก และยังสามารถลดน้ำหนักได้ด้วย
          นอกจากนี้อาการปวดข้อจะมีไม่มาก เหมาะสำหรับคนอ้วน
          หรือผู้ที่เริ่มออกกำลังกาย
          ส่วนการวิ่งจะเป็นการออกกำลังกายสำหรับผู้ที่เตรียมร่างกายไว้พร้อมแล้ว
          เพราะการวิ่งจะทำให้หัวใจเต้นเร็ว ทำให้เหนื่อย
          เหมาะสำหรับท่านที่ต้องการเพิ่มความฟิตของร่างกายให้มากขึ้น
        </div>
        <div className={styles.subtopic}>การออกกำลังกายอย่างปลอดภัย</div>
        <div className={styles.content}>
          หลังจากที่ท่านเตรียมความพร้อม
          และได้ออกกำลังกายจนเป็นส่วนหนึ่งของชีวิตประจำวันแล้ว
          หากท่านต้องการเพิ่มความฟิตร่างกายก็สามารถกระทำได้
          ทั้งนี้ท่านควรเลือกการออกกำลังกายที่ชอบและสะดวกที่สุด
          แต่สำหรับท่านที่มีอายุมากกว่า 45 ปี หรือมีโรคประจำตัว เช่น
          โรคความดันโลหิตสูง โรคเบาหวาน โรคไขมันในเลือดสูง
          หรือมีประวัติครอบครัวเป็นโรคหัวใจ
          ควรปรึกษาแพทย์ก่อนเริ่มการเลือกวิธีการออกกำลังกาย
          นอกจากนี้ในการออกกำลังกายไม่ควรหักโหมมากในครั้งแรก ๆ
          การออกกำลังกายที่ดี ควรเป็นการออกกำลังกายอย่างต่อเนื่อง
          ไม่ใช่ทำเป็นครั้งคราวแต่หักโหม
          และไม่ควรกลั้นหายใจหรือสูดลมหายใจอย่างแรง ควรหายใจเข้าและออกยาว ๆ
          เพื่อช่วยระบบการหายใจของร่างกาย
          และขณะออกกำลังกายท่านสามารถสังเกตอาการขณะออกกำลังกายว่าทำมากไปหรือไม่
          โดยสังเกตจากอาการ ดังนี้
          <div className={styles.list}>
            <ul>
              <li>หัวใจเต้นมากจนรู้สึกเหนื่อย</li>
              <li>หายใจเหนื่อยจนพูดไม่เป็นประโยค</li>
              <li>เหนื่อยจนเป็นลม</li>
            </ul>
          </div>
        </div>

        <div className={styles.subtopic}>การเตรียมตัวก่อนออกกำลังกาย</div>
        <div className={styles.content}>
          ก่อนออกกำลังกายทุกครั้ง ท่านต้องทำการอบอุ่นร่างกายก่อน
          อาจใช้วิธีเดินภายในบ้าน รอบบ้าน หรือเดือนบนสายพาน ฯลฯ
          โดยปกติแล้วควรใช้เวลาในการอบอุ่นร่างกายประมาณ 5-10 นาที
          ซึ่งในกาทำความอบอุ่นร่างกายนี้จะทำให้เลือดไปเลี้ยงอวัยวะส่วนต่าง ๆ
          ได้มากขึ้น และหลอดเลือดมีการเตรียมความพร้อมมากขึ้น
          เป็นการป้องกันการบาดเจ็บจากการออกกำลังกาย
        </div>
        <div className={styles.subtopic}>
          การปฏิบัติตัวหลังการออกกำลังกาย
          <div className={styles.content}>
            หลังจากออกกำลังกายแล้ว อย่าหยุดออกกำลังกายในทันที
            โดยเฉพาะท่านที่ออกกำลังกายอย่างหนัก
            เพราะจะทำให้เลือดไปเลี้ยงสมองไม่ทัน อาจทำให้เกิดอาการหน้ามือ
            ควรอบอุ่นร่างกายประมาณ 5-10 นาที จนกระทั่งชีพจรกลับคืนสู่สภาพปกติ
            และควรดื่มน้ำให้เพียงพอภายหลังออกกำลังกาย
          </div>
        </div>

        <div className={styles.subtopic}>ประโยชน์ของการออกกำลังกาย</div>
        <div className={styles.content}>
          ท่านที่ออกกำลังกายอย่างสม่ำเสมอจะทำให้สุขภาพร่างกายแข็งแรง ระบบต่าง ๆ
          ในร่างกายทำงานได้อย่างมีประสิทธิภาพ เช่น
          <div className={styles.list}>
            <ul>
              <li>
                ช่วยให้ระบบไหลเวียนของเลือดทำงานได้ดี ไปเลี้ยงส่วนต่าง ๆ
                ได้มากขึ้น ป้องกันการเกิดโรคหัวใจ โรคความดันต่ำ
                มีภูมิต้านทานของร่างกายดีขึ้น และป้องกันโรคต่าง ๆ เช่น
                โรคเบาหวาน โรคอ้วน โรคข้อเสื่อม เป็นต้น
              </li>
              <li>
                ช่วยในการควบคุมน้ำหนัก การทรงตัว
                และทำให้การเคลื่อนไหวคล่องแคล่วขึ้น
              </li>
              <li>ช่วยให้ระบบขับถ่ายทำงานได้ดีขึ้น</li>
              <li>ช่วยลดความเครียด และทำให้การนอนหลับพักผ่อนดีขึ้น</li>
            </ul>
          </div>
        </div>

        <div className={styles.content}>
          ดังนั้นหากทุกคนต้องการความแข็งแรงของร่างกายทุกส่วน ทุกอวัยวะ
          ควรออกกำลังกายอย่างสม่ำเสมออย่างน้อยวันละ 20-30 นาที สัปดาห์ละ 3-4
          ครั้ง ก็เพียงพอที่จะเสริมสร้างให้ร่างกายแข็งแรง มีสุขภาพดี
          ผ่อนคลายความตึงเครียด ทำให้อารมณ์ดี
          และยังช่วยป้องกันโรคภัยไข้เจ็บได้อีกด้วย
          หากท่านมีปัญหาเรื่องการออกกำลังกาย
          สามารถสอบถามได้ที่หน่วยเวชศาสตร์การกีฬา
          ภาควิชาศัลยศาสตร์ออร์โธปิดิคส์และกายภาพบำบัด โทร. 0 2419 7530
        </div>
        <div className={styles.image}></div>
        <div className={styles.image_des}></div>
      </div>
    </div>
  );
};

BlogContent.defaultProps = {};
BlogContent.propTypes = {};
