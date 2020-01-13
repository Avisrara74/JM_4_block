let body = document.querySelector("body");
let blur_effect = body.querySelector(".blur-effect_hidden");

let deleteActiveClass = function(listWrap, className) {

	let deleteCounter = function (items) {
		for (let i = 0; i < items.length; i++) {
			items[i].classList.remove(className);
		}
	}

	let items = listWrap.children;
	if (items[0].parentNode.className === "mobile-menu__list-wrap") {
		deleteCounter(items);
	} else if (items[0].parentNode.className === "mobile-menu__change-language") {
		deleteCounter(items);
	} 
	return className;
}

/* modal-feedback */

let modal_feedback = document.querySelector(".modal-feedback");

let open_feedback_modal = document.querySelector(".upper-menu__button-chat");
open_feedback_modal.addEventListener("click", function() {
	modal_feedback.classList.add("modal-feedback_visible");

	blur_effect_on();
	close_mobile_menu_func();
	close_call_modal_func();
});

let close_feedback_modal = modal_feedback.querySelector(".modal-feedback__close-button");
close_feedback_modal.addEventListener("click", function() {
	close_feedback_modal_func();
	blur_effect_off();
});

/* modal-call */

let modal_call = document.querySelector(".modal-call");

let open_call_modal = document.querySelector(".upper-menu__button-call");
open_call_modal.addEventListener("click", function() {
	modal_call.classList.add("modal-call_visible");

	blur_effect_on();
	close_mobile_menu_func();
	close_feedback_modal_func();
});


let close_button_call_modal = modal_call.querySelector(".modal-call__close-button");

close_button_call_modal.addEventListener("click", function() {
	blur_effect_off();
	close_call_modal_func();
});




/* mobile-menu */

let mobile_menu = document.querySelector(".mobile-menu");

let open_mobile_menu = document.querySelector(".upper-menu__burger-menu");
open_mobile_menu.addEventListener("click", function() {
	mobile_menu.classList.add("mobile-menu_visible");
	body.classList.add("mobile-menu__scroll-hidden");


	blur_effect_on();
	close_call_modal_func();
	close_feedback_modal_func();
});

let close_mobile_menu = mobile_menu.querySelector(".mobile-menu__button-burger");
close_mobile_menu.addEventListener("click", function() {
	blur_effect_off();
	close_mobile_menu_func();
	body.classList.remove("mobile-menu__scroll-hidden");
});

let mobile_menu_items = mobile_menu.querySelector('.mobile-menu__list-wrap');
let change_language = mobile_menu.querySelector(".mobile-menu__change-language");

mobile_menu_items.addEventListener('click', function(e) {
	let className = deleteActiveClass(mobile_menu_items, "mobile-menu__list_active");
	deleteActiveClass(mobile_menu_items, "mobile-menu__list_active");
	target = e.target;
	if (target.tagName == "LI") {
		target.classList.add(className);
	} else if (target.tagName == "A"){
		target.parentNode.classList.add(className);
	}
});

let mobile_menu__modal_call = mobile_menu.querySelector(".mobile-menu__contact-phone");

mobile_menu__modal_call.addEventListener("click", function () {
	modal_call.classList.add("modal-call_visible");

	blur_effect_on();
	close_mobile_menu_func();
	close_feedback_modal_func();
});

let mobile_menu__modal_feedback = mobile_menu.querySelector(".mobile-menu__contact-chat");
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

let blur_effect_on = function () {
	blur_effect.classList.add("blur-effect_visible");
	blur_effect.classList.remove("blur-effect_hidden");
}

let blur_effect_off = function () {
	blur_effect.classList.remove("blur-effect_visible");
	blur_effect.classList.add("blur-effect_hidden");
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
	let w = screen.width;
	if (w >= 1440) {
		body.classList.add("pc_body");
		document.querySelector("main").classList.add("pc_main");
	} else if (w < 1440) {
		body.classList.remove("pc_body");
		document.querySelector("main").classList.remove("pc_main");
	}
}

checkWindowSize();

window.addEventListener('resize',function() {
	checkWindowSize();
});

