import React from 'react';
import Info from '../../components/info';
import Stats from '../../components/Stats';
import {FaDownload} from 'react-icons/fa';
import CV from '../../assets/sakunika.pdf';

const About = () => {
  return (
 <main className='section-container'>
  <section className="about">
    <h2 className="section-tittle">About <span>Me</span> </h2>

    <div className="about-container-grid">
      <div className="about-info">
        <h3 className="section-sub">Personal Information</h3>
        <ul className="list-info-grid">
          <Info/>
        </ul>
        <a href={CV} download='' className="button">Download CV <span className="button-icon"><FaDownload/></span></a>
      </div>

      <div className="stats-grid">
        <Stats/>
      </div>
    </div>
  </section>
 </main>
  )
}

export default About