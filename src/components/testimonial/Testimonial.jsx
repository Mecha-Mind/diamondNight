"use client"
import React, { useState, useEffect, useRef } from 'react';
import SpecialHeading from '@/elements/specialHeadingHome/SpecialHeading';
import testimonialData from './testimonialData'
import styles from './testimonial.module.css';

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out the current testimonial
      testimonialRef.current.classList.remove(styles.fadeIn);
      testimonialRef.current.classList.add(styles.fadeOut);

      // Move to the next testimonial
      setCurrentTestimonial((prev) => (prev + 1) % testimonialData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentTestimonial]);

  // When the fade-out animation ends, switch to the next testimonial and fade it in
  const handleTransitionEnd = () => {
    testimonialRef.current.classList.remove(styles.fadeOut);
    testimonialRef.current.classList.add(styles.fadeIn);
  };

  return (
    <section className={styles.testimonialSection} id='testimonials'>
      <SpecialHeading title={'Testimonials'} desc={'What our clients say'}/>
      <div className={`${styles.container} container`}>
        {testimonialData.map((testimonial, index) => (
          <div
            key={index}
            ref={index === currentTestimonial ? testimonialRef : null}
            className={`${styles.testimonial} ${index === currentTestimonial ? styles.fadeIn : ''}`}
            onTransitionEnd={handleTransitionEnd}
          >
            <h3>{testimonial.name}</h3>
            <p>{testimonial.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
