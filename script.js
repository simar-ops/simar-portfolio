// Select the menu toggle button and the navigation list
const menuToggle = document.querySelector('#mobile-menu');
const navList = document.querySelector('.nav-list');

// Function to toggle the menu
menuToggle.addEventListener('click', () => {
    // This adds/removes the 'active' class we defined in CSS
    navList.classList.toggle('active');
    
    // Optional: Animate the hamburger bars into an 'X'
    menuToggle.classList.toggle('is-active');
});

// Close the menu automatically when a link is clicked
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});
