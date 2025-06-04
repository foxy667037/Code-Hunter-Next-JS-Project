"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ImageCarousel = ({ images, interval}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const totalImages = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      moveToNextImage();
    }, interval);

    return () => clearInterval(timer); // Clean up interval on unmount
  }, [currentIndex, interval]);

  const moveToNextImage = () => {
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === totalImages) {
      setIsAnimating(false); // Disable animation for the reset
      setCurrentIndex(0);
    }
  };

  return (
    <main style={styles.container}>
      <div
        style={{
          ...styles.slider,
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isAnimating ? "transform 0.8s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.concat(images[0]).map((image, index) => (
          <div key={index} style={styles.imageWrapper}>
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill={true}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    margin: "auto",
  },
  slider: {
    display: "flex",
    height: "100%",
  },
  imageWrapper: {
    position: "relative",
    minWidth: "100%",
    height: "100%",
  },
};

export default ImageCarousel;