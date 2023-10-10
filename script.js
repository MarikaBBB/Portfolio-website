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
            
            if (linkTarget === 'projects') {
                mainPage.style.display = 'none';
                hideAllContents();
                document.getElementById(linkTarget).style.display = 'block';
            } else {
                mainPage.style.display = 'block';
                document.getElementById('projects').style.display = 'none';
                hideAllContents();
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


/**
 * Skills Section Generation
 */
document.addEventListener("DOMContentLoaded", function() {
    const skillsData = [
        { src: './images/html-5.png', alt: 'HTML 5 logo', name: 'HTML' },
        { src: './images/css-3.png', alt: 'CSS 3 logo', name: 'CSS' },
        { src: './images/js.png', alt: 'JavaScript logo', name:'JS'},
        { src: './images/visual-studio.png', alt: 'Visual Studio logo', name:'VisualStudio'},
        { src: './images/git.png', alt: 'Git logo', name:'GIT'},
        { src: './images/code.png', alt: 'GitHub logo', name:'GITHUB'},
        { src: './images/responsive.png', alt: 'Mobile responsive design icon', name:'MOBILE'},
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
        url: "https://www.linkedin.com/in/marika-bert/",
        imgSrc: "./images/Iconlinkedin.png",
        altText: "Link to Marika's LinkedIn profile"
    },
    {
        url: "https://www.instagram.com/marikabert/",
        imgSrc: "./images/Iconinstagram.png",
        altText: "Link to Marika's Instagram profile"
    },
    {
        url: "https://github.com/yourprofile",
        imgSrc: "./images/Icongithub2.png",
        altText: "Link to Marika's GitHub repository"
    },
    {
        url: "https://www.codewars.com/users/MarrrB",
        imgSrc: "./images/IconWars.png",
        altText: "Link to Marika's Codewars profile"
    },
    {
        url: "https://wanderthroughculture.wordpress.com",
        imgSrc: "./images/Iconwordpress.png",
        altText: "Link to Marika's WordPress Blog"
    },
    {
        url: "https://www.goodreads.com/user/show/30598533-marika",
        imgSrc: "./images/Icongoodreads.png",
        altText: "Link to Marika's Goodreads profile"
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
        alt: "Logo of Founders & Coders project",
        title: "Founders & Coders",
        codeLink: "https://github.com/MarikaBBB/website",
        liveLink: "https://marikabbb.github.io"
    },
    {
        image: "./images/game.jpeg",
        alt: "Snapshot of Puzzle game interface",
        title: "Puzzle game",
        codeLink: "https://github.com/MarikaBBB/game",
        liveLink: "https://marikabbb.github.io/game/index.html"
    },
    {
        image: "./images/codewars.png",
        alt: "Logo of Codewars platform",
        title: "Codewars",
        liveLink: "https://www.codewars.com/users/MarrrB"
    },
    {
        image: "./images/color generator.png",
        alt: "Screenshot of Colour palette generator tool",
        title: "ColourPicker",
        codeLink: "https://github.com/MarikaBBB/colour-palette-picker",
        liveLink: "https://marikabbb.github.io/colour-palette-picker/"
    },
    {
        image: "./images/oneTech.png",
        alt: "Screenshot of the Intro to coding course project named oneTech",
        title: "Intro to coding",
        codeLink: "https://github.com/MarikaBBB/lift-portfolio",
        liveLink: "https://marikabbb.github.io/lift-portfolio/"
    },
    {
        image: "./images/MovieDatabase.jpeg",
        alt: "Snapshot of the Movie Database project interface",
        title: "Movie Database",
        codeLink: "https://github.com/MarikaBBB/movie-database",
        liveLink: "https://marikabbb.github.io/MovieData/index.html"
    },
    {
        image: "./images/python.jpg",
        alt: "Python logo representing the Intro to Python project with CFG",
        title: "Intro to Python",
        codeLink: "https://github.com/MarikaBBB/cfg-python-recipes-rearch-project"
    },
    {
        image: "./images/to-do-list.png",
        alt: "Image showcasing the interface of the To-do List project",
        title: "To-do List",
        codeLink: "https://github.com/MarikaBBB/lift-portfolio/tree/main/to-do-list",
        liveLink: "https://marikabbb.github.io/lift-portfolio/to-do-list/index.html"
    },
    {
        image: "./images/pokemon.png",
        alt: "Design of the Pokemon encyclopedia project",
        title: "Pokédex",
        codeLink: "https://github.com/MarikaBBB/lift-portfolio/tree/main/pokemon",
        liveLink: "https://marikabbb.github.io/lift-portfolio/pokemon/index.html"
    },
    {
        image: "./images/weather.png",
        alt: "Interface of the Current weather project showing weather details",
        title: "Current weather",
        codeLink: "https://github.com/MarikaBBB/lift-portfolio/tree/main/weather",
        liveLink: "https://marikabbb.github.io/lift-portfolio/weather/index.html"
    }
];


// Function to generate project elements and append them to the section
const container = document.querySelectorAll(".container").item(document.querySelectorAll(".container").length - 1);

for (const project of projectData) {
    const projectContent = document.createElement("div");
    projectContent.className = "projectContent";

    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.alt;
    image.className = "picture";
    projectContent.appendChild(image);

    const information = document.createElement("div");
    information.className = "information";

    const title = document.createElement("h3");
    title.textContent = project.title;
    information.appendChild(title);

    const onTheWeb = document.createElement("div");
    onTheWeb.className = "onTheWeb";

    if (project.codeLink) {
        const codeLink = document.createElement("a");
        codeLink.href = project.codeLink;
        codeLink.target = "_blank";
        codeLink.textContent = "Code";
        onTheWeb.appendChild(codeLink);
    }

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
}

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
