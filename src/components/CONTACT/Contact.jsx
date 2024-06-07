import React, { useState } from 'react';
import './Contact.scss';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log({ name, email, message });

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <section id='Contact' className='contact-container'>
      <div className="contact-wrapper">
        <h3>Get in touch</h3>
        <h1>Contact <span>Me</span></h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name
            <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} required />
          </label>

          <label htmlFor="email">
            Email
            <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label htmlFor="message">
            Message
            <textarea name="message" id="message" placeholder='Write me a message....' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;