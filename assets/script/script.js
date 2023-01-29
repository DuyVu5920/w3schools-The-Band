var slideIndex = 0;
var mobileMenuToggleBtn = document.getElementById("toggle-menu-bar");
var mobileMenu = document.getElementById("mobile-menu");
var modal = document.getElementById("booking-modal");
autoSlider();

function autoSlider() {
	var i;
	var slideList = document.getElementsByClassName("slides");
	for (i = 0; i < slideList.length; i++) {
		slideList[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slideList.length) {
		slideIndex = 1;
	}
	slideList[slideIndex - 1].style.display = "block";
	setTimeout(autoSlider, 3000);
}

function openMobileMenu() {
	mobileMenu.style.display = "block";
	mobileMenuToggleBtn.className = "bg-gray text-black";
}

function closeMobileMenu() {
	mobileMenu.style.display = "none";
	mobileMenuToggleBtn.className = "bg-black text-white";
}

function toggleMobileMenu() {
	if (mobileMenu.style.display == "block") {
		closeMobileMenu();
	} else {
		openMobileMenu();
	}
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
