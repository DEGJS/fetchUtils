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

    var parseHtml = function(response) {
        return response.text();
    };

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
    };

    /* @returns {wrapped Promise} with .resolve/.reject/.catch methods */
    function getWrappedFetch() {
        var wrappedPromise = getWrappedPromise();
        var args = Array.prototype.slice.call(arguments);// arguments to Array

        fetch.apply(null, args)// calling original fetch() method
            .then(function (response) {
                wrappedPromise.resolve(response);
            }, function (error) {
                wrappedPromise.reject(error);
            })
            .catch(function (error) {
                wrappedPromise.catch(error);
            });
            return wrappedPromise;
    };

    function getJSON(params) {
       let options = {
           method: params.method ? params.method : 'get',
           headers: {
               'Accept': params.accepts ? params.accepts : 'application/json'
           }
       };
       if (params.method.toLowerCase() !== 'get') {
           options.body = params.body ? params.body : '';
       }
       var wrappedFetch = getWrappedFetch(
           params.cacheBusting ? params.url + '?' + new Date().getTime() : params.url, options
       );

       var timeoutId = setTimeout(function () {
           wrappedFetch.reject(new Error('Load timeout for resource: ' + params.url));// reject on timeout
       }, MAX_WAITING_TIME);

       return wrappedFetch.promise// getting clear promise from wrapped
           .then(function (response) {
               clearTimeout(timeoutId);
               return response;
           })
           .then(processStatus)
           .then(parseJson);
    };

    function getHTML(params) {
        params.method = params.method ? params.method : 'get';
        params.accepts = params.accepts ? params.accepts : 'text/html';

        var wrappedFetch = getWrappedFetch(
            params.cacheBusting ? params.url + '?' + new Date().getTime() : params.url,
            {
                method: params.method,// optional, "GET" is default value
                headers: {
                    'Accept': params.accepts
                }
            });

        var timeoutId = setTimeout(function () {
            wrappedFetch.reject(new Error('Load timeout for resource: ' + params.url));// reject on timeout
        }, MAX_WAITING_TIME);

        return wrappedFetch.promise// getting clear promise from wrapped
            .then(function (response) {
                clearTimeout(timeoutId);
                return response;
            })
            .then(processStatus)
            .then(parseHtml);
    };

    return {
        getJSON: getJSON,
        getHTML: getHTML
    };

};

var instance = fetchUtils();

export default instance;