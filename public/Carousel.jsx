// components/RotatingCarousel.js
import styles from './rotatingCarousel.module.css';
import Image from 'next/image';

const Carousel = () => {
  

  return (
    <div className={styles.carouselContainer}>
      <div className={`${styles.carouselWrapper}`}>
        {/* Repeat this div for each image */}
        <div className={styles.carouselItem}>
          <Image  src="/company-logo.svg" alt="company" width={200} height={100} />
        </div>
        <div className={styles.carouselItem}>
          <Image src="/startup-logo.svg" alt="startup" width={200} height={100} />
        </div>
        <div className={styles.carouselItem}>
          <Image src="/venture-logo.svg" alt="venture" width={200} height={100} />
        </div>
        <div className={styles.carouselItem}>
          <Image src="/agency-logo.svg" alt="agency" width={200} height={100} />
        </div>
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Carousel;
