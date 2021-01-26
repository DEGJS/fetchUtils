this['demo-bundle'] = this['demo-bundle'] || {};
this['demo-bundle'].js = (function () {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var fetchUtils = function fetchUtils() {
    var defaults = {
      timeout: 10000,
      cachebusting: false
    };
    var settings = {};
    var callback = null;
    setOptions(settings);

    function processStatus(response) {
      fireCallbackFn(response);

      if (response.status === 200 || response.status === 201 || response.status === 0) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    }

    function parseJson(response) {
      return response.json();
    }

    function parseHtml(response) {
      return response.text();
    }

    function getWrappedPromise() {
      var wrappedPromise = {},
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
      var wrappedPromise = getWrappedPromise(),
          args = Array.prototype.slice.call(arguments);
      fetch.apply(null, args).then(function (response) {
        wrappedPromise.resolve(response);
      }, function (error) {
        wrappedPromise.reject(error);
      }).catch(function (error) {
        wrappedPromise.catch(error);
      });
      return wrappedPromise;
    }

    function genericFetch(url) {
      var fetchParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var defaultHeaders = {
        "Accept": 'application/json'
      };
      fetchParams.headers = Object.assign({}, defaultHeaders, fetchParams.headers);
      return getData(url, fetchParams, options, true);
    }

    function getJSON(url) {
      var fetchParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var defaultHeaders = {
        "Accept": 'application/json'
      };
      fetchParams.headers = Object.assign({}, defaultHeaders, fetchParams.headers);
      return getData(url, fetchParams, options).then(processStatus).then(parseJson);
    }

    function getHTML(url) {
      var fetchParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var defaultHeaders = {
        "Accept": 'text/html'
      };
      fetchParams.headers = Object.assign({}, defaultHeaders, fetchParams.headers);
      return getData(url, fetchParams, options).then(processStatus).then(parseHtml);
    }

    function getData(url, fetchParams) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var fireCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      settings = Object.assign({}, settings, options);
      url = settings.cacheBusting === true ? url + '?' + new Date().getTime() : url;
      fetchParams.method = fetchParams.method ? fetchParams.method : 'get';
      var wrappedFetch = invokeFetch(url, fetchParams);
      var timeoutId = setTimeout(function () {
        wrappedFetch.reject(new Error('Load timeout for resource: ' + url));
      }, settings.timeout);
      return wrappedFetch.promise.then(function (response) {
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

    function setCallback() {
      var callbackFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (callbackFn) {
        callback = callbackFn;
      }
    }

    function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (options !== null && _typeof(options) === 'object') {
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

  var main = function main() {
    function init() {
      var pageEl = document.querySelector('.page');
      pageEl.addEventListener('click', onClick);
    }

    function onClick(e) {
      if (e.target.matches('.demo__button')) {
        var demoEl = e.target.closest('.demo');

        if (demoEl) {
          e.preventDefault();
          submitRequest(demoEl);
        }
      }
    }

    function submitRequest(demoEl) {
      var url = demoEl.getAttribute('data-url');
      var type = demoEl.getAttribute('data-type');
      var fetchParams = {
        method: demoEl.getAttribute('data-method')
      };
      var fetchPromise;

      switch (type) {
        case "JSON":
          fetchPromise = instance.getJSON(url, fetchParams);
          break;

        case "HTML":
        default:
          fetchPromise = instance.getHTML(url, fetchParams);
          break;
      }

      fetchPromise.then(function (data) {
        displayResponse(demoEl, data, type);
      });
    }

    function displayResponse(demoEl, data, type) {
      var responseEl = demoEl.querySelector('.js-response');
      var codeEl = responseEl.querySelector('.js-response-data');
      var formattedData;

      switch (type) {
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
