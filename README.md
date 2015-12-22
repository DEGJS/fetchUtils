# fetchUtils
A utility library for using the new Fetch ajax API.

## Sample Usage
``` javascript
fetchUtils.getJSON({
	'url': '',
	'method': 'POST',
	'body': ''
}).then(function(data) {
	// Handle promise success
}).catch(function(error) {
	// Handle promise error
});
```

## Available Methods
* **getJSON():** returns JSON
* **getHTML():** returns HTML

## Revision History
* **1.0.0:** First commit.
* **1.0.1:** Fixed bug with default param settings
* **1.0.2:** Removed body param on GET method calls
