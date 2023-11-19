/**
 * Global functions
 */
function showThankyouMessage() {
    const thankyouMessage = document.getElementById("thankyouMessage");
    thankyouMessage.classList.add("visible");
}

function hideThankyouMessage() {
    const thankyouMessage = document.getElementById("thankyouMessage");
    thankyouMessage.classList.remove("visible");
}


/**
 * Initial Setup on DOM Loaded
 */
document.addEventListener("DOMContentLoaded", function() {
    
    //Grab DOM elements for navigation and content
    
    const navLinks = document.querySelectorAll(".navbar a");
    const mainPage = document.querySelector('.mainPage');
    const contents = document.querySelectorAll('.content');
    const contactForm = document.getElementById("contactForm");
    

    /**
     * Functions to manage content visibility
     */
    function hideAllContents() {
        contents.forEach(content => content.style.display = 'none');
    }


    /**
     * Navigation Links Handling
     */
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const linkTarget = e.currentTarget.getAttribute("data-link");
    
            hideAllContents(); // Hide all contents initially
    
            if (linkTarget === 'projects') {
                mainPage.style.display = 'none';
                document.getElementById(linkTarget).style.display = 'block';
            } else if (linkTarget === 'home') {
                mainPage.style.display = 'block';
                document.getElementById('statement').style.display = 'block';
            } else {
                mainPage.style.display = 'block';
                document.getElementById(linkTarget).style.display = 'block';
            }
        });
    });
    

    /**
     * Set initial state on page load
     */
    hideAllContents();
    mainPage.style.display = 'block';
    document.getElementById('statement').style.display = 'block';


    /**
 * Contact Form Event listener
 */
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        name: contactForm.querySelector('input[name="name"]').value,
        email: contactForm.querySelector('input[name="email"]').value,
        subject: contactForm.querySelector('input[name="subject"]').value,
        message: contactForm.querySelector('textarea[name="message"]').value
    };

    fetch("https://formspree.io/f/xaygovyn", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (response.ok) {
            contactForm.reset();
            showThankyouMessage();
            setTimeout(hideThankyouMessage, 3000);
        } else {
            console.error("Failed to send email.");
            alert("There was an issue sending your message. Please try again later.");
        }
    })
   .catch(error => console.error("Error:", error));
});
});





