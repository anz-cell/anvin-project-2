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
    <div className="register-popup-overlay">
      <div className="register-popup-modal">
        {/* Left – visual */}
        <div
          className="register-popup-image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80')",
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

          <h1 className="register-popup-title">Register Your Hotel</h1>
          <form className="register-popup-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Hotel Name
              <input type="text" placeholder="Type Here" required />
            </label>

            <label>
              Contact – Phone
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
                  Select City
                </option>
                <option value="dubai">Dubai</option>
                <option value="abu-dhabi">Abu Dhabi</option>
                <option value="sharjah">Sharjah</option>
                <option value="ajman">Ajman</option>
              </select>
            </label>

            <button type="submit" className="register-popup-submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPopup 