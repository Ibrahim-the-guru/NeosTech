// Ensure that all DOM content is loaded before any JavaScript is executed
document.addEventListener('DOMContentLoaded', function() {
    // For smooth scrolling when clicking on links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in effect for animations (just as an example)
    const animElements = document.querySelectorAll('.anim');

    function onScroll() {
        animElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                element.classList.add('fade-in');
            } else {
                element.classList.remove('fade-in');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Run the scroll event initially to trigger any elements already in view

    // Check if the CSS file or images are missing (useful for local development)
    const logo = document.querySelector('.logo');
    const featureImg = document.querySelector('.feature-img');

    function checkImageLoad(imgElement, filePath) {
        const img = new Image();
        img.onload = function() {
            imgElement.src = filePath;
        };
        img.onerror = function() {
            console.warn('Image not found: ' + filePath);
        };
        img.src = filePath;
    }

    // Validate images for local paths
    if (logo) checkImageLoad(logo, "c:/Users/hills/OneDrive/Desktop/NeosTech/neos.pngs");
    if (featureImg) checkImageLoad(featureImg, "c:/Users/hills/OneDrive/Desktop/NeosTech/pic.png");

    // Mobile-friendly responsiveness (if needed)
    if (window.innerWidth < 768) {
        // Add mobile-specific styles or functionality here if required
        console.log('Mobile View Detected');
    }

}, false);