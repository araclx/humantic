import { ProjectController } from '@humantic/controller'
import { Router } from 'express'

export class ProjectRouter {
	public router: Router
	public controller: ProjectController = new ProjectController()
	/**
	 *
	 */
	constructor() {
		// eslint-disable-next-line new-cap
		this.router = Router()
		this.routes()
	}

	public routes() {
		this.router.get('/', this.controller.getAll)
		this.router.get('/:id', this.controller.getSingle)
		this.router.post('/', this.controller.createOne)
	}
}
