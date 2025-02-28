import React from 'react';
import {stats} from '../data';
import parse from 'html-react-parser';

function Stats() {
  return (
   <>
   {stats.map(({no, title}, index)=>{
    return(
        <div className="stats-box" key={index}>
            <h3 className="stats-number">{no}</h3>
            <p className="stas-tittle">{parse(title)}</p>
        </div>
    )
   })}
   </>
  )
}

export default Stats