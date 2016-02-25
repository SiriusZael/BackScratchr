import React from 'react'

export default React.createClass({
	displayName: 'MinesweeperPage',

	propogate (pos) {
		if (pos.x >= 1) {
			this.columns[pos.x-1][pos.y].open();
		}
		if (pos.y >= 1) {
			this.columns[pos.x][pos.y-1].open();
		}
		if (pos.x < this.cellCount - 1) {
			this.columns[pos.x-1][pos.y].open();
		}
		if (pos.y < this.cellCount - 1) {
			this.columns[pos.x][pos.y-1].open();
		}
	},

	render () {
		this.columns = [];

		for (var i = 0; i < this.props.cellCount; i++) {
			this.columns.push(<Column propogate={this.propogate.bind(this)} col={i} cellCount={this.props.cellCount}></Column>);
		}

		return (
			<div className='container'>{this.columns}</div>
		);
	}
});

var Cell = React.createClass({
	displayName: 'cell',

	open () {
		this.props.propogate(this.props.pos);
		this.setState({
			opened: true
		});
	},

	render () {
		var className = 'row';
		if (this.state && this.state.opened) {
			className += ' opened';
		}
		return (
			<div onClick={this.open.bind(this)} className={className}></div>
		);
	}
});

var Column = React.createClass({
	displayName: 'column',

	render () {
		this.cells = [];
		for (var i = 0; i < this.props.cellCount; i++) {
			var pos = {
				x: i,
				y: this.props.col
			};
			this.cells.push(<Cell propogate={this.props.propogate.bind(this)} pos={pos}></Cell>);
		}
		return (
			<div className='column'>{this.cells}</div>
		);
	}
});