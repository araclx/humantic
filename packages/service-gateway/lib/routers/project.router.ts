import { Router } from 'express'
import { ProjectServiceController } from '../controllers/project.controller'

export class ProjectServiceRouter {
	public router: Router
	public controller: ProjectServiceController

	constructor() {
		this.router = Router()
		this.controller = new ProjectServiceController()
		this.routes()
	}

	routes() {
		this.router.get('/', this.controller.getProjects)
	}
}
