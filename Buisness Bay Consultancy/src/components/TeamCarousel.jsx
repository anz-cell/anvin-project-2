import React, { useRef } from 'react';
import './CSS/TeamCarousel.css';

const teamMembers = [
  {
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1080&q=80',
    name: 'Mohamed Al Jaber',
    position: 'Chief Executive Officer',
    phone: '971501234567',
  },
  {
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1080&q=80',
    name: 'Ahmed Ali',
    position: 'Operations Manager',
    phone: '971522345678',
  },
  {
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1080&q=80',
    name: 'Fatima Al Mansoori',
    position: 'Head of Marketing',
    phone: '971553456789',
  },
  {
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1080&q=80',
    name: 'Saif Al Nuaimi',
    position: 'Client Relations',
    phone: '971564567890',
  },
];

const TeamCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="team-carousel">
      <h1 className="team-carousel-header">Meet Our Team</h1>
      <div className="team-slider">
        <button className="team-button scroll left" onClick={() => scroll('left')}>
          ←
        </button>
        <div className="team-cards" ref={scrollRef}>
          {teamMembers.map((member, idx) => (
            <div className="team-card" key={idx}>
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-position">{member.position}</p>
              <a
                className="consult-btn"
                href={`https://wa.me/${member.phone}?text=${encodeURIComponent(
                  `Hello ${member.name}, I would like to consult with you.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consult Them
              </a>
            </div>
          ))}
        </div>
        <button className="team-button scroll right" onClick={() => scroll('right')}>
          →
        </button>
      </div>
    </section>
  );
};

export default TeamCarousel; 