/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var js = require('curl/plugin/js');

exports.create = create;

function create (context) {
	var info = {
		name: 'curl/plugin/js',
		module: js
	};
	if (!context.amdPluginMap) context.amdPluginMap = {};
	context.amdPluginMap['js']
		= context.amdPluginMap['curl/plugin/js']
		= info;
}
