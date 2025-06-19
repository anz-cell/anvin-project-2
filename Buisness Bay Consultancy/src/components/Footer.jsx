import React from 'react';
import './CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="company-info">
            <h2 className="company-title">
              The agency<br />
              for impatient<br />
              brands<sup>®</sup>
            </h2>
          </div>

          {/* London Office */}
          <div className="office-info">
            <h3 className="office-title">LONDON</h3>
            <div className="office-details">
              <p>newbusiness@wearemozaic.com</p>
              <p>+44 20 7998 7571</p>
              <p className="address">
                Unit 306, Metropolitan Wharf,<br />
                70 Wapping Wall, London E1W 3SS
              </p>
              <a href="#" className="map-link">
                SEE ON MAP
                <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Buenos Aires Office */}
          <div className="office-info">
            <h3 className="office-title">BUENOS AIRES</h3>
            <div className="office-details">
              <p>newbusiness@wearemozaic.com</p>
              <p>+54 11 6739 7949</p>
              <p className="address">
                Cabello 1451 5st floor,<br />
                Buenos Aires
              </p>
              <a href="#" className="map-link">
                SEE ON MAP
                <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="newsletter-social">
            <h3 className="newsletter-title">
              WANT TO BE THE <strong>SMARTEST</strong><br />
              IN YOUR OFFICE?
            </h3>
            <a href="#" className="newsletter-link">
              SIGN UP FOR OUR NEWSLETTER
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <div className="social-section">
              <h4 className="social-title">FOLLOW US</h4>
              <div className="social-links">
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="3.2" />
                    <path d="M9 2h6a7 7 0 0 1 7 7v6a7 7 0 0 1-7 7H9a7 7 0 0 1-7-7V9a7 7 0 0 1 7-7z" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
