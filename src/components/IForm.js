import React from 'react';
import { useForm } from 'react-hook-form';
import Style from './IForm.module.css'


export const IForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div className={Style.form_container}>
      <h1>Activity list</h1>
      <img className={Style.form_top_image} src="./images/login1.jpg" alt="" />
    <form className = {Style.iform} onSubmit={handleSubmit(onSubmit)}>
      <select {...register("Activity type", { required: true })}>
        <option value="excercise">excercise</option>
        <option value=" walking"> walking</option>
        <option value=" running"> running</option>
        <option value=" fitness"> fitness</option>
        <option value=" cycling"> cycling</option>
        <option value=" swimming"> swimming</option>
        <option value=" trekking"> trekking</option>
        <option value=" yoga"> yoga</option>
      </select>
      <input className={Style.topic} type="text" placeholder="Topic" {...register("Topic", {required: true, maxLength: 50})} />
      <input type="text" placeholder="Description" {...register("Description", {required: false, maxLength: 100})} />
      <input type="number" placeholder="Duration: Hour" {...register("Duration: Hour", {required: false, maxLength: 2})} />
      <input type="number" placeholder="Duration: Minutes" {...register("Duration: Minutes", {required: false, min: 1, maxLength: 3})} />
      <input type="date" placeholder="Date" {...register("Date", {required: true})} />
      <input type="text" placeholder="Tag" {...register("Tag", {})} />

      <input type="submit" />
    </form>
    </div>
  );
}