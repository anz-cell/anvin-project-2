import React from 'react';
import './CSS/AchievementDashboard.css';

const achievements = [
  { title: "Years in Business", value: "13 +" },
  { title: "Google Rating", value: "5" },
  { title: "Companies Incorporated", value: "35K+" },
  { title: "Awards Won", value: "32+" },
  { title: "Customer Retention Rate", value: "95.32%" },
  { title: "Happiness Rate", value: "100% +" },
  { title: "Consultants", value: "18" },
  { title: "Satisfied Customers", value: "1000 +" }
];

const formatValue = (text) => {
  return text.split(/(\+|%)/g).map((part, i) =>
    (part === '' || part === '') ? <span key={i} className="highlight-symbol">{part}</span> : part
  );
};

const AchievementDashboard = () => {
  // Duplicate achievements for infinite scroll
  const duplicated = [...achievements, ...achievements];

  return (
    <div className="achievement-dashboard">
      <div className="marquee-container">
        <div className="marquee-track">
          {duplicated.map((item, index) => (
            <div className="dashboard-card" key={index}>
              <h3>{formatValue(item.value)}</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementDashboard;
