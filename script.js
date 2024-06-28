// navbar
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const nav = document.querySelector(".navbar");

burger.addEventListener("click", () => {
	navLinks.classList.toggle("nav-active");
	burger.classList.toggle("open");
	nav.classList.toggle("scrolled-mini");
});

// navbar scroll
window.addEventListener("scroll", function () {
	const navbar = document.querySelector(".navbar");
	navbar.classList.toggle("scrolled", window.scrollY > 0);
	
	const navLinks = document.querySelectorAll(".nav-links li a");
	navLinks.forEach((link) => {
		link.classList.toggle("scrolled-nav", window.scrollY > 0);
	});
});

