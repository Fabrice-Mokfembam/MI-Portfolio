import React from 'react';
import './Footer.scss';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  const email = 'your_email@example.com';
  const whatsappNumber = '237686009133'; 


  return (
    <footer>
      <div className="footer-wrapper">
        <p>&copy; {new Date().getFullYear()} Fabrice Mokfembam</p>
        <ul className="social-icons">
          <li>
            <a href="https://github.com/Fabrice-Mokfembam" target="_blank" rel="noreferrer">
              <FaGithub className='icon' />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/Fabrice-Mokfembam/" target="_blank" rel="noreferrer">
              <FaLinkedin className='icon'/>
            </a>
          </li>
          <li>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" >
              <FaWhatsapp className='icon' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
