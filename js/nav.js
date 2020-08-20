"use strict";

/* Set the width of the side navigation to 250px */
function openNav() { 
	const nav = document.getElementById("nav-menu"); // get hidden nav
  const background = document.getElementsByTagName('main')[0]; // get main part of document

  if (nav.style.height === ""){ // if nav is hidden
  	nav.style.height = "325px"; // open drawer
    background.style.opacity = ".3"; // dim the background
  } else { // trigger if function is called and nav is already open 
  	nav.style.height = ""; // make drop down nav go away
    background.style.opacity = ""; // make opaque background go away
  } 
}

/*
let lastPosition = 100; // initialize a threshold for hiding nav
window.onscroll = () => {
  
  if (screen.width < 800) { // run only on mobile device
    let currentPosition = window.pageYOffset; 
    const nav = document.getElementById('nav-menu'); // get entire nav component

    if (currentPosition > lastPosition) { // detect if user has scrolled down
      nav.style.display = "none";         // if so, hide entire nav
    } else if (currentPosition < lastPosition) { // but if user has scrolled up
      nav.style.display = "";                    // show nav again
    }
    lastPosition = currentPosition; // reset value for 'lastPosition';
  }
}
*/

document.addEventListener("click", (click) => {
    const nav = document.getElementById("nav-menu");
    const background = document.getElementsByTagName('main')[0];

    const menuButton = document.getElementById("hamburger")
    let targetElement = click.target; // clicked element

    //console.log('click'); // confirms click event detected
    //console.log(`nav style height is ${nav.style.height}`); // log height of nav

    if (targetElement != nav && targetElement != menuButton) {
      nav.style.height = "";
      background.style.opacity = "";
    }

});