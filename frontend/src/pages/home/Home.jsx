import React from 'react';
import Profile from '../../assets/home1.jpeg'
import { Link } from 'react-router-dom';
import { FaArrowRight} from 'react-icons/fa';
import "./home.css";

const Home = () => {
  console.log("Home component rendered");
  return (
<section className='home section grid'>
  <img src={Profile} alt='' className='home-img'/>

 <div className="home-content">
  <div className="home-data">
    <h1 className="home-tittle">
      <span>I'm Sakunika Karunathilaka</span>  <br/>Web Designer
    </h1>
    <p className="home-discribe">
    Hi, I'm Sakunika Karunathilaka, a passionate Software Developer with experience in full-stack web and mobile development.
     I specialize in building responsive and user-friendly applications using modern technologies 
     like React, Next.js, Ruby on Rails, and Tailwind CSS. I love solving complex problems and creating efficient,
      scalable solutions. Check out my work below!
    </p>

    <Link to='/about' className='button'>
    More About Me{' '}
    <span className='button-icon'>
      <FaArrowRight/>

    </span>
    </Link>
  </div>

  <div className="color-block"></div>
 </div>

</section>
  )
}

export default Home;