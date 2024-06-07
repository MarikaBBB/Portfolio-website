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
        { src: './images/nodejs.png', alt: 'Nodejs icon', name:'Node.Js'},
        { src: './images/python-logo-only.png', alt: 'SQL logo', name: 'SQL' },
        { src: './images/icons8-mysql-logo-48.png', alt: 'Python logo', name: 'Python' }
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
