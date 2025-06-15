// Mobile menu elements (declare first for use in navigation)
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navContainer = document.querySelector(".nav-container");

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
      if (navContainer && mobileMenuBtn) {
        navContainer.classList.remove("active");
        mobileMenuBtn.classList.remove("active");
      }
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

// Contact form is now handled by the inline script in index.html
// This section has been removed to prevent conflicts

// Intersection Observer functionality moved to animations.js to avoid conflicts

// Mobile menu toggle (already declared above)
if (mobileMenuBtn && navContainer) {
  mobileMenuBtn.addEventListener("click", () => {
    navContainer.classList.toggle("active");
    mobileMenuBtn.classList.toggle("active");
  });
}

// Newsletter Form Handler
const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const submitButton = newsletterForm.querySelector("button");

    if (!emailInput.value.trim()) {
      emailInput.classList.add("invalid");
      emailInput.focus();
      return;
    }

    // Remove invalid class if email is valid
    emailInput.classList.remove("invalid");

    // Show loading state
    const originalButtonHTML = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    submitButton.disabled = true;

    try {
      // Submit to Formspree
      const formData = new FormData(newsletterForm);
      const response = await fetch(newsletterForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Show success message
        const successDiv = document.createElement("div");
        successDiv.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: #d4edda;
          color: #155724;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          border: 1px solid #c3e6cb;
          z-index: 9999;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          font-weight: 500;
        `;
        successDiv.innerHTML =
          '<i class="fas fa-check-circle"></i> Thanks for subscribing to our newsletter!';
        document.body.appendChild(successDiv);

        // Remove success message after 5 seconds
        setTimeout(() => {
          successDiv.remove();
        }, 5000);

        newsletterForm.reset();
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      alert("There was an error subscribing. Please try again.");
    } finally {
      // Reset button state
      submitButton.innerHTML = originalButtonHTML;
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

// AOS initialization moved to inline script in index.html to avoid conflicts
