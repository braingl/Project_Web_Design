var count = 0;
var directions = {
	prev: 0,
	next: 1,
};

var prevButton = document.querySelector(".slider-navigation button:last-child");
var nextButton = document.querySelector(".slider-navigation button:last-child");
var sliders = document.querySelectorAll(".slider-content figure");
var autoSlideInterval;

initListeners();
startAutoSlide();

function initListeners() {
	nextButton.addEventListener("click", onNavigationClick);
	prevButton.addEventListener("click", onNavigationClick);
}

function onNavigationClick(e) {
	clearInterval(autoSlideInterval); // Clear the autoSlideInterval

	var currentButton = e.target;
	var index = getElementIndex(e.target);
	var controlledCount = countController(index);

	var oldSlideItem = sliders[controlledCount.old];
	var newSlideItem = sliders[controlledCount.new];

	oldSlideItem.classList.remove("show");
	currentButton.classList.add("disabled");

	var showNextSliderItemInterval = setInterval(function () {
		newSlideItem.classList.add("show");
		currentButton.classList.remove("disabled");
		clearInterval(showNextSliderItemInterval);

		startAutoSlide(); // Start the autoSlideInterval again after changing the slide
	}, 500);
}


function countController(directionIndex) {
	var result = { new: 0, old: count };
	var max = sliders.length;

	if (directionIndex === directions.next) {
		count = count === max - 1 ? 0 : count + 1;
	}

	if (directionIndex === directions.prev) {
		count = count === 0 ? max - 1 : count - 1;
	}

	result.new = count;

	return result;
}

function getElementIndex(element) {
	return Array.from(element.parentElement.children).indexOf(element);
}

function startAutoSlide() {
	autoSlideInterval = setInterval(function () {
		var newIndex = count < sliders.length - 1 ? count + 1 : 0;
		var currentButton = nextButton;
		var controlledCount = countController(directions.next);

		var oldSlideItem = sliders[controlledCount.old];
		var newSlideItem = sliders[controlledCount.new];

		oldSlideItem.classList.remove("show");
		currentButton.classList.add("disabled");

		var showNextSliderItemInterval = setInterval(function () {
			newSlideItem.classList.add("show");
			currentButton.classList.remove("disabled");
			clearInterval(showNextSliderItemInterval);
		}, 500);
	}, 7000);
}
