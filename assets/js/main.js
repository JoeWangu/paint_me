// ---------------------------------------------------
// --------------------- NAVBAR ----------------------
// ---------------------------------------------------
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    const navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// ---------------------------------------------------
// --------------------- BACK TO TOP ----------------------
// ---------------------------------------------------
// Get references to the button and the document
const backToTopButton = document.querySelector('.back-to-top');

// Function to handle the scroll event
function handleScroll() {
    if (window.scrollY > 300) {
        backToTopButton.style.opacity = 1;
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = 0;
        backToTopButton.style.visibility = 'hidden';
    }
}

// Function to scroll to the top smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Add click event listener
backToTopButton.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToTop();
});
