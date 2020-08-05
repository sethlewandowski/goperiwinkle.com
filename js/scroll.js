
let intElemScrollTop = window.innerHeight;
const myNav = document.getElementById('main-menu');
window.onscroll = function() {
	"use strict";
	console.log(`intElmScroll top is ${intElemScrollTop}`);
	console.log(`current scrollTop is ${document.documentElement.scrollTop}`);
	if (document.documentElement.scrollTop >= intElemScrollTop - 80){
		myNav.classList.add("main-menu-colored");
		myNav.classList.remove("main-menu-transparent");
	}
	else {
		myNav.classList.add("main-menu-transparent");
		myNav.classList.remove("main-menu-colored");
	}
}