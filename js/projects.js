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