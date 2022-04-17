import React, { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";

const Form = (props) => {
  const { activity, date, topic, des, hour, minute, image, tag } = props;
  const [inputs, setInputs] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      data: {
        activity: activity,
        topic: topic,
        description: des,
        image: image,
        hour: hour,
        minute: minute,
        tag: tag,
        date: date,
      },
    });
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <label>
        Activity
        <input
          type="text"
          name="activity"
          value={inputs.activity || ""}
          onChange={handleChange}
          placeholder="ว่ายน้ำ"
        />
      </label>
      <label>
        Date
        <input
          type="date"
          name="date"
          value={inputs.date || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Topic
        <input
          type="text"
          name="topic"
          value={inputs.topic || ""}
          onChange={handleChange}
          placeholder="ว่ายน้ำที่คอนโด"
        />
      </label>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={inputs.description || ""}
          onChange={handleChange}
          placeholder="วันนี้ร้อนมากเลยไปว่ายน้ำเล่นที่คอนโดเพื่อน"
        />
      </label>
      Duration
      <label>
        Hour
        <input
          type="number"
          name="hour"
          value={inputs.hour || ""}
          onChange={handleChange}
          placeholder="0"
        />
      </label>
      <label>
        Minute
        <input
          type="number"
          name="minute"
          value={inputs.hour || ""}
          onChange={handleChange}
          placeholder="0"
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Form;
