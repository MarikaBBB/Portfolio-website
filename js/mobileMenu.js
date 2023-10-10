/**
 * Hamburger Menu handling
 */
const btn = document.getElementById("yourButtonId");
const modal = document.getElementById("yourModalId");
const span = document.querySelector(".closeButtonClass"); 
const navLinks = document.querySelectorAll(".menuBar a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        // Close the modal
        modal.style.display = "none";
        
        // Close the mobile menu
        const nav = document.getElementById("nav-menu");
        nav.classList.remove("mobile-active");
    });
});

document.getElementById("hamburger-btn").addEventListener("click", toggleMenu);

function toggleMenu() {
    const nav = document.getElementById("nav-menu");
    const hamburgerIcon = document.querySelector(".mobile-menu");

    nav.classList.toggle("mobile-active");

    // Toggle the hamburger icon
    if (nav.classList.contains("mobile-active")) {
        hamburgerIcon.textContent = "✖"; // change to a close icon
    } else {
        hamburgerIcon.textContent = "≡"; // revert back to hamburger icon
    }
}

window.addEventListener("resize", function () {
    const nav = document.getElementById("nav-menu");

    if (window.innerWidth > 768) {
        // This is the breakpoint set in your CSS media query
        nav.classList.remove("mobile-active"); // Hide the mobile menu
    }
});

// Assuming these are related to the modal:
btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
