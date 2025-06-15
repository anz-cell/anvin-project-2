// Smooth scrolling is handled in index.js to avoid conflicts

// Intersection Observer for scroll animations
const animationObserverOptions = {
  root: null,
  rootMargin: "0px 0px -100px 0px",
  threshold: 0.1,
};

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, animationObserverOptions);

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add animation classes to elements
  const elementsToAnimate = [
    ".service-section",
    ".step-card",
    ".benefits-list li",
    ".service-card",
    ".feature",
    ".cta-section",
  ];

  elementsToAnimate.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.classList.add("scroll-animate");
      element.style.animationDelay = `${index * 0.1}s`;
      animationObserver.observe(element);
    });
  });

  // Add hover effects to interactive elements
  document
    .querySelectorAll(".service-card, .feature, .step-card")
    .forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.02)";
        card.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.15)";
        card.style.transition = "all 0.3s ease";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
        card.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
      });
    });

  // Add parallax effect to hero sections
  const heroSections = document.querySelectorAll(".hero, .service-hero");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    heroSections.forEach((hero) => {
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    });
  });

  // Add fade-in animation for benefits list items with stagger
  const benefitItems = document.querySelectorAll(".benefits-list li");
  benefitItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });
});

// Scroll Animation
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".animate-on-scroll");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const isVisible = elementTop < window.innerHeight && elementBottom >= 0;

    if (isVisible) {
      element.classList.add("animate-in");
    }
  });
};

// Parallax Effect
const parallaxEffect = () => {
  const parallaxElements = document.querySelectorAll(".parallax");

  parallaxElements.forEach((element) => {
    const speed = element.dataset.speed || 0.5;
    const yPos = -(window.pageYOffset * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });
};

// Typing Effect
const typeWriter = (element, text, speed = 100) => {
  let i = 0;
  element.innerHTML = "";

  const type = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };

  type();
};

// Counter Animation
const animateCounter = (element, target, duration = 2000) => {
  let start = 0;
  const increment = target / (duration / 16);

  const updateCounter = () => {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
};

// Fade In Elements
const fadeInElements = () => {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const isVisible = elementTop < window.innerHeight && elementBottom >= 0;

    if (isVisible) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Initialize Animations
const initAnimations = () => {
  // Scroll animations
  window.addEventListener("scroll", () => {
    animateOnScroll();
    parallaxEffect();
    fadeInElements();
  });

  // Initial check for elements in view
  animateOnScroll();
  fadeInElements();

  // Typing effect for hero section
  const heroTitle = document.querySelector(".hero-content h1");
  if (heroTitle) {
    const text = heroTitle.textContent;
    typeWriter(heroTitle, text, 100);
  }

  // Counter animation for statistics
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = parseInt(counter.dataset.target);
    animateCounter(counter, target);
  });
};

// Run animations when DOM is loaded
document.addEventListener("DOMContentLoaded", initAnimations);
