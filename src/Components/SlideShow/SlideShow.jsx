import React, { useState, useEffect } from "react";
import styles from "./SlideShow.module.scss"; // Import Sass Module

const Slideshow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [images.length, interval]);

  return (
    <div className={styles.container}>
      <div
        className={styles.slider}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={styles.slide}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
