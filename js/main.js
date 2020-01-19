let body = document.querySelector("body");
let blur_effect = body.querySelector(".blur-effect_hidden");

/* modal-feedback */

let modal_feedback = document.querySelector(".modal-feedback");

let open_feedback_modal = document.querySelector(".upper-menu__primary-button--button-chat");
open_feedback_modal.addEventListener("click", function() {
	modal_feedback.classList.add("modal-feedback_visible");

	blur_effect_on();
	close_mobile_menu_func();
	close_call_modal_func();
});

let close_feedback_modal = modal_feedback.querySelector(".modal-feedback__primary-button--close-button");
close_feedback_modal.addEventListener("click", function() {
	close_feedback_modal_func();
	blur_effect_off();
});

/* modal-call */

let modal_call = document.querySelector(".modal-call");

let open_call_modal = document.querySelector(".upper-menu__primary-button--button-call");
open_call_modal.addEventListener("click", function() {
	modal_call.classList.add("modal-call_visible");

	blur_effect_on();
	close_mobile_menu_func();
	close_feedback_modal_func();
});


let close_button_call_modal = modal_call.querySelector(".modal-call__primary-button--close-button");

close_button_call_modal.addEventListener("click", function() {
	blur_effect_off();
	close_call_modal_func();
});

/* mobile-menu */

let mobile_menu = document.querySelector(".mobile-menu");

let open_mobile_menu = document.querySelector(".upper-menu__primary-button--burger-menu");
open_mobile_menu.addEventListener("click", function() {
	mobile_menu.classList.add("mobile-menu_visible");

	blur_effect_on();
	close_call_modal_func();
	close_feedback_modal_func();
});

let close_mobile_menu = mobile_menu.querySelector(".mobile-menu__primary-button--button-burger");
close_mobile_menu.addEventListener("click", function() {

	blur_effect_off();
	close_mobile_menu_func();
});

let mobile_menu_items = mobile_menu.querySelector('.mobile-menu__list');
let change_language = mobile_menu.querySelector(".mobile-menu__change-language");

mobile_menu_items.addEventListener('click', function(e) {
	let className = deleteActiveClass(mobile_menu_items, "mobile-menu__item_active");
	deleteActiveClass(mobile_menu_items, "mobile-menu__item_active");
	target = e.target;
	if (target.tagName == "LI") {
		target.classList.add(className);
	} else if (target.tagName == "A"){
		target.parentNode.classList.add(className);
	}
});

let mobile_menu__modal_call = mobile_menu.querySelector(".mobile-menu__primary-button--contact-phone");

mobile_menu__modal_call.addEventListener("click", function () {
	modal_call.classList.add("modal-call_visible");

	blur_effect_on();
	close_mobile_menu_func();
	close_feedback_modal_func();
});

let mobile_menu__modal_feedback = mobile_menu.querySelector(".mobile-menu__primary-button--contact-chat");
mobile_menu__modal_feedback.addEventListener("click", function () {
	modal_feedback.classList.add("modal-feedback_visible");

	blur_effect_on();
	close_mobile_menu_func();
	close_call_modal_func();
});

change_language.addEventListener('click', function(e) {
	let className = deleteActiveClass(change_language, "mobile-menu__change-language");
	deleteActiveClass(change_language, "mobile-menu__change-language_active");
	target = e.target;
	target.classList.add(className);
});

/* see more buttons*/

services = body.querySelector(".services");
services__hidden_text_wrap = services.querySelector(".services__info-text-wrap");
services__hidden_items = services__hidden_text_wrap.querySelectorAll(".services__hidden-text");
services__see_more = services.querySelector(".see-more");

services__see_more.addEventListener("click", function () {
	if (services__hidden_items[services__hidden_items.length - 1].classList.contains("services__hidden-text")) {
		services__see_more_open();
	}
	else {
		services__see_more_close();
	}
});

repair_brands = body.querySelector(".repair-brands");
repair_items = body.querySelector(".repair-items");

repair_brands__items = repair_brands.querySelectorAll(".repair-brands__list-item--hidden");
repair_items__items = repair_items.querySelectorAll(".repair-items__list-item--hidden");

repair_brands__see_more = repair_brands.querySelector(".see-more");
repair_items__see_more = repair_items.querySelector(".see-more");

repair_brands__see_more.addEventListener("click", function () {
	if (repair_brands__items[repair_brands__items.length - 1].classList.contains("repair-brands__list-item--hidden")) {
		repair_brands__see_more_open();
	} else {
		repair_brands__see_more_close();
	}
});

