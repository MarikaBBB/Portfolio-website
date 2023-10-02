// Grabbing DOM elements for navigation and content
const navLinks = document.querySelectorAll(".navbar");
const mainPage = document.querySelector('.mainPage');
const contents = document.querySelectorAll('.content');
const contactForm = document.getElementById("contactForm");
const thankyouMessage = document.getElementById("thankyouMessage");

document.addEventListener("DOMContentLoaded", function() {
    // Function to hide all the sections
    function hideAllContents() {
        contents.forEach(content => content.style.display = 'none');
    }

    // Event listener for the navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            // Determine which link was clicked
            const linkTarget = e.currentTarget.getAttribute("data-link");

            // If the Projects link is clicked, hide the main content, else show it
            if (linkTarget === 'projects') {
                mainPage.style.display = 'none';
            } else {
                mainPage.style.display = 'block';
            }

            // Hide all the sections
            hideAllContents();

            // Display the clicked section
            document.getElementById(linkTarget).style.removeProperty('display');
        });
    });

    // Initial state setup when the page loads
    hideAllContents();
    mainPage.style.display = 'block';
    document.getElementById('statement').style.display = 'block';
});

// Function to display the 'thank you' message
function showThankyouMessage() {
    thankyouMessage.classList.add("visible");
}

// Function to hide the 'thank you' message
function hideThankyouMessage() {
    thankyouMessage.classList.remove("visible");
}

// Event listener for the contact form submission
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Extract data from the form
    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const subject = contactForm.querySelector('input[name="subject"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;

    // AJAX call to send the form data
    fetch("https://formspree.io/f/xaygovyn", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            subject,
            message,
        }),
    })
    .then((response) => {
        // Check for a successful response, reset the form and display a 'thank you' message
        if (response.ok) {
            contactForm.reset();
            showThankyouMessage();
            setTimeout(hideThankyouMessage, 3000);
        } else {
            // Log an error for failed email submission
            console.error("Failed to send email.");
            alert("There was an issue sending your message. Please try again later.");
        }
    })
    .catch((error) => {
        // Log any fetch errors
        console.error("Error:", error);
    });
});


