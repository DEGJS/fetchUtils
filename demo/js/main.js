this.main = this.main || {};
this.main.js = (function () {
    'use strict';

    let fetchUtils = function() {

        const defaults = {
            timeout: 10000,
            cachebusting: false
        };
        let settings = {};
        let callback = null;

        setOptions(settings);

        function processStatus(response) {
            fireCallbackFn(response);
            if (response.status === 200 || 
                response.status === 201 ||
                response.status === 0) {
                return Promise.resolve(response)
            } else {
                return Promise.reject(new Error(response.statusText))
            }
        }
        function parseJson(response) {
            return response.json();
        }
        function parseHtml(response) {
            return response.text();
        }
        function getWrappedPromise() {
            let wrappedPromise = {},
                promise = new Promise(function (resolve, reject) {
                    wrappedPromise.resolve = resolve;
                    wrappedPromise.reject = reject;
                });
            wrappedPromise.then = promise.then.bind(promise);
            wrappedPromise.catch = promise.catch.bind(promise);
            wrappedPromise.promise = promise;
            return wrappedPromise;
        }
        function invokeFetch() {
            let wrappedPromise = getWrappedPromise(),
                args = Array.prototype.slice.call(arguments);
            fetch.apply(null, args).then(function(response) {
                wrappedPromise.resolve(response);
            }, function(error) {
                wrappedPromise.reject(error);
            }).catch(function (error) {
                wrappedPromise.catch(error);
            });
            return wrappedPromise;
        }
        function genericFetch(url, fetchParams = {}, options = {}) {
            let defaultHeaders = {
                "Accept": 'application/json'
            };
            
            fetchParams.headers = Object.assign({}, defaultHeaders, fetchParams.headers);

            return getData(url, fetchParams, options, true);
        }
        function getJSON(url, fetchParams = {}, options = {}) {
            let defaultHeaders = {
                "Accept": 'application/json'
            };
            
            fetchParams.headers = Object.assign({}, defaultHeaders, fetchParams.headers);

            return getData(url, fetchParams, options).then(processStatus).then(parseJson);
        }
        function getHTML(url, fetchParams = {}, options = {}) {
            let defaultHeaders = {
                "Accept": 'text/html'
            };

            fetchParams.headers = Object.assign({}, defaultHeaders, fetchParams.headers);

            return getData(url, fetchParams, options).then(processStatus).then(parseHtml);
        }
        function getData(url, fetchParams, options = {}, fireCallback = false) {
            settings = Object.assign({}, settings, options);
            url = settings.cacheBusting === true ? url + '?' + new Date().getTime() : url;

            fetchParams.method = fetchParams.method ? fetchParams.method : 'get';

            let wrappedFetch = invokeFetch(url, fetchParams);

            let timeoutId = setTimeout(function () {
                wrappedFetch.reject(new Error('Load timeout for resource: ' + url));
            }, settings.timeout);

            return wrappedFetch.promise.then(function(response) {
                clearTimeout(timeoutId);
                if (fireCallback === true) {
                    fireCallbackFn(response);
                }
                return response;
            });
        }

        function fireCallbackFn(response) {
            if (callback !== null) {
                callback(response);
            }
        }

        function setCallback(callbackFn = null) {
            if (callbackFn) {
                callback = callbackFn;
            }
        }

        function setOptions(options = null) {
            if (options !== null && typeof options === 'object') {
                settings = Object.assign({}, defaults, options);
            }
        }

        return {
            getJSON: getJSON,
            getHTML: getHTML,
            fetch: genericFetch,
            setCallback: setCallback,
            setOptions: setOptions
        };

    };

    var instance = fetchUtils();

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
    				fetchPromise = instance.getJSON(url, fetchParams);
    				break;
    			case "HTML":
    			default:
    				fetchPromise = instance.getHTML(url, fetchParams);
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
    };

    var main$1 = main();

    return main$1;

}());
