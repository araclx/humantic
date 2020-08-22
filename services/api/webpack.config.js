const configure = require('craftpack')
const path = require('path')

const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = configure({
	output: {
		filename: 'index.js',
		path: path.join(__dirname, 'dist'),
	},
	entry: path.join(__dirname, 'src', 'index.ts'),
	plugins: [new NodemonPlugin()],
})
