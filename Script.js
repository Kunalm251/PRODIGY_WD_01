// Select the navbar element
const navbar = document.getElementById('navbar');

// Get the offset position of the navbar
const navbarOffset = navbar.offsetTop;

// Function to add class when scrolled
function navbarScroll() {
    if (window.scrollY >= navbarOffset) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
}

// Event listener for scroll
window.addEventListener('scroll', navbarScroll);
