import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Icons from './Icons';
import PopupMsg from './PopupMsg';
import NavIcons from './NavIcons';
import { Link } from 'react-router-dom';
import './css/Contact.css';

function Contact() {
  const [details, setDetails] = useState({ name: '', email: '', message: '' });
  const [isOpen, setIsOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = details;

    if (!name || !email || !message) {
      setErrorMsg('Please fill in all fields.');
      openPopup();
      return;
    }

    if (!emailRegex.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      openPopup();
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setDetails({ name: '', email: '', message: '' });
      setErrorMsg('Submitted successfully!');
    } catch (error) {
      console.error('Email send error:', error);
      setErrorMsg('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
      openPopup();
    }
  };

  return (
    <section className="contact" id="contact">
      <PopupMsg
        isOpen={isOpen}
        closePopup={closePopup}
        msg={errorMsg}
        style={errorMsg !== 'Submitted successfully!' ? 'alert' : 'popup'}
      />

      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
               <FontAwesomeIcon icon={faLocationDot}/>
              </div>
              <div>
                <h4>Location</h4>
                <p>Bangalore, India</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
              <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <h4>Email</h4>
                <Link to={'mailto:impanabtth@gmail.com'} className="email">
                  impanabtth@gmail.com
                </Link>
              </div>
            </div>

            <div className="social-links-container">
              <h4>Connect With Me</h4>
              <Icons/>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Your Name"
                value={details.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Your Email"
                value={details.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input"
                placeholder="Your Message"
                value={details.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
