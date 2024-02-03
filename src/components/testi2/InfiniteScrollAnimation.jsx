// InfiniteScrollAnimation.js
"use client"
import { useEffect, useRef } from 'react';
import SpecialHeading from '@/elements/specialHeadingHome/SpecialHeading';
import styles from './infiniteScrollAnimation.module.css';
import testimonialData from '@/components/testimonial/testimonialData';

const InfiniteScrollAnimation = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation(scroller);
    }

    function addAnimation(scroller) {
      scroller.setAttribute('data-animated', true);

      const scrollerInner = scroller.querySelector(`.${styles.scrollerInner}`);
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, []); // Empty dependency array ensures that this effect runs only once after mount

  return (
    <div className={styles.infiniteScrollAnimation}>
      <SpecialHeading title={'Testimonials'} desc={'What our clients say'} />
      <div
        ref={scrollerRef}
        className={`${styles.scroller} ${styles.slow}`}
        data-animated={true} // Apply animation styles directly
      >
        <ul className={`${styles.tagList} ${styles.scrollerInner}`}>
          {testimonialData.map((testimonial, index) => (
            <li key={index}>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfiniteScrollAnimation;
