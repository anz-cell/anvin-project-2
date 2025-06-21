import React, { useState, useEffect } from 'react';
import './CSS/CostCalulator.css';

// Copied unchanged logic from old CostCalulator.jsx
const CostCalculator = () => {
  const [formData, setFormData] = useState({
    businessActivity: '',
    premises: '',
    numberOfOwners: 0,
    numberOfVisas: '',
    jurisdiction: ''
  });

  const [openDropdown, setOpenDropdown] = useState(null);

  const businessActivities = [
    'Trading & General Trading',
    'Professional Services',
    'Consultancy Services',
    'E-commerce',
    'Manufacturing',
    'Technology Services',
    'Healthcare Services',
    'Education Services'
  ];

  const jurisdictions = [
    'Dubai Mainland',
    'Dubai Free Zone',
    'Abu Dhabi Mainland',
    'Abu Dhabi Free Zone',
    'Sharjah Mainland',
    'Sharjah Free Zone',
    'RAK Mainland',
    'RAK Free Zone'
  ];

  const premises = [
    'Office Space',
    'Warehouse',
    'Retail Shop',
    'Virtual Office',
    'Co-working Space',
    'Industrial Space'
  ];

  const visaOptions = [
    '1-2 Visas',
    '3-5 Visas',
    '6-10 Visas',
    '11-20 Visas',
    '20+ Visas'
  ];

  const toggleDropdown = (fieldName) => {
    setOpenDropdown(openDropdown === fieldName ? null : fieldName);
  };

  const selectOption = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
    setOpenDropdown(null);
  };

  const handleNumberOfOwnersChange = (e) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    setFormData(prev => ({
      ...prev,
      numberOfOwners: value
    }));
  };

  const calculateCost = () => {
    // TODO: connect to backend service; for demo just show alert
    console.log('Form Data:', formData);
    alert('Calculation completed! Check console for form data.');
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const renderDropdown = (fieldName, options, placeholder, icon) => (
    <div className="form-field">
      <label className="form-label">{placeholder}*</label>
      <div className="dropdown-container">
        <button 
          className="dropdown-button" 
          onClick={() => toggleDropdown(fieldName)}
          type="button"
        >
          <div className="dropdown-content">
            {icon}
            <span className={`dropdown-text ${!formData[fieldName] ? 'placeholder' : ''}`}>
              {formData[fieldName] || '—Please choose an option—'}
            </span>
          </div>
          <svg 
            className={`dropdown-chevron ${openDropdown === fieldName ? 'open' : ''}`} 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            fill="none"
          >
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div className={`dropdown-menu ${openDropdown === fieldName ? 'show' : ''}`} role="listbox">
          {options.map((option, index) => (
            <button
              key={index}
              className="dropdown-option"
              onClick={() => selectOption(fieldName, option)}
              type="button"
              role="option"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="cost-calculator" id="cost-calculator">
      {/* Header */}
      <div className="cost-calculator-header">
        <h1 className="cost-calculator-title">Cost Calculator</h1>
      </div>

      <div className="cost-calculator-grid">
        {/* Left Column */}
        <div className="cost-calculator-column">
          {/* Business Activity */}
          {renderDropdown(
            'businessActivity',
            businessActivities,
            'Choose your business activity',
            <svg className="dropdown-icon icon" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path d="M3 21h18"/>
              <path d="M5 21V7l8-4v18"/>
              <path d="M19 21V11l-6-4"/>
            </svg>
          )}

          {/* Number of Owners */}
          <div className="form-field">
            <label className="form-label">Number of owners*</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="number" 
                min="0" 
                value={formData.numberOfOwners} 
                className="number-input" 
                placeholder="0"
                onChange={handleNumberOfOwnersChange}
              />
              <svg className="input-icon icon" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
          </div>

          {/* Jurisdiction */}
          {renderDropdown(
            'jurisdiction',
            jurisdictions,
            'Choose your jurisdiction',
            <svg className="dropdown-icon icon" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          )}
        </div>

        {/* Right Column */}
        <div className="cost-calculator-column">
          {/* Premises */}
          {renderDropdown(
            'premises',
            premises,
            'What type of premises would you require?',
            <svg className="dropdown-icon icon" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
          )}

          {/* Number of Visas */}
          {renderDropdown(
            'numberOfVisas',
            visaOptions,
            'Number of visas',
            <svg className="dropdown-icon icon" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
              <line x1="1" y1="10" x2="23" y2="10"/>
            </svg>
          )}
        </div>
      </div>

      {/* Calculate Button */}
      <div className="calculate-button-container">
        <button className="calculate-button" onClick={calculateCost}>
          Calculate Now
        </button>
      </div>
    </div>
  );
};

export default CostCalculator;
