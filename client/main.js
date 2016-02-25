'use strict';

import app from 'ampersand-app'
import styles from './styles/main.styl'
import Router from './router.js'
import getUtils from './utils.js'

// expose app to browser console
window.app = app;
window.utils = getUtils();

app.extend({
	init () {
		this.router = new Router()
		this.router.history.start()
	}
})

app.init()