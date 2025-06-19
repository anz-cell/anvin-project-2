import React from 'react';
import { assets } from '../assets/assets';
import './CSS/WhatsApp.css'
const WhatsApp = () => {
  return (
    <div className="whatsapp">
      <a href="https://wa.me/971552621001" target="_blank" rel="noopener noreferrer">
        <img src={assets.whatsapp} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default WhatsApp;