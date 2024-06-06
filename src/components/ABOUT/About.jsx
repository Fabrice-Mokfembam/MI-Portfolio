import React from 'react';
import { FaFutbol, FaBook, FaHiking } from 'react-icons/fa';
import './About.scss';
import { halfpic1, halfpic2, me } from '../../assets/images';

const interests = [
  {
    icon: <FaFutbol className='icon' />,
    name: 'Football',
  },
  {
    icon: <FaBook className='icon' />,
    name: 'Reading',
  },
  {
    icon: <FaHiking className='icon' />,
    name: 'Adventuring',
  },
];

function About() {
  return (
    <section id='About' className='about-container'>
      <div className="about-wrapper">
        <div className="about-1">
          <div className="img-about">
            <img src={halfpic2} alt="image of me" />
          </div>
        </div>
        <div className="about-2">
          <h3>About <span>Me</span></h3>
          <h1>Fabrice <span>Mokfembam</span></h1>
          <p className="about-description" data-aos="fade-up">
            I am a student at FET in the University of Buea since 2021. Throughout this period, I have had the opportunity to learn a lot and gain skills in the MERN stack, where I excel. Being a lover of innovation and technology, I am passionate about leveraging my skills to create impactful digital solutions.
          </p>
          <p>
            Aside from my technical pursuits, I also have interests in various other areas.
          </p>
          <div className="interests">
            {interests.map((interest, index) => (
              <div className="each-interest" data-aos="zoom-in" key={index}>
                {interest.icon}
                <p>{interest.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;