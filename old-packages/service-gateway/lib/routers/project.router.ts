import { Router } from 'express'

export class ProjectServiceRouter {
	public router: Router

	constructor() {
		// eslint-disable-next-line new-cap
		this.router = Router()
		this.routes()
	}

	routes() {
		this.router.get('/')
	}
}
