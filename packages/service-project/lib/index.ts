import responder from './project.reponder'
import mongo from './mongoose.module'
import { getProjects } from './project.controller'

mongo()

responder.on('list', async (request) => {
	const data = await getProjects()
	return data
})
