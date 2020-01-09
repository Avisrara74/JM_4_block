let deleteActiveClass = function(listWrap, className) {

	let deleteCounter = function (items) {
		for (let i = 0; i < items.length; i++) {
			items[i].classList.remove(className);
		}
	}

	let items = listWrap.children;
	if (items[0].parentNode.className === "mobile-menu__items-wrap") {
		deleteCounter(items);
	} else if (items[0].parentNode.className === "mobile-menu__change-language") {
		deleteCounter(items);
	} 
	return className;
}

