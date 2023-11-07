const menuBar = document.getElementById("menu-bar");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const nav4 = document.getElementById("nav4");
const nav5 = document.getElementById("nav5");
let overlayActive = false;


function toggleMenuBar(){
	menuBar.classList.toggle("change");
	
	if (!overlayActive){
		overlay.classList.replace("overlay-slide-left", "overlay-slide-right")

		nav1.classList.remove("slide-out-1");
		nav1.classList.add("slide-in-1");

		nav2.classList.remove("slide-out-2");
		nav2.classList.add("slide-in-2");

		nav3.classList.remove("slide-out-3");
		nav3.classList.add("slide-in-3");

		nav4.classList.remove("slide-out-4");
		nav4.classList.add("slide-in-4");

		nav5.classList.remove("slide-out-5");
		nav5.classList.add("slide-in-5");
	} else{
		overlay.classList.replace("overlay-slide-right", "overlay-slide-left")

		nav1.classList.remove("slide-in-1");
		nav1.classList.add("slide-out-1");

		nav2.classList.remove("slide-in-2");
		nav2.classList.add("slide-out-2");

		nav3.classList.remove("slide-in-3");
		nav3.classList.add("slide-out-3");

		nav4.classList.remove("slide-in-4");
		nav4.classList.add("slide-out-4");

		nav5.classList.remove("slide-in-5");
		nav5.classList.add("slide-out-5");
	}

	overlayActive = !overlayActive;
}

nav1.addEventListener("click", toggleMenuBar);
nav2.addEventListener("click", toggleMenuBar);
nav3.addEventListener("click", toggleMenuBar);
nav4.addEventListener("click", toggleMenuBar);
nav5.addEventListener("click", toggleMenuBar);
menuBar.addEventListener("click", toggleMenuBar);