import React from 'react'
import Style from './Table.module.css'
import PropTypes from 'prop-types'


export const Table = (props) => {

    const {trackdata} = props;

    return(

        <div className={Style.table_form}>
                <div className={Style.form_head}>
                    <button><i className="fa-solid fa-circle-plus"></i>Add Activities</button>       
                </div>
                
                <table>
                    <tr>
                        <th><input type="checkbox" name="" id=""/></th>
                        <th><i className="fa-solid fa-trash-can"></i> </th>
                        <th><i className="fa-solid fa-sort"></i>Topic</th>
                        <th><i className="fa-solid fa-sort"></i>Description</th>
                        <th><i className="fa-solid fa-sort"></i>Type</th>
                        <th><i className="fa-solid fa-sort"></i>Duration</th>
                        <th><i className="fa-solid fa-sort"></i>Date</th>
                        <th><i className="fa-solid fa-sort"></i>Kcal</th>
                        <th><i className="fa-solid fa-sort"></i>Tag</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td className={Style.checkbox}>
                            <input type="checkbox" name="checkbok" id="checkbok"/>
                        </td>
                        <td className={Style.preview}>
                            <img className={Style.thumbpic} src="./images/yoga1.jpg" alt="yoga" />
                        </td>
                        <td className={Style.topic}>
                            วิ่งกับเพื่อนที่สวนลุม
                        </td>
                        <td className={Style.des}>
                            วันนี้นัดเพื่อนแก้วที่สวนลุมแล้วกะไปเที่ยวกันต่อที่เยาวราช
                        </td>
                        <td className={Style.type}>
                            <i className="fa-solid fa-person-running"></i>
                            trekking
                        </td>
                        <td className={Style.duration}>
                            1 hr 20 m
                        </td>
                        <td className={Style.date}>
                            15 Feb 22
                        </td>
                        <td className={Style.kcal}>
                            1000 cal
                        </td>
                        <td className={Style.tag}>
                            girl,สวนลุม
                        </td>
                        <td className={Style.edit}>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash-can"></i>
                        </td>
                    </tr>
                    <tr>
                        <td className="checkbox">
                            <input type="checkbox" name="checkbok" id="checkbok"/>
                        </td>
                        <td className="preview">
                            <img className={Style.thumbpic} src="./images/run1.jpg" alt="yoga" />
                        </td>
                        <td className="topic">
                            วิ่งกับเพื่อนที่สวนลุม
                        </td>
                        <td className="des">
                            วันนี้นัดเพื่อนแก้วที่สวนลุมแล้วกะไปเที่ยวกันต่อที่เยาวราช
                        </td>
                        <td className="type">
                            <i className="fa-solid fa-person-running"></i>
                            trekking
                        </td>
                        <td className="duration">
                            1 hr 20 m
                        </td>
                        <td className="date">
                            15 Feb 22
                        </td>
                        <td className="kcal">
                            1000 cal
                        </td>
                        <td className="tag">
                            girl,สวนลุม
                        </td>
                        <td className="edit">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash-can"></i>
                        </td>
                    </tr>

                    <tr>
                        <td className="checkbox">
                            <input type="checkbox" name="checkbok" id="checkbok"/>
                        </td>
                        <td className="preview">
                            <img className={Style.thumbpic} src="./images/execer1.jpg" alt="yoga" />
                        </td>
                        <td className="topic">
                            วิ่งกับเพื่อนที่สวนลุม
                        </td>
                        <td className="des">
                            วันนี้นัดเพื่อนแก้วที่สวนลุมแล้วกะไปเที่ยวกันต่อที่เยาวราช
                        </td>
                        <td className="type">
                            <i className="fa-solid fa-person-running"></i>
                            trekking
                        </td>
                        <td className="duration">
                            1 hr 20 m
                        </td>
                        <td className="date">
                            15 Feb 22
                        </td>
                        <td className="kcal">
                            1000 cal
                        </td>
                        <td className="tag">
                            girl,สวนลุม
                        </td>
                        <td className="edit">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-pen-to-square"></i>
                            <i className="fa-solid fa-trash-can"></i>
                        </td>
                    </tr>
                </table>
            </div>
    )
}

Table.defaultProps = {
    date: '15 กุมภา 22',
}

Table.propTypes = {
    link1_url: PropTypes.string,
}