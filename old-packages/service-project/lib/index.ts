import responder from './project.reponder'
import mongo from './mongoose.module'
import { getProjects, createProject } from './project.controller'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
mongo()

responder.on('list', async () => {
	const data = await getProjects()
	return data
})

responder.on('create', async (request) => {
	const data = request.body
	const newProject = await createProject(data)
	return newProject
})
