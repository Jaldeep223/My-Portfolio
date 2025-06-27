

import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (API, email service, etc)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <p><strong>Mr. JALDEEP PATEL</strong></p>
      <p>Email: <a href="mailto:pateljaldeep266@gmail.com">pateljaldeep266@gmail.com</a></p>
      <p>Contact No.: +44 7979830667</p>
      <p>
        LinkedIn:{' '}
        <a
          href="https://linkedin.com/in/jaldeep-patel-b6118783"
          target="_blank"
          rel="noreferrer"
        >
          jaldeep-patel-b6118783
        </a>
      </p>
      <p>
        Github:{' '}
        <a href="https://github.com/Jaldeep223"
        target='_blank'
        rel='noreferrer'
        >
         Jaldeep223 
        </a>
      </p>
      <p>SW16 5SZ, London, UK</p>

      <hr style={{ margin: '2rem 0' }} />

      <h3>Send Me a Message</h3>
      {submitted && <p style={{ color: 'green' }}>Thank you for your message!</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:<br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label><br /><br />
        <label>
          Email:<br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label><br /><br />
        <label>
          Message:<br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label><br /><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;





