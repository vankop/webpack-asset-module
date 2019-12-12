const path = require('path');

module.exports = {
	mode: "production",
	devtool: false,
	experiments: {
		asset: true
	},
	output: {
		path: path.resolve('./oneof')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: 'css-loader'
			},
			{
				test: /\.ttf$/,
				oneOf: [
					{
						issuer: /\.js$/,
						loader: 'glyph-size-loader'
					},
					{
						type: "asset"
					}
				]
			}
		]
	}
};
