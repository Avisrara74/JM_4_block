let mobileMenu = document.querySelector(".mobile-menu");

let openButton = document.querySelector(".upper-menu__burger-menu");
openButton.addEventListener("click", function() {
	mobileMenu.classList.add("mobile-menu_visible");
});

let closeButton = mobileMenu.querySelector(".mobile-menu__button-burger");
closeButton.addEventListener("click", function() {
	mobileMenu.classList.add("mobile-menu_hidden");
	mobileMenu.classList.remove("mobile-menu_visible");
});

let mobileMenuItems = mobileMenu.querySelector('.mobile-menu__items-wrap');
let changeLanguage = mobileMenu.querySelector(".mobile-menu__change-language");

mobileMenuItems.addEventListener('click', function(e) {
	let className = deleteActiveClass(mobileMenuItems, "mobile-menu__nav-items_active");
	deleteActiveClass(mobileMenuItems, "mobile-menu__nav-items_active");
	target = e.target;
	if (target.tagName == "LI") {
		target.classList.add(className);
	} else if (target.tagName == "A"){
		target.parentNode.classList.add(className);
	}
});

changeLanguage.addEventListener('click', function(e) {
	let className = deleteActiveClass(changeLanguage, "mobile-menu__change-language");
	deleteActiveClass(changeLanguage, "mobile-menu__change-language_active");
	target = e.target;
	target.classList.add(className);
});









