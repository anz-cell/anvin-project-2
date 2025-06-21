import React, { useEffect, useRef, useState } from 'react';
import './CSS/Reviews.css';

const reviewsData = [
  {
    name: 'Fatima R.',
    review: 'Business Bay Consultancy set up my mainland company in record time and guided me through every detail. Truly exceptional service!'
  },
  {
    name: 'James A.',
    review: 'Their PRO team handled all my visa paperwork flawlessly. I could focus on growing my business while they managed the bureaucracy.'
  },
  {
    name: 'Ahmed K.',
    review: 'Professional, transparent, and reliable. They helped me choose the right free-zone license and saved me thousands of dirhams.'
  },
  {
    name: 'Sarah L.',
    review: 'From banking introductions to office space, Business Bay Consultancy was a one-stop solution. Highly recommended for new entrepreneurs in the UAE.'
  },
  {
    name: 'Ahmed K.',
    review: 'Professional, transparent, and reliable. They helped me choose the right free-zone license and saved me thousands of dirhams.'
  },
  {
    name: 'Sarah L.',
    review: 'From banking introductions to office space, Business Bay Consultancy was a one-stop solution. Highly recommended for new entrepreneurs in the UAE.'
  }
];

const Reviews = () => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || !isMobile) return;

    const interval = setInterval(() => {
      slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
        setTimeout(() => {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        }, 1000);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="reviews">
      <div className="reviews-left">
        <h2 className="reviews-headder">What Our Clients Have To Say.</h2>
      </div>

      <div className="reviews-right">
        <div
          className={`reviews-container ${isMobile ? 'mobile-slider' : 'desktop-grid'}`}
          ref={sliderRef}
        >
          {reviewsData.map((item, index) => (
            <div key={index} className="review-block">
              <p className="review-text">"{item.review}"</p>
              <p className="review-name"><strong>{item.name}</strong></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
