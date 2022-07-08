"use strict";

/* ------------ testimonials --------------*/
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
	let dots = document.getElementsByClassName("dot");
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
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

/*-------- navbar ---------*/

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
	window.scroll({
		top: 0,
		left: 0,
	});
}

/*--------------------------------------------*/
function openNav1() {
	document.getElementById("myNav1").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNavX1() {
	document.getElementById("myNav1").style.width = "0%";
	document.getElementById("myNav").style.width = "0%";
}

function closeNavArrow1() {
	document.getElementById("myNav1").style.width = "0%";
}

/* Close when someone clicks on the lnk inside the overlay */
function closeNav1() {
	document.getElementById("myNav1").style.width = "0%";
	document.getElementById("myNav").style.width = "0%";
	window.scroll({
		top: 0,
		left: 0,
	});
}

/*--------------------------------------------*/
function openNav2() {
	document.getElementById("myNav2").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNavX2() {
	document.getElementById("myNav2").style.width = "0%";
	document.getElementById("myNav").style.width = "0%";
}

function closeNavArrow2() {
	document.getElementById("myNav1").style.width = "0%";
}

/* Close when someone clicks on the lnk inside the overlay */
function closeNav2() {
	document.getElementById("myNav2").style.width = "0%";
	document.getElementById("myNav").style.width = "0%";
	window.scroll({
		top: 0,
		left: 0,
	});
}

/*--------------------------------------------*/
function openNav3() {
	document.getElementById("myNav3").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNavX3() {
	document.getElementById("myNav3").style.width = "0%";
	document.getElementById("myNav").style.width = "0%";
}

function closeNavArrow3() {
	document.getElementById("myNav1").style.width = "0%";
}

/* Close when someone clicks on the lnk inside the overlay */
function closeNav3() {
	document.getElementById("myNav3").style.width = "0%";
	document.getElementById("myNav").style.width = "0%";
	window.scroll({
		top: 0,
		left: 0,
	});
}

/* contact form */
const form = document.querySelector("form"),
	statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
	e.preventDefault();
	statusTxt.style.color = "#0D6EFD";
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

/* ------------------- vertical slider -------------------- */

(function () {
	// Vertical Slider object
	const vertical_slider = {
		// Slide class name
		slider_class: ".v-slider",

		// Show slide
		show_slide: function (slide_id, context_item) {
			const slide_container = context_item.closest(this.slider_class).querySelector(".v-slides");
			if (slide_container) {
				const slides = slide_container.querySelectorAll(".v-slide");
				if (slides && slides[slide_id]) {
					// Scroll to active slide
					slide_container.scrollTo({
						top: slides[slide_id].offsetTop,
						behavior: "smooth",
					});

					// Set active context item
					const active_context_item = context_item.closest(".v-slide_navigation").querySelector(".active");
					if (active_context_item) {
						active_context_item.classList.remove("active");
					}

					context_item.classList.add("active");
				}
			}
		},

		// Initialize slide
		init_slider: function (slider) {
			const navigation_items = slider.querySelectorAll(".v-slide_navigation a");

			if (navigation_items) {
				Object.keys(navigation_items).forEach(function (key) {
					navigation_items[key].onclick = function (e) {
						e.preventDefault();

						vertical_slider.show_slide(key, navigation_items[key]);
					};
				});
			}
		},

		// Initialize sliders
		init: function () {
			// Iterate over each slider
			document.querySelectorAll(this.slider_class).forEach((slider) => this.init_slider(slider));
		},
	};

	// Initialize sliders
	vertical_slider.init();
})();

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
