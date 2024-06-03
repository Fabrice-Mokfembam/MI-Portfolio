import React from 'react';
import './Projects.scss';

const projects = [
  {
    img: 'project1.jpg',
    name: 'IStore',
    description: 'A niche product site where I focused 80% on the backend and 20% on the frontend.',
    techStack: 'MERN stack',
    githubLink: 'https://github.com/your-username/istore',
    liveLink: 'https://your-istore-website.com',
  },
  {
    img: 'project2.jpg',
    name: 'Blogger',
    description: 'A blogging platform built using the MERN stack with SASS for styling.',
    techStack: 'MERN stack, SASS',
    githubLink: 'https://github.com/your-username/blogger',
    liveLink: 'https://your-blogger-website.com',
  },
  {
    img: 'project3.jpg',
    name: 'Mini Realtime Word Processing App',
    description: 'A mini word processing app with real-time collaboration built using the MERN stack and Socket.IO.',
    techStack: 'MERN stack, SASS, Socket.IO',
    githubLink: 'https://github.com/your-username/mini-word-processing-app',
    liveLink: 'https://your-mini-word-processing-app.com',
  },
  {
    img: 'project4.jpg',
    name: 'V$C Rentals',
    description: 'A website for renting chairs and tables, developed for a client project using React.js and SASS.',
    techStack: 'React.js, SASS',
    githubLink: 'https://github.com/your-username/vc-rentals',
    liveLink: 'https://your-vc-rentals-website.com',
  },
  {
    img: 'project5.jpg',
    name: 'ThiagoAI',
    description: 'A bot developed using React.js, SASS, and the Gemini API.',
    techStack: 'React.js, SASS, Gemini API',
    githubLink: 'https://github.com/your-username/thiago-ai',
    liveLink: 'https://your-thiago-ai-website.com',
  },
  {
    img: 'project6.jpg',
    name: 'CamNewsAPI',
    description: 'An API that provides news about Cameroonian activities, developed using Node.js, Express, and Cheerio for web scraping.',
    techStack: 'Node.js, Express, Cheerio',
    githubLink: 'https://github.com/your-username/camnews-api',
    liveLink: 'https://your-camnews-api-website.com',
  },
];

function Projects() {
  return (
    <section className='projects-container'>
      <h3>My Projects</h3>
      <h1>My <span>Amazing Work</span></h1>
      <div className="projects-wrapper">
        {projects.map((project, index) => (
          <div className="project" key={index}>
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