# rave-curl-js

rave-curl-js is a RaveJS extension that adds the ability to use the js
plugin from [curl.js](http://github.com/cujojs/curl) in your RaveJS application.

When using an ES6 loader, AMD plugins aren't the most efficient way to load
non-module resources.  However, refactoring to use ES6 loaders can be a hassle.
This extension allows existing AMD code bases to start using RaveJS without
immediate refactoring.  In the long term, you should investigate using true
ES6 loader extensions such as
[rave-load-text](https://github.com/unscriptable/rave-load-text) and
[rave-load-css](https://github.com/unscriptable/rave-load-css).

##Usage

This is all that is required to start using this extension in your RaveJS app:

```
npm install --save rave-curl-js
```

or:

```
bower install --save rave-curl-js
```

Any code that references the js plugin in AMD or node-formatted code will
automatically find and use curl's plugin:

```js
define(['js!legacy.js'], function (legacy) {
	// use legacy javascript library here
});
```

```js
var legacy = require('js!legacy.js');
// use legacy javascript library here
```

## Testing

**TBD**

## Contributing

Pull requests accepted!  Please see [Contributing](CONTRIBUTING.md).

## About

Brought to you by [cujoJS](http://cujojs.com).
