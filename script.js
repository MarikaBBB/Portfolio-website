/**
 * Grab DOM elements for navigation and content
 */
const navLinks = document.querySelectorAll(".navbar");
const mainPage = document.querySelector('.mainPage');
const contents = document.querySelectorAll('.content');
const contactForm = document.getElementById("contactForm");
const thankyouMessage = document.getElementById("thankyouMessage");

/**
 * Functions to manage content visibility
 */
function hideAllContents() {
    contents.forEach(content => content.style.display = 'none');
}

function showThankyouMessage() {
    thankyouMessage.classList.add("visible");
}

function hideThankyouMessage() {
    thankyouMessage.classList.remove("visible");
}

/**
 * Navigation Links Handling
 */
document.addEventListener("DOMContentLoaded", function() {
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const linkTarget = e.currentTarget.getAttribute("data-link");
            mainPage.style.display = linkTarget === 'projects' ? 'none' : 'block';
            hideAllContents();
            document.getElementById(linkTarget).style.removeProperty('display');
        });
    });

    // Set initial state on page load
    hideAllContents();
    mainPage.style.display = 'block';
    document.getElementById('statement').style.display = 'block';
});

/**
 * Contact Form Handling
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

/**
 * Skills Section Generation
 */
document.addEventListener("DOMContentLoaded", function() {
    const skillsData = [
        { src: './images/html-5.png', alt: 'Skills Logo', name: 'HTML' },
        { src: './images/css-3.png', alt: 'Skills Logo', name: 'CSS' },
        { src: './images/js.png', alt: 'Skills Logo', name:'JS'},
        { src: './images/visual-studio.png', alt: 'Skills Logo', name:'VisualStudio'},
        { src: './images/git.png', alt: 'Skills Logo', name:'GIT'},
        { src: './images/code.png', alt: 'Skills Logo', name:'CODE'},
        { src: './images/responsive.png', alt: 'Skills Logo', name:'MOBILE'},
    ];

    // Get the UL element from the DOM to append skills
    const skillsList = document.getElementById('skillsList');

    // Iterate over each skill in the data array
    for (const skill of skillsData) {
        // Create a new list item for the skill
        const li = document.createElement('li');
        
        // Create an image element for the skill's logo
        const img = document.createElement('img');
        img.src = skill.src;           // Set the image source from the data
        img.alt = skill.alt;           // Set the alt text from the data
        img.classList.add('logo');     // Add the 'logo' class to the image

        // Create a paragraph element for the skill's name
        const p = document.createElement('p');
        p.textContent = skill.name;    // Set the text content from the data

        // Append the image and paragraph to the list item
        li.appendChild(img);
        li.appendChild(p);

        // Append the filled-out list item to UL in the DOM
        skillsList.appendChild(li);
    }
});

/**
 * Social Media Links Handling
 */

// Array of social media data
const socialMediaLinks = [
    {
        url: "https://www.linkedin.com/in/marikabertelli/",
        imgSrc: "./images/Iconlinkedin.png",
        altText: "LinkedIn"
    },
    {
        url: "https://www.instagram.com/marikabert/",
        imgSrc: "./images/Iconinstagram.png",
        altText: "Instagram"
    },
    {
        url: "https://github.com/yourprofile",
        imgSrc: "./images/Icongithub2.png",
        altText: "GitHub"
    },
    {
        url: "https://www.codewars.com/users/MarrrB",
        imgSrc: "./images/IconWars.png",
        altText: "Codewars"
    },
    {
        url: "https://wanderthroughculture.wordpress.com",
        imgSrc: "./images/Iconwordpress.png",
        altText: "WordPress Blog"
    },
    {
        url: "https://www.goodreads.com/user/show/30598533-marika",
        imgSrc: "./images/Icongoodreads.png",
        altText: "Goodreads"
    }
];

// Get the ul element
const socialMediaList = document.getElementById("socialMedia");

// Loop through the socialMediaLinks array to create the list items
for (const link of socialMediaLinks) {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    const image = document.createElement("img");

    anchor.href = link.url;
    anchor.target = "_blank";
    image.src = link.imgSrc;
    image.alt = link.altText;
    image.className = "icon";

    anchor.appendChild(image);
    listItem.appendChild(anchor);
    socialMediaList.appendChild(listItem);
}

