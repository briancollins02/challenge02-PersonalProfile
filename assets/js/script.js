console.log("I'm connected!");

// Enables touchstart for all elements, including ones not visible on load
document.addEventListener("touchstart", function() {}, false); 

// Define Checkbox
const checkbox = document.querySelector(".toggler");

// Tracks active element
 const navClick = document.activeElement;

// Console log active element when clicked
 document.addEventListener('focusin', function() {
    console.log('focused: ', document.activeElement)
 }, true);

// If menu open and nav is clicked, close menu
 document.addEventListener('focusin', function() {
    if (navClick.activeElement = document.getElementsByClassName('nav-buttons')) {
        checkbox.checked  = false;
    }
});