import React from 'react';
import './CSS/Reviews.css';

const reviewsData = [
  {
    name: 'Shanna C.',
    review: 'I love Away! From the thoughtfully created products to the customer service team that seems to go above and beyond, everything is exactly how I’d want it to be.',
  },
  {
    name: 'Alexander F.',
    review: 'I’ve taken my [luggage] to Paris, San Francisco, New Mexico, Indonesia... I have never traveled more at ease. If there was a rating higher than 10, I’d give it.',
  },
  {
    name: 'William R.',
    review: 'The best brand in my collection and always my first choice when traveling.',
  },

  {
    name: 'William R.',
    review: 'The best brand in my collection and always my first choice when traveling.',
  },    
];

const Reviews = () => {
  return (
    <div className="reviews">
        <div className="reviews-left">
<h2 className="reviews-headder">What Our Customers Have To Say.</h2>
        <p></p>
        </div>

        <div className="reviews-right">
<div className="reviews-container">
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
