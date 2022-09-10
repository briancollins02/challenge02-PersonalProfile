// Define Checkbox
const checkbox = document.querySelector(".toggler");

// Tracks active element
const navClick = document.activeElement;

// Defines Nav buttons
const navButton = document.getElementById('nav-buttons');

// Uncheck Checkbox
checkbox.checked = false;

// listen for touch on navbuttons
navButton.addEventListener('touchend', function() {
    if (checkbox.checked = true) {
        checkbox.checked  = false;
        console.log('touchend');
    }
});
