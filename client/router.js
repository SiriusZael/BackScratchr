import Router from 'ampersand-router'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import MinesweeperPage from './pages/minesweeper'
import RangePage from './pages/range'
import React from 'react'
import app from 'ampersand-app'

export default Router.extend({
	routes: {
		'': 'public',
		'repos': 'repos',
		'minesweeper': 'minesweeper',
		'range': 'range'
	},

	public () {
		React.render(<PublicPage/>, document.body)
	},

	repos () {
		React.render(<ReposPage/>, document.body)
	},

	minesweeper () {
		React.render(<MinesweeperPage cellCount='10'/>, document.body)
	},

	range () {
		React.render(<RangePage/>, document.body)
	}
})