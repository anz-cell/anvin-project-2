// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu if open
      navContainer.classList.remove("active");
      mobileMenuBtn.classList.remove("active");
    }
  });
});

// Header scroll effect
const header = document.querySelector(".header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove("scrolled");
    return;
  }

  if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
    // Scrolling down
    header.classList.remove("scroll-up");
    header.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    header.classList.contains("scroll-down")
  ) {
    // Scrolling up
    header.classList.remove("scroll-down");
    header.classList.add("scroll-up");
  }

  if (currentScroll > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// Form submission handling
const contactForm = document.querySelector(".contact-form");
const successMessage = document.querySelector(".success-message");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Basic form validation
    const formData = new FormData(contactForm);
    let isValid = true;
    let firstInvalidInput = null;

    contactForm.querySelectorAll("input, textarea, select").forEach((input) => {
      if (input.hasAttribute("required") && !input.value.trim()) {
        isValid = false;
        input.classList.add("invalid");
        if (!firstInvalidInput) firstInvalidInput = input;
      } else {
        input.classList.remove("invalid");
      }
    });

    if (!isValid) {
      firstInvalidInput.focus();
      return;
    }

    // Show loading state
    const submitButton = contactForm.querySelector(".submit-button");
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      successMessage.classList.add("active");
      contactForm.reset();

      // Hide success message after 3 seconds
      setTimeout(() => {
        successMessage.classList.remove("active");
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      // Reset button state
      submitButton.innerHTML = originalButtonText;
      submitButton.disabled = false;
    }
  });
}

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all service cards and features
document.querySelectorAll(".service-card, .feature").forEach((element) => {
  observer.observe(element);
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navContainer = document.querySelector(".nav-container");

mobileMenuBtn.addEventListener("click", () => {
  navContainer.classList.toggle("active");
  mobileMenuBtn.classList.toggle("active");
});

// Newsletter Form
const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const submitButton = newsletterForm.querySelector("button");

    if (!emailInput.value.trim()) {
      emailInput.classList.add("invalid");
      return;
    }

    // Show loading state
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    submitButton.disabled = true;

    try {
      // Simulate newsletter subscription (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Thank you for subscribing to our newsletter!");
      newsletterForm.reset();
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      alert(
        "There was an error subscribing to the newsletter. Please try again."
      );
    } finally {
      // Reset button state
      submitButton.innerHTML = '<i class="fas fa-paper-plane"></i>';
      submitButton.disabled = false;
    }
  });
}

// Search Functionality
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

if (searchInput && searchBtn) {
  searchBtn.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      // Implement search functionality
      console.log("Searching for:", searchTerm);
    }
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchBtn.click();
    }
  });
}

// Initialize AOS
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 100,
});
