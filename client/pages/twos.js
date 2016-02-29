'use strict';

const validate = function(val) {
	if (!val) {
		return null;
	} else if (typeof val === 'number') {
		return val.toString();
	} else if (typeof val !== 'string') {
		return null;
	}
}

const Twos = {
	inefficient: function(end) {
		let count = 0;

		end = validate(end);
		if (!end) {
			return count;
		}

		for (let i = 0; i <= end; i++) {
			let parts = i.toString().split('');
			parts.forEach(function(val) {
				if (parseInt(val, 10) === 2) {
					count++;
				}
			});
		}

		return count;
	},

	efficient: function(end) {
		let count = 0;

		end = validate(end);
		if (!end) {
			return count;
		}

		for (let i = 1; i <= end.length; i++) {
			let quot = Math.floor(end / Math.pow(10, i));
			let remain = Math.floor((end % Math.pow(10, i)) / Math.pow(10, i-1));

			count += quot * Math.pow(10, i-1);

			if (remain > 2) {
				count += Math.pow(10, i-1);
			} else if (remain === 2) {
				count += (end % Math.pow(10, i-1)) + 1;
			}
		}

		return count;
	}
};

export default Twos;