repair_items__see_more.addEventListener("click", function () {
	if (repair_items__items[repair_items__items.length - 1].classList.contains("repair-items__list-item--hidden")) {
		repair_items__see_more_open();
	} else {
		repair_items__see_more_close();
	}
});


/* functions */
let repair_items__see_more_open = function () {
	repair_items__see_more.classList.add("see-more-arrow");
	repair_items__see_more.textContent = "Скрыть";
	for (let i = 0; i < repair_items__items.length; i++) {
		repair_items__items[i].classList.remove("repair-items__list-item--hidden");
	}
}

let repair_items__see_more_close = function () {
	repair_items__see_more.classList.remove("see-more-arrow");
	repair_items__see_more.textContent = "Читать далее";
	for (let i = 0; i < repair_items__items.length; i++) {
		repair_items__items[i].classList.add("repair-items__list-item--hidden");
	}
}

let repair_brands__see_more_open = function () {
	repair_brands__see_more.classList.add("see-more-arrow");
	repair_brands__see_more.textContent = "Скрыть";
	for (let i = 0; i < repair_brands__items.length; i++) {
		repair_brands__items[i].classList.remove("repair-brands__list-item--hidden");
	}
}

let repair_brands__see_more_close = function () {
	repair_brands__see_more.classList.remove("repair-brands__see-more-arrow");
	repair_brands__see_more.textContent = "Читать далее";
	for (let i = 0; i < repair_brands__items.length; i++) {
		repair_brands__items[i].classList.add("repair-brands__list-item--hidden");
	}
}

let services__see_more_open = function () {
	services__see_more.classList.add("services__see-more-arrow");
	services__see_more.textContent = "Скрыть";
	for (let i = 0; i < services__hidden_items.length; i++) {
		services__hidden_items[i].classList.remove("services__hidden-text");
	}
}

let services__see_more_close = function () {
	services__see_more.classList.remove("services__see-more-arrow");
	services__see_more.textContent = "Читать далее";
	for (let i = 0; i < services__hidden_items.length; i++) {
		services__hidden_items[i].classList.add("services__hidden-text");
	}
}

let blur_effect_on = function () {
	blur_effect.classList.add("blur-effect_visible");
	blur_effect.classList.remove("blur-effect_hidden");
	body.classList.add("body__scroll-hidden");
}

let blur_effect_off = function () {
	blur_effect.classList.remove("blur-effect_visible");
	blur_effect.classList.add("blur-effect_hidden");
	body.classList.remove("body__scroll-hidden");
}

let close_feedback_modal_func = function () {
	modal_feedback.classList.add("modal-feedback_hidden");
	modal_feedback.classList.remove("modal-feedback_visible");
}

let close_mobile_menu_func = function () {
	mobile_menu.classList.add("mobile-menu_hidden");
	mobile_menu.classList.remove("mobile-menu_visible");
}

let close_call_modal_func = function () {
	modal_call.classList.add("modal-call_hidden");
	modal_call.classList.remove("modal-call_visible");
}

let checkWindowSize = function () {
	let ww = screen.width;
	if (ww < 768) {
		swiper_inicialization();
	}
}

let deleteActiveClass = function(listWrap, className) {

	let deleteCounter = function (items) {
		for (let i = 0; i < items.length; i++) {
			items[i].classList.remove(className);
		}
	}

	let items = listWrap.children;
	if (items[0].parentNode.className === "mobile-menu__list") {
		deleteCounter(items);
	} else if (items[0].parentNode.className === "mobile-menu__change-language") {
		deleteCounter(items);
	} 
	return className;
}

let swiper_inicialization = function() {
	let repair_brands = new Swiper('.repair-brands__swiper-container', {
	  pagination: {
	    el: '.swiper-pagination',
	  },
	  width: 240,
	  height: 72,
	  spaceBetween: 16,
	});

	let repair_items = new Swiper('.repair-items__swiper-container', {
	  pagination: {
	    el: '.swiper-pagination',
	  },
	  width: 240,
	  spaceBetween: 16,
	});

	let our_prices = new Swiper('.our-prices__swiper-container', {
	  pagination: {
	    el: '.swiper-pagination',
	  },
	  width: 228,
	  spaceBetween: 16,
	});
}

checkWindowSize();

window.addEventListener('resize',function() {
	checkWindowSize();
});