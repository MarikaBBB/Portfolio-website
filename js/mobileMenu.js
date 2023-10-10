/**
 * Hamburger Menu handling
 */
const hamburgerBtn = document.getElementById("hamburger-btn");
const nav = document.getElementById("nav-menu");
const hamburgerIcon = document.querySelector(".mobile-menu");

// Function to toggle the mobile menu
function toggleMenu() {
    nav.classList.toggle("mobile-active");

    // Toggle the hamburger icon
    if (nav.classList.contains("mobile-active")) {
        hamburgerIcon.textContent = "✖"; // change to a close icon
    } else {
        hamburgerIcon.textContent = "≡"; // revert back to hamburger icon
    }
}

// Event listener for hamburger button click
hamburgerBtn.addEventListener("click", toggleMenu);

// Event listener for window resize
window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        // This is the breakpoint set in your CSS media query
        nav.classList.remove("mobile-active"); // Hide the mobile menu
        hamburgerIcon.textContent = "≡"; // reset to hamburger icon
    }
});

// Function to scroll to a section when a navigation link is clicked
function scrollToSection(targetId) {
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
      const yOffset = targetSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
      toggleMenu(); // Close the mobile menu after clicking a link
  }
}

// Event listener for navigation links
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        const targetId = link.getAttribute("data-link");
        scrollToSection(targetId);
    });
});

// Scroll to top button functionality
const scrollToTopButton = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

