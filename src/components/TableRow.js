
import React from 'react'
import Style from './Table.module.css'
 
export const TableRow = (props) => {
    const {trackdata} = props;

    return (

        <tr>
            <td className={Style.checkbox}>
                <input type="checkbox" name="checkbok" id="checkbok"/>
            </td>
            <td className={Style.preview}>
                <img 
                    className={Style.thumbpic} 
                    src={trackdata.header_image_src}
                    alt={trackdata.image_alt2}
                />
            </td>
            <td className={Style.topic}>
                {trackdata.topic}
            </td>
            <td className={Style.des}>
                {trackdata.description}
            </td>
            <td className={Style.type}>
                <img
                    alt={trackdata.image_alt}
                    src={trackdata.icon_act_src}
                    width={30}
                />
                {/* trekking */}
            </td>
            <td className={Style.duration}>
                {trackdata.duration}
            </td>
            <td className={Style.date}>
                {trackdata.date}
            </td>
            <td className={Style.kcal}>
                1000 cal
            </td>
            <td className={Style.tag}>
                <button>วิ่ง</button>
                <button>สวนลุม</button> 
            </td>
            <td className={Style.edit}>
                {/* <i className="fa-solid fa-star"></i> */}
                <button><i class="fa-solid fa-share-nodes"></i></button>
                <button><i className="fa-solid fa-pen-to-square"></i></button>
                <button><i className="fa-solid fa-trash-can"></i></button>
            </td>
        </tr>
    )
    }