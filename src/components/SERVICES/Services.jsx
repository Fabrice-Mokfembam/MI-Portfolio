import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPalette, FaCog } from 'react-icons/fa';
import './services.scss';

const services = [
  {
    icon: <FaLaptopCode className="icon" />,
    title: 'Web Development',
    description: 'I offer professional web development services, creating responsive and user-friendly websites using the latest technologies.',
  },
  {
    icon: <FaMobileAlt className="icon" />,
    title: 'App Development',
    description: 'I specialize in developing mobile applications for iOS and Android platforms, providing seamless user experiences.',
  },
  {
    icon: <FaPalette className="icon" />,
    title: 'UI/UX Design',
    description: 'I create visually appealing and intuitive user interfaces, focusing on delivering exceptional user experiences.',
  },
  {
    icon: <FaCog className="icon" />,
    title: 'Product Management',
    description: 'I provide product management services, helping businesses plan, develop, and launch successful digital products.',
  },
];

function Services() {
  return (
    <section id='Services' className='services-container'>
      <div className="services-wrapper">
        <h3>My Services</h3>
        <h1>The <span>Services I Offer</span></h1>
        <div className="services">
          {services.map((service, index) => (
            <div className="service" data-aos='fade-right' key={index}>
              <div className="icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;