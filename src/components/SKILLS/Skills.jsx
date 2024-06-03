import React from 'react';
import './Skills.scss'; 
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaServer, FaPhp, FaCode } from 'react-icons/fa';

const skills = [
  {
    icon: <FaHtml5 className="icon" />,
    name: 'HTML5',
    experience: '2+ Years of Experience',
  },
  {
    icon: <FaCss3Alt className="icon" />,
    name: 'CSS3',
    experience: '3+ Years of Experience',
  },
  {
    icon: <FaJs className="icon" />,
    name: 'JavaScript',
    experience: '4+ Years of Experience',
  },
  {
    icon: <FaReact className="icon" />,
    name: 'React',
    experience: '2+ Years of Experience',
  },
  {
    icon: <FaNodeJs className="icon" />,
    name: 'Node.js',
    experience: '3+ Years of Experience',
  },
  {
    icon: <FaDatabase className="icon" />,
    name: 'MongoDB',
    experience: '2+ Years of Experience',
  },
  {
    icon: <FaServer className="icon" />,
    name: 'Express.js',
    experience: '3+ Years of Experience',
  },
  {
    icon: <FaPhp className="icon" />, // Assuming FaPhp is the correct import
    name: 'PHP',
    experience: '2+ Years of Experience',
  },
  {
    icon: <FaCode className="icon" />,
    name: 'Next.js',
    experience: '1+ Years of Experience',
  },
];

function Skills() {
  return (
    <section className='Skills-container'>
      <h2>My <span>Skills</span></h2>
      <div className="skill-wrapper">
        {skills.map((skill, index) => (
          <div className="each_skill" key={index}>
            {skill.icon}
            <h3>{skill.name}</h3>
            <h4>{skill.experience}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
