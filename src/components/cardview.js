import React from 'react';
import Card  from './card'
import AddCard from './AddCard'

import style from './Cardview.module.css'
import trackdatas from '../data/trackdatas';

const Cardview = () => {
    const cardElements = trackdatas.map((trackdata, index) => {
        // console.log( <Card key={index} trackdata={trackdata.icon_act_src} />);
        return <Card key={index} trackdata={trackdata} />; 
    });
    console.log(cardElements);

    return (
        <main className={style.cardview_container}>
            <AddCard />
            {cardElements}
            
        </main>
      );
}

export default Cardview;