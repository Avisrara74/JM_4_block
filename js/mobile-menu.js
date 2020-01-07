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


/*
let listItems = mobileMenu.querySelectorAll(".mobile-menu__nav-items");
for (let i = 0; i < listItems.length; i++) {
	let list = listItems[i];

	list.addEventListener("click", function() {
		if (listItems.className === "mobile-menu__nav-items_active") {
			listItems.classList.remove("mobile-menu__nav-items_active");
		}
		list.classList.add("mobile-menu__nav-items_active");
	});
}

*/



