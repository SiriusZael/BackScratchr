'use strict';

// var Backbone = require('backbone');
// var $ = Backbone.$ = require('jquery');

// var AppView = Backbone.View.extend({
// 	render: function() {
// 		$('main').append('<h1>Browserify is mathematical.</h1>');
// 	}
// });

// var appView = new AppView();
// appView.render();

// window.BackScratcher = {
// 	bawk: function() {
// 		console.log('bawk!');
// 	}
// };

var React = require('react');
var styles = require('./styles/main.styl');

var Hello = React.createClass({
	displayName: 'Hello',
	render: function () {
		return <div>Hello, {this.props.name}</div>;
	}
});

React.render(<Hello name='World!'/>, document.body);