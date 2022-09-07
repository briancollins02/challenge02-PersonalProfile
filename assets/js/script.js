console.log("I'm connected!");


const checkbox = document.querySelector(".toggler");




function openMenu() {
    if(checkbox.checked) {
        console.log("the checkbox is checked!");
    }
    else {
        console.log("the checkbox is NOT checked!")
    }
}
 openMenu(); 


 const navClick = document.activeElement;

 console.log(navClick.activeElement);


 document.addEventListener('focusin', function() {
    console.log('focused: ', document.activeElement)
 }, true);

 document.addEventListener('focusin', function() {
    if (navClick.activeElement = document.getElementsByClassName('nav-buttons')) {
        checkbox.checked  = false;
        console.log('switcheroo')
    }
});
