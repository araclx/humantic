const configuration = {
	files: ['tests/**/*'],
	failFast: true,
	concurrency: 5,
	extensions: ['ts'],
	require: ['ts-node/register', 'tsconfig-paths/register'],
}

export default configuration
