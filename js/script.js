// Coffee Heaven 

// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Coffee Heaven website loaded successfully');
    console.log('☕ Welcome to Coffee Heaven!');
    
    // dark mode feature
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;
    
    if (toggleButton) {
        // Check if user has a saved preference
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
            toggleButton.textContent = '☀️ Light';
        }
        
        toggleButton.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                toggleButton.textContent = '☀️ Light';
                localStorage.setItem('darkMode', 'enabled');
            } else {
                toggleButton.textContent = '🌙 Dark';
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }
    
    // back to top button 
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
});