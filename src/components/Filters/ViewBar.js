import React from 'react'

import PropTypes from 'prop-types'
import styles from './Viewbar.module.css'

export const Viewbar = ({ filter_img, calendar_img, card_img, list_img, icon_size }) => {


        return (
            <main>
                <div className={styles['viewbar_container']}>
                    <div className={styles['viewbar_left']}>
                        
                        <button type="button"> 
                        <img 
                            src={filter_img} height ={icon_size} width={icon_size} alt='' 
                        />
                        </button>
                        
                    </div>
                    <div className={styles['viewbar_right']}>
                        <div className={styles['search']}>
                            <input className={styles['searchbox']} type="text" name="searchbox" id="" />
                        </div>
                        <div className={styles['viewmode']}>
                            <button type="button"> <img src={calendar_img} height ={icon_size} width={icon_size} alt='' /></button>
                            <button type="button"> <img src={card_img} height ={icon_size} width={icon_size} alt='' /></button>
                            <button type="button"> <img src={list_img} height ={icon_size} width={icon_size} alt='' /></button>
                        </div>
                    </div>
                </div>
            </main>
        )
}

Viewbar.defaultProps = {
    filter_img: './images/icons/filter.png',
    calendar_img: './images/icons/calendar.png',
    card_img: './images/icons/cardview.png',
    list_img: './images/icons/listview.png',
    icon_size: 30
}

Viewbar.propTypes = {
    filter_img: PropTypes.string,
    calendar_img: PropTypes.string,
    card_img: PropTypes.string,
    list_img: PropTypes.string,
    icon_size: PropTypes.number
}