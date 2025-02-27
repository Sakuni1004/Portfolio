import React from 'react';
import {stats} from '../data';

function Stats() {
  return (
   <>
   {stats.map(({no, tittle}, index)=>{
    return(
        <div className="stats box" key={index}>
            <h3 className="stats-number">{no}</h3>
            <p className="stas-tittle">{tittle}</p>
        </div>
    )
   })}
   </>
  )
}

export default Stats