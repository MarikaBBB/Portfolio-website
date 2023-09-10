// Function to toggle content based on menu clicks
function toggleContent(contentId) {
    // Hide all content sections
    document.querySelectorAll('.content').forEach(function(content) {
        content.style.display = 'none';
    });

    // Show the selected content
    document.getElementById(contentId).style.display = 'block';
}

// Add event listeners for menu clicks
document.getElementById('about-link').addEventListener('click', function() {
    toggleContent('content-about');
});

document.getElementById('skills-link').addEventListener('click', function() {
    toggleContent('content-skills');
});

document.getElementById('projects-link').addEventListener('click', function() {
    toggleContent('content-projects');
});

document.getElementById('contact-link').addEventListener('click', function() {
    toggleContent('content-contact');
});

// Initial content to display (About Me)
toggleContent('content-about');