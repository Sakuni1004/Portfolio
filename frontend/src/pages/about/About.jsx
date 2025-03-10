import React from 'react';
import Info from '../../components/info';
import Stats from '../../components/Stats';
import {FaDownload} from 'react-icons/fa';
import CV from '../../assets/sakunika.pdf';
import Skills from '../../components/Skills';
import './about.css';

const About = () => {
  return (
 <main className='section3-container'>
  <section className="about">
    <h2 className="section2-tittle">About <span>Me</span> </h2>

    <div className="about-container-grid">
      <div className="about-info">
        <h3 className="section-sub">Personal Information</h3>
        <ul className="list-info-grid">
          <Info/>
        </ul>
        <a href={CV} download='' className="button">Download CV <span className="button-icon"><FaDownload/></span></a>
      </div>
{/* 
      <div className="stats-grid">
        <Stats/>
      </div> */}
    </div>
  </section>

  <div className="seperator">
    <section className="skills">
      <h3 className="section-subtittle subtittle-center">My Skills</h3>
      <div className="skills-container-grid">
        <Skills/>
      </div>
    </section>
  </div>
 </main>
  )
}

export default About