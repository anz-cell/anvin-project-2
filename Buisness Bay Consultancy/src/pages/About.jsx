import React, { useState } from "react";
import "./CSS/About.css";
import "./CSS/PromoSection.css";
import TeamCarousel from "../components/TeamCarousel";
import ReviewSlider from "../components/ReviewSlider";

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
      <div className="promo-section">
        <div className="promo-left">
          <p className="promo-eyebrow">Go green this summer</p>
          <h1 className="promo-title">Grab your travel MVPs</h1>
          <p className="promo-description">
            From the beach to the boardroom, summer is packed. Gear up for smooth travels with recycled carry-ons, lightweight apparel and trending accessories.
          </p>

          <div className="promo-products">
            <div className="promo-product">
              <img
                src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif"
                alt="Suitcase gif"
              />
              <span>SHOP SUITCASES &rarr;</span>
            </div>

            <div className="promo-product">
              <img
                src="https://media.giphy.com/media/26BRI88FDsdrnd9kc/giphy.gif"
                alt="Backpack gif"
              />
              <span>SHOP BAGS &rarr;</span>
            </div>
          </div>
        </div>
        <div className="promo-right">
          <img
            src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&w=1000&q=80"
            alt="Travel golf cart"
          />
        </div>
      </div>
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
      <TeamCarousel />
    </>
  );
};

export default About;
