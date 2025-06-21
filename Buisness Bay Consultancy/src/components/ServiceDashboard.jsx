import React from 'react';
import './CSS/ServiceDashboard.css';
import { assets } from '../assets/assets'; // Assuming icons are stored here

const services = [
  { title: "Accounting", icon: assets.Accounting, description: "Professional accounting and bookkeeping services." },
  { title: "Visa & PRO Services", icon: assets.Visa_Icon, description: "Simplified visa and PRO process solutions." },
  { title: "Bank Account Opening", icon: assets.Bank, description: "Open local or international bank accounts with ease." },
  { title: "Payment Gateway", icon: assets.Payment_Gateway, description: "Secure online payment processing integration." },
  { title: "Golden Visas", icon: assets.Golden_Visa, description: "Long-term UAE residency solutions for investors." },
  { title: "Corporate Tax", icon: assets.Corporate_Tax, description: "Tax registration, planning, and filing." },
  { title: "Corporate Structuring", icon: assets.Corporate_Structuring, description: "Optimize business structure for growth." },
  { title: "Office Space Solutions", icon: assets.Office_Space_Solutions, description: "Flexible workspace and office leasing options." },
  { title: "Attestation & Legalization", icon: assets.Attestation, description: "Document authentication and legalization." },
  { title: "Trademark & Copyright", icon: assets.Trademark, description: "Safeguard your intellectual property rights." },
  { title: "Product Registration", icon: assets.productRegistration, description: "Compliant product approvals and listings." },
  { title: "Import & Export Code", icon: assets.importAndExport, description: "Get registered to trade goods globally." },
];

const ServiceDashboard = () => {
  return (
    <div className="service-dashboard">
      <h2 className="dashboard-title">Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={service.icon} alt={service.title} className="service-icon" />
                <p className="service-title">{service.title}</p>
              </div>
              <div className="flip-card-back">
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDashboard;
