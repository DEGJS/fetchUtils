# fetchUtils
FetchUtils is a utility module that adds the following features to the Javascript [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API):
+ Request timeouts, which the Fetch API currently lacks
+ Helper methods for requesting and parsing a JSON- or HTML-encoded response data from an endpoint 

## Install
FetchUtils is an ES6 module. Consequently, you'll need an ES6 transpiler ([Babel](https://babeljs.io) is a nice one) and a module loader ([SystemJS](https://github.com/systemjs/systemjs) will do the job) as part of your Javascript workflow.

If you're already using the [JSPM package manager](http://jspm.io) for your project, you can install FetchUtils with the following command:

```
$ jspm install github:DEGJS/fetchUtils
```
## Usage
FetchUtils is a singleton, so it does not need to be instantiated.
```js
import fetchUtils from "DEGJS/fetchUtils";

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
	method: 'GET'
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

The parameters for the `.getHTML()` and `.getJSON()` methods are outlined below:

#### url
Type: `String`   
The URL of the endpoint. This parameter is required.

#### fetchParams
Type: `Object`   
Request options that are passed through to the `fetch()` method. These options correspond to those defined in the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch#Syntax). This parameter is optional.

#### options
Type: `Object`   
Additional options that fall outside of the Fetch API. This parameter is optional.

##### options.timeout
Type: `Number`   
The number of milliseconds that the request should wait before timing out. The default timeout value is 10,000 millseconds (10 seconds). 

## Browser Support
FetchUtils depends on the following browser APIs:
+ [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch)
+ [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
+ [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

To support legacy browsers, you'll need to include polyfills for the above APIs.