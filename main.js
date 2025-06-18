// Simple JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle would go here
    console.log('Website loaded');
    
    // Example: Add click event to review cards
    const reviewCards = document.querySelectorAll('.review-card');
    
    reviewCards.forEach(card => {
        card.addEventListener('click', function() {
            // In a real implementation, this would open a modal or navigate to a detailed review page
            console.log('Review card clicked');
        });
    });
    
    // You could add more interactive features like:
    // - Embedded YouTube video players
    // - Review rating system
    // - Comparison tools
});
// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.id = 'darkModeToggle';
darkModeToggle.innerHTML = '🌓';
document.body.prepend(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check for saved preference
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}
// Add at start of file
document.body.classList.add('loading');

window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.remove('loading');
  }, 1000);
});
