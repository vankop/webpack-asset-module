const path = require('path');

module.exports = {
	mode: "production",
	devtool: false,
	experiments: {
		asset: true
	},
	output: {
		path: path.resolve('./simple')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: 'css-loader'
			},
			{
				test: /\.ttf$/,
				type: "asset"
			}
		]
	}
};
