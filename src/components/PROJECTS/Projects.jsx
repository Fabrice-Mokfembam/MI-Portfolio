import React from 'react';
import './Projects.scss';

import { word,AI,API,blogger,VC,Istore } from '../../assets/images';


const projects = [
  {
    img: Istore,
    name: 'IStore',
    description: 'A niche product site where I focused 80% on the backend and 20% on the frontend.',
    techStack: 'MERN stack',
    githubLink: 'https://github.com/Fabrice-Mokfembam/istore-frontend',
    liveLink: 'https://user-panel-lac.vercel.app/',
  },
  {
    img: blogger,
    name: 'Blogger',
    description: 'A blogging platform built using the MERN stack with SASS for styling.',
    techStack: 'MERN stack, SASS',
    githubLink: 'https://github.com/Fabrice-Mokfembam/Blog',
    liveLink: 'https://your-blogger-website.com',
  },
  {
    img: word,
    name: 'Mini Realtime Word Processing App',
    description: 'A mini word processing app with real-time collaboration built using the MERN stack and Socket.IO.',
    techStack: 'MERN stack, SASS, Socket.IO',
    githubLink: 'https://github.com/Fabrice-Mokfembam/Realtime-Wordprocessing-app',
    liveLink: 'https://your-mini-word-processing-app.com',
  },
  {
    img: VC,
    name: 'V$C Rentals',
    description: 'A website for renting chairs and tables, developed for a client project using React.js and SASS.',
    techStack: 'React.js, SASS',
    githubLink: 'https://github.com/Fabrice-Mokfembam/VC-Rentals',
    liveLink: 'https://your-vc-rentals-website.com',
  },
  {
    img: AI,
    name: 'ThiagoAI',
    description: 'A bot developed using React.js, SASS, and the Gemini API.',
    techStack: 'React.js, SASS, Gemini API',
    githubLink: 'https://github.com/Fabrice-Mokfembam/AI-Chat-Assistant',
    liveLink: 'https://your-thiago-ai-website.com',
  },
  {
    img: API,
    name: 'CamNewsAPI',
    description: 'An API that provides news about Cameroonian activities, developed using Node.js, Express, and Cheerio for web scraping.',
    techStack: 'Node.js, Express, Cheerio',
    githubLink: 'https://github.com/Fabrice-Mokfembam/CamNewsAPI',
    liveLink: 'https://your-camnews-api-website.com',
  },
];

function Projects() {
  return (
    <section id='Projects' className='projects-container'>
      <h3>My Projects</h3>
      <h1>My <span>Amazing Work</span></h1>
      <div className="projects-wrapper">
        {projects.map((project, index) => (
          <div className="project" data-aos='fade-up' key={index}>
            <img src={project.img} alt="Project Image" />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>Tech Stack: {project.techStack}</p>
            <div>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;