// Waiting for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Coffee Heaven website loaded successfully');
    console.log('☕ Welcome to Coffee Heaven!');
    
    // dark mode
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Checking if the user has a saved preference
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
    
});