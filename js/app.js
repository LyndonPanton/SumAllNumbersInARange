"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function sum(array) {
		if (!array[0] || !array[1]) {
			return "Input must not be empty";
		} else if (/\D/.test(array[0]) || /\D/.test(array[1])) {
			return "Input must only contain numerical characters";
		} else if (isNaN(array[0]) || isNaN(array[1])) {
			return ("Enter two numbers");
		} else if (array[0] % 1 !== 0 || array[1] % 1 !== 0) {
			return ("Enter two integers");
		} else {
			array[0] = Number(array[0]);
			array[1] = Number(array[1]);

			let sum = 0;

			array.sort(function(a, b) {
				if (a < b) {
					return -1;
				} else {
					return 1;
				}
			});

			for (let i = array[0]; i <= array[1]; i++) {
				sum = sum + i;
			}

			return sum;
		}
	}

	function toggle(chevron) {
		let task = document.getElementById("task");

		if (Array.from(chevron.classList).indexOf("fa-chevron-up") === -1) {
			chevron.classList.remove("fa-chevron-down");
			chevron.classList.add("fa-chevron-up");

			task.classList.remove("hidden");
			task.classList.add("visible");
		} else {
			chevron.classList.remove("fa-chevron-up");
			chevron.classList.add("fa-chevron-down");

			task.classList.remove("visible");
			task.classList.add("hidden");
		}
	}

	let chevron = document.getElementById("chevron");
	chevron.addEventListener("click", function(event) {
		toggle(this);
	});

	chevron.addEventListener("keydown", function(event) {
		if (event.keyCode === 13 || event.keyCode === 32) {
			toggle(this);
		}
	});

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		sum([this.children[0].value, this.children[1].value]);
	});
};