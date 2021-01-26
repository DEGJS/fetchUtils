# fetchUtils
![Run Tests](https://github.com/DEGJS/fetchUtils/workflows/Run%20Tests/badge.svg)

FetchUtils is a utility module that adds the following features to the Javascript [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API):
+ Request timeouts, which the Fetch API currently lacks
+ Helper methods for requesting and parsing a JSON- or HTML-encoded response data from an endpoint 

## Demo
You can view a demo of fetchUtils [here](http://degjs.github.io/fetchUtils/).

## Install
As of version 3.0.0, fetchUtils is on NPM and can be installed with 
```
npm install @degjs/fetch-utils
```

## Usage
FetchUtils is a singleton, so it does not need to be instantiated.
```js
import fetchUtils from "@degjs/fetch-utils";

/* Success handler */
function onSuccess(data) {
    console.log("SUCCESS: " + data);
}

/* Error handler */
function onError(error) {
    console.log("ERROR: " + error);
}

/* Perform a GET request with a 30-second timeout and expect a JSON-encoded response */
let fetchParams = {
	method: 'GET',
	body: {}
};

let options = {
	timeout: 30000
};

fetchUtils.getJSON('/endpoint-url', fetchParams, options)
    .then(onSuccess)
    .catch(onError);

```

## Methods

### .getHTML(url [, fetchParams [, options]])
Returns: `Promise`   
Perform a request to an endpoint that returns HTML-encoded data. Sets the `Accept` option on request header to `text/html`.

### .getJSON(url [, fetchParams [, options]])
Returns: `Promise`   
Perform a request to an endpoint that returns JSON-encoded data. Sets the `Accept` option on request header to `application/json`.

### .fetch(url [, fetchParams [, options]])
Returns: `Promise`   
Perform a request to an endpoint that returns the full, unparsed endpoint response.

The parameters for the `.getHTML()`, `.getJSON()` and `.fetch()` methods are outlined below:

#### url
Type: `String`   
The URL of the endpoint. This parameter is required.

#### fetchParams
Type: `Object`   
Request options (such as method, body, etc.) that are passed through to the `fetch()` method. These options correspond to those defined in the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch#Syntax). This parameter is optional.

#### options
Type: `Object`   
Additional options that fall outside of the Fetch API. This parameter is optional.

##### options.timeout
Type: `Number`   
The number of milliseconds that the request should wait before timing out. The default timeout value is 10,000 millseconds (10 seconds). 

### .setCallback(functionName)
Define a callback function that will be executed on fetch success. This is not recommended in most scenarios (use `.then()` and `.catch()` from the returned promise instead), but may be useful in specific situations.

### .setOptions(options)
Override default plugin options, such as `timeout` and `cachebusting`. Must be called before any of the fetch methods above are called.


## Browser Support
FetchUtils depends on the following browser APIs:
+ [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch)
+ [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
+ [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

To support legacy browsers, you'll need to include polyfills for the above APIs.
