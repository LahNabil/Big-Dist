import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Email.css'; // Import your CSS file

const Email = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1bthmls', 'template_ji2a1rl', form.current, 'l3L5Sgf7xkquGJiat')
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="email-container">
    <h2>Contact Us</h2>
    {isSuccess ? ( // Render success message if isSuccess is true
      <p className="success-message">Message sent successfully!</p>
    ) : (
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input type="text" name="user_name" id="user_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input type="email" name="user_email" id="user_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" required></textarea>
        </div>
        <div className="form-group">
          <input type="submit" value="Send" />
        </div>
      </form>
    )}
  </div>
);
};

export default Email;