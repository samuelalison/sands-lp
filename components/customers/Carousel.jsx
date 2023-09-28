import React, { useState } from 'react';
import './Carousel.css'

const Carousel = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextItem = () => {
      if (currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        // If you want the carousel to loop back to the first item when reaching the end.
        setCurrentIndex(0);
      }
    };
  
    const prevItem = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        // If you want the carousel to loop to the last item when clicking previous on the first item.
        setCurrentIndex(data.length - 1);
      }
    };
  
    return (
      <div className="carousel">
        <div className="carousel__container">
          <div onClick={prevItem}>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="34" width="34" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path></svg>
        </div>
        <div className="carousel-content">
          <p className="carousel-content__p">{data[currentIndex].desc}</p>
          <h2 className="carousel-content_h2">{data[currentIndex].header}</h2>
          <p className="carousel-content__p2">{data[currentIndex].place}</p>
        </div>
        <div onClick={nextItem}>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="34" width="34" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"></path></svg>
        </div>
      </div>
      </div>
    );
  };
  
  export default Carousel;