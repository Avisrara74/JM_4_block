let servicesText = document.querySelector("services__info-text");

let openHidenText = servicesText.querySelector("services__see-more");

let mobileMenuItems = mobileMenu.querySelector('.mobile-menu__items-wrap');
let changeLanguage = mobileMenu.querySelector(".mobile-menu__change-language");


let deleteActiveClass = function(listWrap, className) {
	let items = listWrap.children;
	if (className === "mobile-menu__items-wrap") {
		for (let i = 0; i < items.length; i++) {
			items[i].classList.remove(className);
		}
	} else if (className === "mobile-menu__change-language") {
		for (let i = 0; i < items.length; i++) {
			items[i].classList.remove(className);
		}
	}
	
}

mobileMenuItems.addEventListener('click', function(e) {
	deleteActiveClass(mobileMenuItems, "mobile-menu__items-wrap");
	target = e.target;
	if (target.tagName == "LI") {
		target.classList.add('mobile-menu__nav-items_active');
	} else if (target.tagName == "A"){
		target.parentNode.classList.add('mobile-menu__nav-items_active');
	}
});

changeLanguage.addEventListener('click', function(e) {
	deleteActiveClass(changeLanguage, "mobile-menu__change-language");
	target = e.target;
	target.classList.add('mobile-menu__nav-items_active');
});