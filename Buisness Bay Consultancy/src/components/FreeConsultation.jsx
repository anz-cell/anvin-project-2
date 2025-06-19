import React from 'react'
import './CSS/FreeConsultation.css'

const GetInTouch = () => {
  return (
    <div className="free-consultation">
      <h1 className="free-consultation-header">
        Book Your <span className='free-consultation-hilight'>Free </span>
        Consultation Today
      </h1>

      <div className="free-consultation-button-wrapper">
        <button className="free-consultation-button">
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default GetInTouch
