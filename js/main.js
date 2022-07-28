"use strict";

/* ------------ testimonials slideshow--------------*/
let testimonialsSlideIndex = 1;
showTestimonials(testimonialsSlideIndex);

// Next/previous controls
function nextTestimonial(n) {
	showTestimonials((testimonialsSlideIndex += n));
}

// Thumbnail image controls
function currentTestimonial(n) {
	showTestimonials((testimonialsSlideIndex = n));
}

function showTestimonials(n) {
	let i;
	let slides = document.getElementsByClassName("testimonialsSlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		testimonialsSlideIndex = 1;
	}
	if (n < 1) {
		testimonialsSlideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[testimonialsSlideIndex - 1].style.display = "block";
	dots[testimonialsSlideIndex - 1].className += " active";
}

/* ------------ values slideshow --------------*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("value-header");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active-header", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active-header";
}

/*---------------------- navbar ----------------------------*/
function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNavX() {
	document.getElementById("myNav").style.width = "0%";
}

/* Close when someone clicks on the lnk inside the overlay */
function closeNav() {
	document.getElementById("myNav").style.width = "0%";
	window.scrollTo(0, 0);
}

/* ------------------------ contact form ----------------------------- */
const form = document.querySelector("form"),
	statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
	e.preventDefault();
	statusTxt.style.color = "#39D7FF";
	statusTxt.style.display = "block";
	statusTxt.innerText = "Sending your message...";
	form.classList.add("disabled");

	let xhr = new XMLHttpRequest();
	xhr.open("POST", "message.php", true);
	xhr.onload = () => {
		if (xhr.readyState == 4 && xhr.status == 200) {
			let response = xhr.response;
			if (
				response.indexOf("Email and message field is required!") != -1 ||
				response.indexOf("Enter a valid email address!") != -1 ||
				response.indexOf("Sorry, failed to send your message!") != -1
			) {
				statusTxt.style.color = "red";
			} else {
				form.reset();
				setTimeout(() => {
					statusTxt.style.display = "none";
				}, 3000);
			}
			statusTxt.innerText = response;
			form.classList.remove("disabled");
		}
	};
	let formData = new FormData(form);
	xhr.send(formData);
};

/* ---------------- load more --------------- */
let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 3;

loadMoreBtn.onclick = () => {
	let boxes = [...document.querySelectorAll(".container .box-container .box")];
	for (var i = currentItem; i < currentItem + 3; i++) {
		boxes[i].style.display = "inline-block";
	}
	currentItem += 3;

	if (currentItem >= boxes.length) {
		loadMoreBtn.style.display = "none";
	}
};
