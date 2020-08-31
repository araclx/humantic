const configuration = {
	Files: ['tests/**/*'],
	failFast: true,
	failWithoutAssertions: false,
	verbose: true,
	concurrency: 8,
	tap: false,
	cache: true,
	timeout: '30s',
	extensions: ['ts'],
	require: ['ts-node/register', 'tsconfig-paths/register'],
	environmentVariables: {
		NODE_ENV: 'CI',
	},
}

export default configuration
