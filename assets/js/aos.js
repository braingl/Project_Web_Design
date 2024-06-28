// Function to check if an element is in the viewport
function isInViewport(element) {
	var bounding = element.getBoundingClientRect();
	var windowHeight =
		window.innerHeight || document.documentElement.clientHeight;
	var delay = parseInt(element.getAttribute("delay")) || 0;
	return bounding.top <= windowHeight - delay;
}

function handleScroll() {
	var elements = document.querySelectorAll(".aos");

	elements.forEach(function (element) {
		if (isInViewport(element) && !element.classList.contains("animate")) {
			element.classList.add("animate");
			setTimeout(function () {}, 1000);
		}
	});
}

window.addEventListener("scroll", handleScroll);
    handleScroll();