import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./CSS/Navbar.css";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bannerIndex, setBannerIndex] = useState(0);

  const bannerMessages = [
    "Welcome to Business Bay Consultancy!",
    "Get expert visa and business services today.",
    "Start your business in the UAE hassle-free!",
    "Contact us for a free consultation.",
    "Lets build a future together."
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % bannerMessages.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="top-banner">
        <p>{bannerMessages[bannerIndex]}</p>
      </div>

      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          <img
            src={assets.buisess_logo}
            alt="logo"
            className={`logo-img ${isScrolled ? "scrolled-logo" : ""}`}
          />
        </Link>

        <div className="nav-links">
          {navLinks.map((link, i) => (
            <Link key={i} to={link.path} className="nav-link" onClick={() => setIsMenuOpen(false)}>
              {link.name}
              <div className={`underline ${isScrolled ? "scrolled-underline" : ""}`}></div>
            </Link>
          ))}
        </div>

        <div className="mobile-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className={`menu-icon ${isScrolled ? "invert-icon" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
            <svg className="close-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {navLinks.map((link, i) => (
            <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)} className="mobile-link">
              {link.name}
            </Link>
          ))}

          <button className="mobile-login-btn">Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