/**
 * Projects Section Generation
 */
const projectData = [
    {
        image: "./images/founders and coders img.png",
        alt: "Founders",
        title: "Founders & Coders",
        codeLink: "https://github.com/MarikaBBB/website",
        liveLink: "https://marikabbb.github.io"
    },
    {
        image: "./images/game.jpeg",
        alt: "puzzle",
        title: "Puzzle game",
        codeLink: "https://github.com/MarikaBBB/game",
        liveLink: "https://marikabbb.github.io/game/index.html"
    },
    {
        image: "./images/codewars.png",
        alt: "codewars",
        title: "Codewars",
        liveLink: "https://www.codewars.com/users/MarrrB"
    },
    {
        image: "./images/color generator.png",
        alt: "ColourPicker",
        title: "Colour palette generator",
        codeLink: "https://github.com/MarikaBBB/colour-palette-picker",
        liveLink: "https://marikabbb.github.io/colour-palette-picker/"
    },
    {
        image: "./images/oneTech.png",
        alt: "oneTech",
        title: "Intro to coding course",
        codeLink: "https://github.com/MarikaBBB/lift-portfolio",
        liveLink: "https://marikabbb.github.io/lift-portfolio/"
    },
    {
        image: "./images/MovieDatabase.jpeg",
        alt: "MovieDatabase",
        title: "Movie Database",
        codeLink: "https://github.com/MarikaBBB/movie-database",
        liveLink: "https://marikabbb.github.io/MovieData/index.html"
    },
    {
        image: "./images/python.jpg",
        alt: "Phyton",
        title: "Introduction to Python (CFG)",
        codeLink: "https://github.com/MarikaBBB/cfg-python-recipes-rearch-project"
    },
    {
        image: "./images/to-do-list.png",
        alt: "to-do-list",
        title: "To-do List",
        codeLink: "https://github.com/MarikaBBB/lift-portfolio/tree/main/to-do-list",
        liveLink: "https://marikabbb.github.io/lift-portfolio/to-do-list/index.html"
    },
    {
        image: "./images/pokemon.png",
        alt: "Pokemon",
        title: "Pokemon encyclopedia",
        codeLink: "https://github.com/MarikaBBB/lift-portfolio/tree/main/pokemon",
        liveLink: "https://marikabbb.github.io/lift-portfolio/pokemon/index.html"
    },
    {
        image: "./images/weather.png",
        alt: "weather",
        title: "Current weather",
        codeLink: "https://github.com/MarikaBBB/lift-portfolio/tree/main/weather",
        liveLink: "https://marikabbb.github.io/lift-portfolio/weather/index.html"
    }
];


// Function to generate project elements and append them to the section
const projectsSection = document.querySelector("#projects");

for (const project of projectData) {
    // Create container div
    const container = document.createElement("div");
    container.className = "container";

    // Create projectContent div
    const projectContent = document.createElement("div");
    projectContent.className = "projectContent";

    // Create and append image
    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.alt;
    image.className = "picture";
    projectContent.appendChild(image);

    // Create and append information div
    const information = document.createElement("div");
    information.className = "information";

    // Add project title
    const title = document.createElement("h3");
    title.textContent = project.title;
    information.appendChild(title);

    // Add links div
    const onTheWeb = document.createElement("div");
    onTheWeb.className = "onTheWeb";

    // Add code link if it exists
    if (project.codeLink) {
        const codeLink = document.createElement("a");
        codeLink.href = project.codeLink;
        codeLink.target = "_blank";
        codeLink.textContent = "Code";
        onTheWeb.appendChild(codeLink);
    }

    // Add live link if it exists
    if (project.liveLink) {
        const liveLink = document.createElement("a");
        liveLink.href = project.liveLink;
        liveLink.target = "_blank";
        liveLink.textContent = "Live";
        onTheWeb.appendChild(liveLink);
    }

    information.appendChild(onTheWeb);
    projectContent.appendChild(information);
    container.appendChild(projectContent);
    projectsSection.appendChild(container);
}
