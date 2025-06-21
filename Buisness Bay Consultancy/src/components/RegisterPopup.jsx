import React, { useState, useEffect } from 'react'
import './CSS/RegisterPopup.css'

const RegisterPopup = () => {
  // Show popup when component mounts
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Open the modal once the Home page is rendered
    setIsOpen(true)
  }, [])

  if (!isOpen) return null

  return (
    <div className="register-popup-overlay" role="presentation">
      <div className="register-popup-modal" role="dialog" aria-modal="true" aria-labelledby="register-title">
        {/* Left – visual */}
        <div
          className="register-popup-image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80')",
          }}
        />

        {/* Right – form */}
        <div className="register-popup-content">
          <button
            className="register-popup-close"
            aria-label="Close register modal"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          <h1 id="register-title" className="register-popup-title">Get a Call Back in less than <span className='hilight-register'>1 Minute</span></h1> 
          <form className="register-popup-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Business Name
              <input type="text" placeholder="Type Here" required autoFocus />
            </label>

            <label>
              Contact Number
              <input type="tel" placeholder="Type Here" required />
            </label>

            <label>
              Address
              <input type="text" placeholder="Address Here" required />
            </label>

            <label>
              City
              <select required defaultValue="">
                <option value="" disabled>
                  Choose Emirate
                </option>
                <option value="dubai">Dubai</option>
                <option value="abu-dhabi">Abu Dhabi</option>
                <option value="sharjah">Sharjah</option>
                <option value="ajman">Ajman</option>
              </select>
            </label>

            <button type="submit" className="register-popup-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPopup 
