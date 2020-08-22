import { TechnologyController } from '@humantic/controller'
import { Router } from 'express'

export class TechnologyRouter {
	public router: Router
	public controller: TechnologyController = new TechnologyController()
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
