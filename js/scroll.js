// Get the iframe element
var iframe = document.getElementById('typef_orm');
// Add an event listener to the main page's scroll event
window.addEventListener('scroll', function() {
  // Disable the scrolling of the iframe
  iframe.style.pointerEvents = 'none';
});

// Add an event listener to the iframe's load event
iframe.addEventListener('load', function() {
  // Enable the scrolling of the iframe
  iframe.style.pointerEvents = 'auto';
});