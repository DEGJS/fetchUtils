let fetchUtils = function() {

    const MAX_WAITING_TIME = 5000;

    function processStatus(response) {
        if (response.status === 200 || response.status === 0) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    };

    function parseJson(response) {
        return response.json();
    };

    let parseHtml = function(response) {
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

function getWrappedFetch() {
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

    function getJSON(params) {
        let options = {
            maxWaitingTime: params.maxWaitingTime ? params.maxWaitingTime : MAX_WAITING_TIME,
            method: params.method ? params.method : 'get',
            headers: {
                'Accept': params.accepts ? params.accepts : 'application/json'
            }
        };
        if (params.method.toLowerCase() !== 'get') {
            options.body = params.body ? params.body : '';
        }
        let wrappedFetch = getWrappedFetch(
            params.cacheBusting ? params.url + '?' + new Date().getTime() : params.url, options
        );
        let timeoutId = setTimeout(function () {
            wrappedFetch.reject(new Error('Load timeout for resource: ' + params.url));
        }, options.maxWaitingTime);
        return wrappedFetch.promise.then(function(response) {
            clearTimeout(timeoutId);
            return response;
        }).then(processStatus).then(parseJson);
    };

    function getHTML(params) {
        params.maxWaitingTime ? params.maxWaitingTime : MAX_WAITING_TIME;
        params.method = params.method ? params.method : 'get';
        params.accepts = params.accepts ? params.accepts : 'text/html';

        let wrappedFetch = getWrappedFetch(
            params.cacheBusting ? params.url + '?' + new Date().getTime() : params.url,
            {
                method: params.method,// optional, "GET" is default value
                headers: {
                    'Accept': params.accepts
                }
            });
        let timeoutId = setTimeout(function() {
            wrappedFetch.reject(new Error('Load timeout for resource: ' + params.url));// reject on timeout
        }, params.maxWaitingTime);
        return wrappedFetch.promise.then(function(response) {
            clearTimeout(timeoutId);
            return response;
        }).then(processStatus).then(parseHtml);
    };

    return {
        getJSON: getJSON,
        getHTML: getHTML
    };

};

var instance = fetchUtils();

export default instance;