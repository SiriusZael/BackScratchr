var getConfig = require('hjs-webpack');

module.exports = getConfig({
	in: 'client/main.js',
	out: 'public',
	isDev: process.env.NODE_ENV !== 'production',
	hostname: 'SiriusZael.local'
});