let modal_call = document.querySelector(".modal-call");

let open_call_modal = document.querySelector(".upper-menu__button-call");
open_call_modal.addEventListener("click", function() {
	modal_call.classList.add("modal-call_visible");
});

let close_call_modal = modal_call.querySelector(".modal-call__close-button");
close_call_modal.addEventListener("click", function() {
	modal_call.classList.add("modal-call_hidden");
	modal_call.classList.remove("modal-call_visible");
});