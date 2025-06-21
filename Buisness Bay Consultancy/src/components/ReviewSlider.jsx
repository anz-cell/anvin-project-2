import React, { useState } from 'react';
import './CSS/ReviewSlider.css';

const slides = [
  {
    quote: '"Top Business Setup Consultancy in the UAE – 2024 Business Excellence Awards"',
    publication: 'Gulf Business',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=987&h=640',
  },
  {
    quote: '"Best PRO & Government Liaison Service Provider"',
    publication: 'MENA Startup Reviews',
    image: 'https://images.pexels.com/photos/889839/pexels-photo-889839.jpeg?auto=compress&cs=tinysrgb&w=987&h=640',
  },
  {
    quote: '"Leading Consultant for Free-Zone & Mainland Company Formation"',
    publication: 'Dubai SME Magazine',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=987&h=640',
  },
];

const ReviewSlider = () => {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const { quote, publication, image } = slides[index];
  const progressWidth = ((index + 1) / total) * 100;

  return (
    <section className="review-slider">
      <div className="review-left">
        <button className="slider-arrow left" onClick={prevSlide} aria-label="Previous slide">&#8592;</button>
        <blockquote className="review-quote">{quote}</blockquote>
        <div className="review-publication">{publication}</div>
        <button className="slider-arrow right" onClick={nextSlide} aria-label="Next slide">&#8594;</button>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progressWidth}%` }} />
        </div>
      </div>
      <div className="review-right">
        <img src={image} alt="Review visual" />
      </div>
    </section>
  );
};

export default ReviewSlider; 