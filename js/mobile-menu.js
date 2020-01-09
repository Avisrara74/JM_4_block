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


let deleteActiveClass = function(listWrap) {
	let items = listWrap.children;
	if (items[0].parentNode.className === "mobile-menu__items-wrap") {
		for (let i = 0; i < items.length; i++) {
			items[i].classList.remove('mobile-menu__nav-items_active');
		}
	} else if (items[0].parentNode.className === "mobile-menu__change-language") {
		for (let i = 0; i < items.length; i++) {
			items[i].classList.remove('mobile-menu__change-language_active');
		}
	}
}

mobileMenuItems.addEventListener('click', function(e) {
	deleteActiveClass(mobileMenuItems);
	target = e.target;
	if (target.tagName == "LI") {
		target.classList.add('mobile-menu__nav-items_active');
	} else if (target.tagName == "A"){
		target.parentNode.classList.add('mobile-menu__nav-items_active');
	}
});

changeLanguage.addEventListener('click', function(e) {
	deleteActiveClass(changeLanguage);
	target = e.target;
	target.classList.add('mobile-menu__nav-items_active');
});









