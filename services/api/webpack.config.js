const configure = require('craftpack')
const path = require('path')

module.exports = configure({
	output: {
		filename: '[name].worker.js',
		path: path.join(__dirname, 'dist'),
	},
	entry: {
		project: path.join(__dirname, 'src', 'services', 'project', 'project.worker.ts'),
	},
})
