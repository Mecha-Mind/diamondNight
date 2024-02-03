"use client"
import { useState } from 'react';
import styles from './contact.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }else if (formData.name.length === 1){
      errors.name = 'Name must be more than 1 character'
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = async () => {
    try {
      const response = await fetch('/api/sendJsMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await sendEmail();
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    } 
  };
  return (
    <>
      {submitSuccess ? (
        <div className={styles.successMessage}>
          Thank you for contacting us!
        </div>
      ) : (
        <form id="contact-form" onSubmit={handleSubmit} noValidate>
          <h1>Write a message to us</h1>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Type your name'
              value={formData.name}
              onChange={handleInputChange}
              className={`${styles.input} ${
                formErrors.name ? styles.error : ''
              }`}
            />
            {formErrors.name && (
              <span className={styles.errorMessage}>{formErrors.name}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Type your email'
              value={formData.email}
              onChange={handleInputChange}
              className={`${styles.input} ${
                formErrors.email ? styles.error : ''
              }`}
            />
            {formErrors.email && (
              <span className={styles.errorMessage}>{formErrors.email}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder='Type your subject'
              value={formData.subject}
              onChange={handleInputChange}
              className={`${styles.input} ${
                formErrors.subject? styles.error : ''
              }`}
            />
            {formErrors.subject && (
              <span className={styles.errorMessage}>{formErrors.subject}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder='Type your message'
              value={formData.message}
              onChange={handleInputChange}
              className={`${styles.input} ${
                formErrors.message ? styles.error : ''
              }`}
            ></textarea>
            {formErrors.message && (
              <span className={styles.errorMessage}>{formErrors.message}</span>
            )}
          </div>
          <button type="submit" id='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;