import React from 'react'
import { assets } from '../assets/assets'
import './CSS/BankingPartners.css'

const BankingPartners = () => {
  return (
    <div className="banking-partners">
      <div className="banking-partners-title">
        <h2>Our Banking Partners</h2>
      </div>
      <div className="banking-partners-container">
        <div className="banking-partners-sliding-images">
          <img src={assets.ADCB} alt="ADCB Bank" />
          <img src={assets.Emraties_NBD} alt="Emirates NBD" />
          <img src={assets.FAB} alt="FAB Bank" />
          <img src={assets.Emraites_Islamic} alt="Emirates Islamic" />
          <img src={assets.VISA} alt="VISA" />
          <img src={assets.RAKBANK} alt="RAKBANK" />
          <img src={assets.Emraites_Islamic} alt="Emirates Islamic" />
          
          {/* Duplicate images for seamless loop */}
          <img src={assets.ADCB} alt="ADCB Bank" />
          <img src={assets.Emraties_NBD} alt="Emirates NBD" />
          <img src={assets.FAB} alt="FAB Bank" />
          <img src={assets.Emraites_Islamic} alt="Emirates Islamic" />
          <img src={assets.VISA} alt="VISA" />
          <img src={assets.RAKBANK} alt="RAKBANK" />
          <img src={assets.Emraites_Islamic} alt="Emirates Islamic" />
        </div>
      </div>
    </div>
  )
}

export default BankingPartners