const contents = document.querySelectorAll('.content')
const learning = document.getElementById('learning')

// Function to toggle content based on menu clicks
function toggleContent(contentId) {
    // Hide all content sections
    contents.forEach(function (content) {
        console.log(contents)
        
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

// Function to scroll to the project section and toggle project card visibility
function scrollToProjects() {
    // Scroll to the project section with a smooth animation
    //learning.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Add event listener to the "Click Here" button
document.getElementById('clickBtn').addEventListener('click', scrollToProjects);

// Function to toggle project card visibility
function toggleProjectCards() {
    // Toggle the visibility of project cards
    learning.classList.toggle('show-projects');
    learning.classList.toggle('hidden');
    learning.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Add event listener to the "Click Here" button for toggling project cards
document.getElementById('clickBtn').addEventListener('click', () => {
    toggleProjectCards(); // Toggle project card visibility after scrolling
});

// Initial content to display
toggleContent('statement');






