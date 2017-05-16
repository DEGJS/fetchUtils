let fetchUtils = function() {

    const TIMEOUT = 10000;

    let callback = null;

    function processStatus(response) {
        fireCallbackFn(response);
        if (response.status === 200 || 
            response.status === 201 ||
            response.status === 0) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    };

    function parseJson(response) {
        return response.json();
    };

    function parseHtml(response) {
        return response.text();
    };

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
    };

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
    };

    function genericFetch(url, fetchParams = {}, options = {}) {
        let defaultHeaders = {
            "Accept": 'application/json'
        };
        
        fetchParams.headers = Object.assign({}, defaultHeaders, fetchParams.headers);

        return getData(url, fetchParams, options, true);
    };

    function getJSON(url, fetchParams = {}, options = {}) {
        let defaultHeaders = {
            "Accept": 'application/json'
        };
        
        fetchParams.headers = Object.assign({}, defaultHeaders, fetchParams.headers);

        return getData(url, fetchParams, options).then(processStatus).then(parseJson);
    };

    function getHTML(url, fetchParams = {}, options = {}) {
        let defaultHeaders = {
            "Accept": 'text/html'
        };

        fetchParams.headers = Object.assign({}, defaultHeaders, fetchParams.headers);

        return getData(url, fetchParams, options).then(processStatus).then(parseHtml);
    };

    function getData(url, fetchParams, options, fireCallback = false) {
        let timeout = options.timeout ? options.timeout : TIMEOUT;
        url = options.cacheBusting ? url + '?' + new Date().getTime() : url;

        fetchParams.method = fetchParams.method ? fetchParams.method : 'get';

        let wrappedFetch = invokeFetch(url, fetchParams);

        let timeoutId = setTimeout(function () {
            wrappedFetch.reject(new Error('Load timeout for resource: ' + url));
        }, timeout);

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

    return {
        getJSON: getJSON,
        getHTML: getHTML,
        fetch: genericFetch,
        setCallback: setCallback
    };

};

var instance = fetchUtils();

export default instance;