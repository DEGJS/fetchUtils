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

## Revision History
* **1.0.0:** First commit.