// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove('scroll-up');
    return;
  }

  if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
    // Scroll Down
    header.classList.remove('scroll-up');
    header.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
    // Scroll Up
    header.classList.remove('scroll-down');
    header.classList.add('scroll-up');
  }
  lastScroll = currentScroll;
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Here you would typically send the data to your server
    console.log('Form submitted:', formObject);

    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    successMessage.style.cssText = `
            background: #2ecc71;
            color: white;
            padding: 1rem;
            border-radius: 5px;
            margin-top: 1rem;
            text-align: center;
        `;

    this.appendChild(successMessage);
    this.reset();

    // Remove success message after 5 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  });
}

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all service cards and features
document.querySelectorAll('.service-card, .feature').forEach(element => {
  observer.observe(element);
});

// Mobile menu toggle
const createMobileMenu = () => {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');

  // Create mobile menu button
  const mobileMenuBtn = document.createElement('button');
  mobileMenuBtn.className = 'mobile-menu-btn';
  mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  mobileMenuBtn.style.cssText = `
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: #ff0000;
      cursor: pointer;
      padding: 0.5rem;
  `;

  // Add button to navbar
  navbar.insertBefore(mobileMenuBtn, navLinks);

  // Handle dropdown in mobile view
  const dropdown = document.querySelector('.dropdown');
  if (dropdown) {
    const dropdownTrigger = dropdown.querySelector('.dropdown-trigger');
    dropdownTrigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle('active');
      }
    });
  }

  // Toggle menu on click
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Show/hide mobile menu button based on screen size
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      mobileMenuBtn.style.display = 'block';
      navLinks.style.display = 'none';
      if (dropdown) {
        dropdown.classList.remove('active');
      }
    } else {
      mobileMenuBtn.style.display = 'none';
      navLinks.style.display = 'flex';
    }
  };

  window.addEventListener('resize', handleResize);
  handleResize();
};

// Initialize mobile menu
createMobileMenu();
