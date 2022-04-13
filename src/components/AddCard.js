import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './AddCard.module.css'

const AddCard = (props) => {
 

  const {header_image_src, image_alt2, edit_img, icon_size, clone_img, trash_img, date,topic,description,image_alt,icon_act_src,duration,image_alt1} = props;
  
  return (
    <div className={` ${styles['Card']} ${projectStyles['kanit300']} `}>
      <div className={styles['Card-header']}>
        <img
          alt={image_alt2}
          src={header_image_src}
          className={styles['header-image']}
        />
        {/* <div className={styles['card-icon']}>
          <button className={styles['btn-card']} type="button"> <img src='./images/icons/Edit.png' height ={icon_size} width={icon_size} alt='' /></button>
          <button className={styles['btn-card']} type="button"> <img src='./images/icons/Copy.png' height ={icon_size} width={icon_size} alt='' /></button>
          <button className={styles['btn-card']} type="button"> <img src='./images/icons/Remove.png' height ={icon_size} width={icon_size} alt='' /></button>
        </div> */}
      </div>
      <div className={styles['Card-body']}>
        <span className={styles['date']}>{date}</span>
        <h1 className={styles['topic']}>{topic}</h1>
        <span className={styles['description']}>{description}</span>
      </div>
      <div className={styles['Card-footer']}>
        <div className={styles['icon-act-container']}>
          <img
            alt={image_alt}
            src={icon_act_src}
            className={styles['icon-act']}
            width={30}
          />
        </div>
        <div className={styles['duration-container']}>
          <span>{duration}</span>
        </div>
        <div className={styles['icon-share-container']}>
          <img
            alt={image_alt1}
            src='./images/icons/Share.png'
            className={styles['icon-share']}
          />
        </div>
      </div>
    </div>
  )
}

AddCard.defaultProps = {
  date: 'วัน เดือน ปี',
  icon_share_src: './images/icons/Share.png',
  header_image_src: './images/addcard.png',
  rootClassName: '',
  topic: 'หัวเรื่อง',
  image_alt2: 'image',
  duration: 'ระยะเวลา',
  image_alt: 'image',
  description:
    'คำอธิบายเพิ่มเติม เช่น "วิ่งสวนลุมพินีกับเพื่อน ๆ ที่นัดกันไว้" ',
  icon_act_src: './images/icons/Walking.png',
  image_alt1: 'image',
  edit_img: './images/icons/Edit.png',
  clone_img: './images/icons/Copy.png',
  trash_img: './images/icons/Remove.png',
  icon_size: 20
}

AddCard.propTypes = {
  date: PropTypes.string,
  image_src1: PropTypes.string,
  header_image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  topic: PropTypes.string,
  image_alt2: PropTypes.string,
  duration: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
  icon_act_src: PropTypes.string,
  image_alt1: PropTypes.string,
  edit_img: PropTypes.string,
  clone_img: PropTypes.string,
  trash_img: PropTypes.string,
  icon_size: PropTypes.number
}

export default AddCard;
