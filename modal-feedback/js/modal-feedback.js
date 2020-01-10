let modal_feedback = document.querySelector(".modal-feedback");

let open_feedback_modal = document.querySelector(".upper-menu__button-chat");
open_feedback_modal.addEventListener("click", function() {
	modal_feedback.classList.add("modal-feedback_visible");
});

let close_feedback_modal = modal_feedback.querySelector(".modal-feedback__close-button");
close_feedback_modal.addEventListener("click", function() {
	modal_feedback.classList.add("modal-feedback_hidden");
	modal_feedback.classList.remove("modal-feedback_visible");
});