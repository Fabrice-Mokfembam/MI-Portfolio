import React from 'react';
import './Footer.scss';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'; // Import social media icons

function Footer() {
  const email = 'your_email@example.com'; // Replace with your email address
  const whatsappNumber = '+15551234567'; // Replace with your WhatsApp number (including country code)

  const handleWhatsAppClick = () => {
    // Handle WhatsApp click (optional)
    // You can use libraries like react-whatsapp to open WhatsApp chat directly
    // or redirect users to a WhatsApp link with their message pre-filled.
    console.log('WhatsApp icon clicked!');
  };

  return (
    <footer>
      <div className="footer-wrapper">
        <p>&copy; {new Date().getFullYear()} Fabrice Mokfembam</p>
        <ul className="social-icons">
          <li>
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
              <FaGithub className='icon' />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noreferrer">
              <FaLinkedin className='icon'/>
            </a>
          </li>
          <li>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" onClick={handleWhatsAppClick}>
              <FaWhatsapp className='icon' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
