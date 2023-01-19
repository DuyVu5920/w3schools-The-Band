var slideIndex = 0;
autoSlider();
var modal = document.getElementById("booking-modal");

function autoSlider() {
	var i;
	var slides = document.getElementsByClassName("slides");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex - 1].style.display = "block";
	setTimeout(autoSlider, 3000);
}

function openModal() {
	modal.style.display = "block";
}

function closeModal() {
	modal.style.display = "none";
}

window.onclick = function (event) {
	if (event.target == modal) {
		closeModal();
	}
};
