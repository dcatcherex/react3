import React, { Component, useState } from 'react';

import Cardview from '../components/cardview'
import { Filter } from '../components/filter';
import { Viewbar } from '../components/viewbar';
import { Table } from '../components/table';

import PropTypes from 'prop-types'


import styles from './Activity.module.css'

export const Activity = () => {
    const [view, setView] = useState(<Cardview />);
    const [filter, setFilter] = useState(<Filter />);
    
    
    const onCardViewClick = () => {
        setView(<Cardview />);
    }
    const onListViewClick = () => {
        setView(<Table />);
    }


    
    return (
        <div>
            {/* <img className={styles['banner']} src={banner_img} alt="" width={1920} height={764} /> */}
            <main className={styles['activity_container']}>
                <div className={styles['filter_container']}>
                    {/* <Filter /> */}
                    {/* <Filter Filter_topic='Month'/> */}
                </div>
                <div className={styles['view_container']}>
                    {/* <Viewbar /> */}

                    <div className={styles['view_control']}>
                        <div className={styles['viewmode']}>
                        
                            <button type="button">
                            <img
                                src='./images/icons/filter.png' height ={30} width={30} alt=''
                            />
                            </button>
                        
                        </div>
                        <div className={styles['viewmode']}>
                                <button> <img src='./images/icons/calendar.png' height ={30} width={30} alt='' /></button>
                                <button onClick={onCardViewClick}> <img src='./images/icons/cardview.png' height ={30} width={30} alt='' /></button>
                                <button onClick={onListViewClick}> <img src='./images/icons/listview.png' height ={30} width={30} alt='' /></button>
                        </div>
                    </div>
                    {view}
                    <div className={styles["fix_container"]}>
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

                    </div>
                </div>
            </main>
            
        </div>
      );
}

