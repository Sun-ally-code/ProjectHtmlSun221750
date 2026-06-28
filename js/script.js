// Coffee Heaven - Interactive Features

// Wait for the page to fully load before running any code
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Coffee Heaven website loaded successfully');
    console.log('☕ Welcome to Coffee Heaven!');
    
    // Dark Mode Toggle Functionality
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;
    
    if (toggleButton) {
        // Check if user has a saved dark mode preference
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
            toggleButton.textContent = '☀️ Light';
        }
        
        // When user clicks the dark mode button, toggle dark mode on/off
        toggleButton.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            // Save the users preference in localStorage so it persists
            if (body.classList.contains('dark-mode')) {
                toggleButton.textContent = '☀️ Light';
                localStorage.setItem('darkMode', 'enabled');
            } else {
                toggleButton.textContent = '🌙 Dark';
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }
    
    // back to top button functionality
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        // Show the button when user scrolls down more than 300px
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        
        // When user clicks the button, smoothly scroll back to top
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
});