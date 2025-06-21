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
              Let's Guide
              <br/>Your Vision To <br/>
              Victory<br />
              {/* for all<br />
              brands<sup></sup> */}
            </h2>
          </div>

          {/* London Office */}
          <div className="office-info">
            <h3 className="office-title">UNITED ARAB EMIRATES</h3>
            <div className="office-details">

              <p>+971&nbsp;55&nbsp;262&nbsp;1001</p>
              <p>+971&nbsp;50&nbsp;560&nbsp;2056</p>
              <p>+971&nbsp;52&nbsp;875&nbsp;6201</p>
              <p className="address">Ras Al&nbsp;Khaimah, United Arab Emirates</p>
              <p className="address">Open&nbsp;-&nbsp;24&nbsp;Hours&nbsp;</p>
            </div>
          </div>

          {/* Services List */}
          <div className="office-info">
            <h3 className="office-title">SERVICES</h3>
            <div className="office-details">
              <p>UAE Mainland Business Setup</p>
              <p>UAE Free Zone Business Setup</p>
              <p>PRO Services &amp; Attestation</p>
              <p>Offshore Business License</p>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="newsletter-social">
            <div className="social-section">
              <h4 className="social-title">FOLLOW US</h4>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Behance">
                  {/* Behance SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4.5 9.5H8C9.10457 9.5 10 10.3954 10 11.5C10 12.6046 9.10457 13.5 8 13.5H4.5V9.5ZM4.5 8V15.5H8C10.2091 15.5 12 13.7091 12 11.5C12 9.29086 10.2091 7.5 8 7.5H4.5ZM14.5 11.5C14.5 10.1193 15.6193 9 17 9C18.3807 9 19.5 10.1193 19.5 11.5C19.5 12.8807 18.3807 14 17 14C15.6193 14 14.5 12.8807 14.5 11.5ZM13 11.5C13 13.7091 14.7909 15.5 17 15.5C19.2091 15.5 21 13.7091 21 11.5C21 9.29086 19.2091 7.5 17 7.5C14.7909 7.5 13 9.29086 13 11.5ZM4.5 6.5H10V8H4.5V6.5Z" fill="currentColor"/></svg>
                </a>
                <a href="#" className="social-link" aria-label="Dribbble">
                  {/* Dribbble SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5"/><path d="M7 7C9.5 9 14.5 9 17 7" stroke="currentColor" strokeWidth="1.5"/><path d="M7 17C9.5 15 14.5 15 17 17" stroke="currentColor" strokeWidth="1.5"/><path d="M12 4V20" stroke="currentColor" strokeWidth="1.5"/></svg>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  {/* Instagram SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  {/* LinkedIn SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M8 10V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="8" r="1" fill="currentColor"/><path d="M12 13C12 11.8954 12.8954 11 14 11C15.1046 11 16 11.8954 16 13V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
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
