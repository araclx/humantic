/* eslint-disable no-warning-comments */
import { Request, Response } from 'express'
import { createNewProject, fetchAllProjects, findSingleProjectById } from 'projects/actions'
import { projectIndex } from '../interfaces/http/services/algoria'
import { Project } from './model'

export class ProjectController {
	/**
	 * Searches database for all projects and returns array with found data, this request should also implemented search interface which will allow to filter data to search.
	 * @param request
	 * @param response
	 */

	public async getAll(request: Request, response: Response) {
		const projects = fetchAllProjects()
		response.json({ data: projects }).status(200)
	}

	public async getSingle(request: Request, response: Response) {
		const project = findSingleProjectById(request.params.id)

		if (project === null) {
			response.status(404).json({
				error: 'Not Found',
			})
		} else {
			response
				.json({
					data: project,
				})
				.status(200)
		}
	}

	/** Create a new project in database from request body. */
	public async createOne(request: Request, response: Response) {
		// TODO: This request should be associated with JWT and automatically add creator of project to actually logged user.

		const createdProject = createNewProject(request.body)
		response.json({ data: createdProject }).status(200)

		try {
			await projectIndex.saveObject(createdProject, {
				autoGenerateObjectIDIfNotExist: true,
			})
		} catch (error) {
			response.json({
				message: 'Unable to create index for project.',
				err: error,
			})
		}
	}

	// TODO: SearchProject Method that will search for project with specified parameters through Algoria.
	// public async searchThrough(request: Request, response: Response) {}

	// TODO: UpdateProject Method that will update specified project through
	// providing ID of Project.
	public async updateOne(request: Request, response: Response) {
		const project = await Project.findByIdAndUpdate(
			{
				_id: request.params.id,
			},
			request.body
		)

		if (project === null) response.sendStatus(404)

		const updatedProject = { _id: request.params.id, ...request.body }
		response.json({
			status: response.status,
			data: updatedProject,
		})
	}

	// TODO: DeleteProject Method for owners/admins of project that will completly remove him from database, this method should be able to use only when project is younger than 2h.
}
