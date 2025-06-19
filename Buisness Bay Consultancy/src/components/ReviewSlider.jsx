import React, { useState } from 'react';
import './CSS/ReviewSlider.css';

const slides = [
  {
    quote: '"One of the Best Luggage Brands in the World: 2024 Readers\' Choice Awards"',
    publication: 'Condé Nast Traveler',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=987&q=80',
  },
  {
    quote: '"Gear of the Year 2023 – travel made smarter, lighter and greener."',
    publication: 'Traveler Magazine',
    image: 'https://images.unsplash.com/photo-1541857411-0f3363c91800?auto=format&fit=crop&w=987&q=80',
  },
  {
    quote: '"The suitcase that conquered every airport stress test."',
    publication: 'Global Travel Awards',
    image: 'https://images.unsplash.com/photo-1582591561341-d9d59c6d5a3c?auto=format&fit=crop&w=987&q=80',
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