import React from 'react'
import './Contact.scss'

function Contact() {
  return (
    <section id='Contact' className='contact-container'>
      <div className="contact-wrapper">
        <h3>Get in touch</h3>
        <h1>Contact <span>Me</span></h1>
        <form >

          <label htmlFor="name">
            Name
            <input type="text" id='name' required/>
          </label>

          <label htmlFor="email">
            Email
            <input type="email" id='email' required/>
          </label>

          <label htmlFor="message">
            Message
            <textarea name="message" id="message"  placeholder='Write me a message....'required></textarea>
          </label>

          <button>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
