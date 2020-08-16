const configure = require('craftpack')
const path = require('path')

module.exports = configure({
	output: {
		filename: '[name].worker.js',
		path: path.join(__dirname, 'dist'),
	},
	entry: {
		project: path.join(__dirname, 'services', 'project', 'project.service.ts'),
		gateway: path.join(__dirname, 'services', 'gateway', 'gateway.service.ts'),
	},
})
