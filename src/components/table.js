import React from 'react'
import Style from './Table.module.css'
import PropTypes from 'prop-types'
import { TableRow } from './TableRow'
import trackdatas from '../data/trackdatas';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';





export const Table = () => {

    const tableRowElement = trackdatas.map((trackdata, index) => {
        return (
                <TableRow key={index} trackdata={trackdata} />
        
        )
        
    });

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
                    {tableRowElement}
                    
                    
                </table>
                <footer className={Style.form_footer}>

                </footer>
        </div>
    )
}

Table.defaultProps = {
    date: '15 กุมภา 22',
}

Table.propTypes = {
    link1_url: PropTypes.string,
}