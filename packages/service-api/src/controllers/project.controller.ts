import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Project } from '../models'

export class ProjectController {
	/**
	 * Searches database for all projects and returns array with found data, this request should also implemented search interface which will allow to filter data to search.
	 * @param request
	 * @param response
	 */
	public async getProject(request: Request, response: Response) {
		const projectRepository = getRepository(Project)
		const projects = await projectRepository.find()
		response.json({ data: projects }).status(200)
	}

	/** Create a new project in database from request body. */
	public async createProject(request: Request, response: Response) {
		// TODO: This request should be associated with JWT and automatically add creator of project to actually logged user.
		const projectRepository = getRepository(Project)
		const newProject = projectRepository.create(request.body)
		// TODO: Add error-handling
		try {
			await projectRepository.save(newProject)
			response.json({ data: newProject }).status(200)
		} catch (error) {
			response.json(error).status(503)
		}
	}

	// TODO: GetProject Method which will search for project with specified ID.

	// TODO: SearchProject Method that will search for project with specified parameters through Algoria.

	// TODO: UpdateProject Method that will update specified project through providing ID of Project.

	// TODO: DeleteProject Method for owners/admins of project that will completly remove him from database, this method should be able to use only when project is younger than 2h.
}
