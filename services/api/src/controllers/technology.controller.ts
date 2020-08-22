import { getRepository } from 'typeorm'
import { Request, Response } from 'express'
import { Technology } from '@humantic/model'

export class TechnologyController {
	/**
	 * Searches database for all projects and returns array with found data, this request should also implemented search interface which will allow to filter data to search.
	 * @param request
	 * @param response
	 */
	public async getAll(request: Request, response: Response) {
		const repository = getRepository(Technology)
		const technologies = await repository.find()
		response.json({ data: technologies }).status(200)
	}

	public async getSingle(request: Request, response: Response) {
		const repository = getRepository(Technology)
		const technology = await repository.findOne(request.params.id)

		if (technology) {
			response.json({ data: technology }).status(200)
		} else {
			response.status(404).json({
				error: 'Not Found',
			})
		}
	}

	/** Create a new project in database from request body. */
	public async createOne(request: Request, response: Response) {
		const technologyRepository = getRepository(Technology)
		const newTechnology = technologyRepository.create(request.body)

		try {
			await technologyRepository.save(newTechnology)
			response.json({ data: newTechnology }).status(200)
		} catch (error) {
			response.json({ err: error })
		}
	}
}
