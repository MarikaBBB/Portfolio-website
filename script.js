const contents = document.querySelectorAll('.content');
const learning = document.getElementById('learning');

const contactForm = document.getElementById("contactForm");
const thankyouMessage = document.getElementById("thankyouMessage");



// Function to toggle content based on menu clicks
function toggleContent(contentId) {
    // Hide all content sections
    contents.forEach(function (content) {
        
        content.style.display = 'none';
    });

    // Show the selected content
    document.getElementById(contentId).style.display = 'block';
}

// Add event listeners for menu clicks
const links = Array.from(document.getElementsByClassName('navbar'));

links.forEach((link) => {
    link.addEventListener('click', function () {
        toggleContent(link.dataset.link);
    });
});

// Function to toggle project card visibility
function toggleScrollProjectCards() {
    // Toggle the visibility of project cards
    learning.classList.toggle('show-projects');
    learning.classList.toggle('hidden');
    learning.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Add event listener to the "Click Here" button for toggling project cards
document.getElementById('clickBtn').addEventListener('click', () => {
    toggleScrollProjectCards(); // Toggle project card visibility after scrolling
});

// Initial content to display
toggleContent('statement');



// Function to show/hide 'thank you message'
function showThankyouMessage() {
    thankyouMessage.classList.add("visible");
}

function hideThankyouMessage() {
    thankyouMessage.classList.remove("visible");
}

// Contact form
function registerEmail(event) {
    event.preventDefault();

    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const subject = contactForm.querySelector('input[name="subject"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;

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
            if (response.ok) {
                contactForm.reset();
                showThankyouMessage();
                setTimeout(hideThankyouMessage, 3000);
            } else {
                console.error("Failed to send email.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

contactForm.addEventListener("submit", registerEmail);


