import React, { useRef } from 'react';
import './CSS/VisaService.css';
import { assets } from '../assets/assets';

const VisaService = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  const visaCards = [
    {
      title: 'Biz 0',
      description: [
        'Basic business setup package with essential company formation services.',
        'Includes up to 5 business activities.',
        'Access to co-working facility.',
        'Starting from AED 6,010/year.',
      ],
    },
    {
      title: 'Biz Saver One',
      description: [
        'Complete business package with 1 lifetime visa included.',
        'Perfect for solo entrepreneurs.',
        'GT+E-commerce license with co-working space.',
        'Starting from AED 12,010/year.',
      ],
    },
    {
      title: 'Biz Saver Plus One',
      description: [
        'Enhanced package with 1 lifetime visa.',
        'Includes up to 3 business activities.',
        'Ideal for small businesses.',
        'Starting from AED 14,010/year.',
      ],
    },
    {
      title: 'Biz Saver Plus Two',
      description: [
        'Growing business package with 2 lifetime visas.',
        'Includes up to 3 business activities.',
        'Great for partnerships or small teams.',
        'Starting from AED 18,010/year.',
      ],
    },
    {
      title: 'Biz Saver Plus Three',
      description: [
        'Expanding business package with 3 lifetime visas.',
        'Comprehensive services included.',
        'Perfect for established businesses.',
        'Starting from AED 22,010/year.',
      ],
    },
    {
      title: 'Biz Saver Plus Four',
      description: [
        'Premium business package with 4 lifetime visas.',
        'Full flexibility for operations.',
        'Ideal for larger teams.',
        'Starting from AED 26,010/year.',
      ],
    },
  ];

  return (
    <div className="visa-service">
      <h1 className="visa-service-headder">Company Set-Up Services</h1>

      <div className="visa-service-slider">
        <button className="scroll-button left" onClick={() => scroll('left')}>←</button>

        <div className="visa-services-cards" ref={scrollRef}>
          {visaCards.map((card, index) => (
            <div className="visa-service-card" key={index}>
              <h3 className="visa-card-title">{card.title}</h3>
              <ul className="visa-card-description">
                {card.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button className="visa-card-button">
                Know More
                <img src={assets.arrow_up} alt="arrow-icon" className="visa-card-arrow" />
              </button>
            </div>
          ))}
        </div>

        <button className="scroll-button right" onClick={() => scroll('right')}>→</button>
      </div>
    </div>
  );
};

export default VisaService;
