let openButton = document.querySelector(".upper-menu__burger-menu");

let mobileMenu = document.querySelector(".mobile-menu");

let closeButton = mobileMenu.querySelector(".mobile-menu__button-burger");
console.log(closeButton);

openButton.addEventListener("click", function() {
	mobileMenu.classList.add("mobile-menu_visible");
});

closeButton.addEventListener("click", function() {
	mobileMenu.classList.add("mobile-menu_hidden");
	mobileMenu.classList.remove("mobile-menu_visible");
});