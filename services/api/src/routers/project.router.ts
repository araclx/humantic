import { Router } from 'express'
import { ProjectController } from '../controllers/project.controller'

export class ProjectRouter {
	public router: Router
	public controller: ProjectController = new ProjectController()

	constructor() {
		this.router = Router()
		this.routes()
	}

	routes() {
		this.router.get('/', this.controller.helloWorld)
	}
}
