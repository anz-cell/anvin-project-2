import React, { useState } from "react";
import "./CSS/About.css";
import "./CSS/PromoSection.css";
import TeamCarousel from "../components/TeamCarousel";
import ReviewSlider from "../components/ReviewSlider";
import ImageGallery from "../components/ImageGallery";

const features = [
  {
    icon: "●",
    title: "MARKET EXPERTISE",
    description:
      "Decades of Experience: Navigating UAE Business Landscape with Authority.",
  },
  {
    icon: "■",
    title: "SUCCESS",
    description:
      "Empowering Your Success: Seamless Business Setup Solutions in the UAE.",
  },
  {
    icon: "▲",
    title: "STRATEGIC PLANNING",
    description:
      "Navigating Success with Precision: Smart Strategies for Sustainable Growth.",
  },
  {
    icon: "♦",
    title: "CLIENT SATISFACTION",
    description:
      "Exceeding Expectations, Building Trust: Your Satisfaction, Our Priority.",
  },
];

// Images corresponding to each feature (index matched)
const featureImages = [
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2084&q=80", // MARKET EXPERTISE
  "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=2084&q=80", // SUCCESS
  "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=2084&q=80", // STRATEGIC PLANNING
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2084&q=80", // CLIENT SATISFACTION
];

const defaultImage = featureImages[0];

const About = () => {
  const [currentImage, setCurrentImage] = useState(defaultImage);

  const handleMouseEnter = (idx) => {
    setCurrentImage(featureImages[idx]);
  };

  const handleMouseLeave = () => {
    setCurrentImage(defaultImage);
  };

  return (
    <>
      {/* <div className="promo-section">
        <div className="promo-left">
          <p className="promo-eyebrow">Start Smart in the UAE</p>
          <h1 className="promo-title">Your Partner in Business Success</h1>
          <p className="promo-description">
            Whether you are launching a startup or expanding an established company, we provide end-to-end solutions—from license registration to long-term growth strategies.
          </p>
        </div>
        <div className="promo-right">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80"
            alt="Dubai skyline business district"
          />
        </div>
      </div> */}
      <div className="about-page">
        <div className="about-left">
          <img
            src={currentImage}
            alt="Business professionals"
          />
        </div>
        <div className="about-right">
          <h1 className="about-main-title">Why Choose Us</h1>
          <div className="about-features">
            {features.map((feature, idx) => (
              <div
                className="about-box"
                key={idx}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="about-icon">{feature.icon}</div>
                <div className="about-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ReviewSlider />
      
      <ImageGallery/>
    </>
  );
};

export default About;
