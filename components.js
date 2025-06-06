// Function to load HTML components
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

// Function to initialize components
function initializeComponents() {
    // Load navbar
    loadComponent('navbar-container', 'navbar.html');
    
    // Load footer
    loadComponent('footer-container', 'footer.html');
}

// Initialize components when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeComponents); 