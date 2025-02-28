import React from 'react';
import { personalInfo} from '../data';

const Info = () => {
  return (
    <>
    {personalInfo.map(({tittle, description, }, index)=>{
      return(
        <li className="info-item" key={index}>
          <span className="info-tittle">{tittle}</span>
          <span className="info-description">{description}</span>

        </li>
      )
    })}
    </>
  )
}

export default Info