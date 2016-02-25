'use strict';

class Utils {
	constructor() {
		this.ranges = [];
	}

	trackRange (min, max) {
		if (min > max) {
			console.log('Here, let me help you with that...');
			let temp = min;
			min = max;
			max = temp
		}
		const newRange = {
			min: min,
			max: max
		};

		if (this.ranges.length === 0) {
			this.ranges.push(newRange);
		} else {
			let rangeIndex = this.findRange(newRange);

			if (rangeIndex.min !== rangeIndex.max) {
				if (newRange.min > this.ranges[rangeIndex.min].min) {
					newRange.min = this.ranges[rangeIndex.min].min;
				}

				if (newRange.max < this.ranges[rangeIndex.max-1].max) {
					newRange.max = this.ranges[rangeIndex.max-1].max;
				}
			}

			this.ranges.splice(rangeIndex.min, rangeIndex.max - rangeIndex.min, newRange);
		}

		return this;
	}

	findRange (inputRange) {
		let rangeIndex = {
			min: 0,
			max: this.ranges.length
		};

		for (var i = 0; i < this.ranges.length; i++) {
			if (inputRange.min > this.ranges[i].max) {
				rangeIndex.min = i+1;
			}

			if (inputRange.max < this.ranges[i].min) {
				rangeIndex.max = i;
				break;
			}
		}

		return rangeIndex;
	}

	queryRange () {}
	deleteRange () {}
}

let utilton;

function getUtils() {
	if (!utilton) {
		utilton = new Utils();
	}

	return utilton;
}

export default getUtils;