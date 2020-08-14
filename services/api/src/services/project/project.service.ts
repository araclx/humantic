import cote from 'cote'

const projectResponder = new cote.Responder({
	name: 'project responder',
	key: 'projects',
})

projectResponder.on('*', (req) => console.log(req))

const sampleData = ['Hello']

projectResponder.on('list', (req) => {
	return Promise.resolve(sampleData)
})
