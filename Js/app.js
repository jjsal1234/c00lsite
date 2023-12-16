const paths = {
    home: '/c00lsite',
    about: '/about',
    games: '/games',
    contact: '/contact',
};

// Add event listeners to navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const path = this.getAttribute('href');
            navigateTo(path);
        });
    });
});

// Function to navigate to the specified path
function navigateTo(path) {
    // Update the location hash to trigger navigation
    window.location.hash = path;
    // You can add more logic here, such as updating content based on the path
}
