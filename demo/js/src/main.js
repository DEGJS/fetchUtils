import fetchUtils from "DEGJS/fetchUtils";

let main = function() {

	function init() {
		let pageEl = document.querySelector('.page');

		pageEl.addEventListener('click', onClick);
	}

	function onClick(e) {
		if(e.target.matches('.demo__button')) {
			let demoEl = e.target.closest('.demo');
			if(demoEl) {
				e.preventDefault();
				submitRequest(demoEl);
			}
		}
	}

	function submitRequest(demoEl) {

		let url = demoEl.getAttribute('data-url');
		let type = demoEl.getAttribute('data-type');

		let fetchParams = {
			method: demoEl.getAttribute('data-method')
		};

		let fetchPromise;

		switch(type) {
			case "JSON":
				fetchPromise = fetchUtils.getJSON(url, fetchParams);
				break;
			case "HTML":
			default:
				fetchPromise = fetchUtils.getHTML(url, fetchParams);
				break;
		}
		
		fetchPromise.then(function(data) {
			displayResponse(demoEl, data, type);
		});
	}

	function displayResponse(demoEl, data, type) {
		let responseEl = demoEl.querySelector('.js-response');
		let codeEl = responseEl.querySelector('.js-response-data');
		let formattedData;

		switch(type) {
			case "JSON": 
				formattedData = JSON.stringify(data);
				break;
			case "HTML":
			default:
				formattedData = data;
				break;
		}
		codeEl.textContent = formattedData;

		responseEl.classList.remove('is-inactive');
	}

	init();
}

export default main();