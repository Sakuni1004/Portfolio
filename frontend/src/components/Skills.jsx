import React from 'react';
import { skills } from '../data';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  return (
    <>
    {skills.map(({title, percentage}, index)=>{
        return(
            <div className="progress-bar" key={index}>
                <div className="progress-circle">
                    <CircularProgressbar strokeWidth={1.5} text={`${percentage}%`} value={percentage}/>
                </div>

                <h3 className="skills-tittle">{title}</h3>
            </div>
        )
    })}
    </>
  )
}

export default Skills