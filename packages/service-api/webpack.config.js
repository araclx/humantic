const configure = require('craftpack')
const path = require('path')

module.exports = configure({
	output: {
		filename: 'index.js',
		path: path.join(__dirname, 'dist'),
	},
	entry: path.join(__dirname, 'src', 'index.ts'),
})
