/**
 * Projects Section Generation
 */
const projectData = [
    {
        image: "./images/DiscordBot.png",
        alt: "Snapshot of discord bot",
        title: "MPZ Discord Bot",
        codeLink: "https://github.com/FAC29A/MPZ-bot"
    },
    {
        image: "./images/game.jpeg",
        alt: "Snapshot of Puzzle game interface",
        title: "Puzzle game",
        codeLink: "https://github.com/MarikaBBB/game",
        liveLink: "https://marikabbb.github.io/game/index.html"
    },
    {
        image: "./images/weather.png",
        alt: "Interface of the Earth & Mars project",
        title: "Earth Meets Mars",
        codeLink: "https://github.com/FAC29A/Marika_Lucy_app",
        liveLink: "https://fac29a.github.io/Marika_Lucy_app/"
    },
    {
        image: "./images/ecoecho.png",
        alt: "Image showcasing the interface of a fake agency website",
        title: "Ecoecho website",
        codeLink: "https://github.com/FAC29A/ecoecho",
        liveLink: "https://fac29a.github.io/ecoecho/"
    },
    {
        image: "./images/todue.png",
        alt: "Design of the ToDue project",
        title: "ToDue",
        codeLink: "https://github.com/FAC29A/marika-daniel-project",
        liveLink: "https://fac29a.github.io/marika-daniel-project/"
    },
    {
        image: "./images/oneTech.png",
        alt: "Screenshot of the Intro to coding course project named oneTech",
        title: "Intro to coding",
        codeLink: "https://github.com/MarikaBBB/lift-portfolio",
        liveLink: "https://marikabbb.github.io/lift-portfolio/"
    },
    {
        image: "./images/founders and coders img.png",
        alt: "Logo of Founders & Coders project",
        title: "FAC application",
        codeLink: "https://github.com/MarikaBBB/website",
        liveLink: "https://marikabbb.github.io"
    },
    {
        image: "./images/MovieDatabase.jpeg",
        alt: "Snapshot of the Movie Database project interface",
        title: "Movie Database",
        codeLink: "https://github.com/MarikaBBB/movie-database",
        liveLink: "https://marikabbb.github.io/MovieData/index.html"
    },
    {
        image: "./images/color generator.png",
        alt: "Screenshot of Colour palette generator tool",
        title: "ColourPicker",
        codeLink: "https://github.com/MarikaBBB/colour-palette-picker",
        liveLink: "https://marikabbb.github.io/colour-palette-picker/"
    },
    {
        image: "./images/python.jpg",
        alt: "Python logo representing the Intro to Python project with CFG",
        title: "Intro to Python",
        codeLink: "https://github.com/MarikaBBB/cfg-python-recipes-rearch-project"
    },    
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