console.log("I'm connected!");

var interaction = false;

//let onclick turn off checkbox
document.addEventListener('click', function() {
    interaction = true;
    console.log('interaction= ' ,interaction);

})


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
    if (interaction == true) {
        checkbox.checked  = false;
        console.log('bozo');
    }
});
