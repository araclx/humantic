import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Project } from '../models'

export class ProjectController {
	public async getProject(request: Request, response: Response) {
		const projectRepository = getRepository(Project)
		const projects = await projectRepository.find()
		response.json({ data: projects })
	}

	public async createProject(request: Request, response: Response) {
		const projectRepository = getRepository(Project)
		const newProject = projectRepository.create(request.body)

		try {
			await projectRepository.save(newProject)
			response.json({ data: newProject })
		} catch (error) {
			response.json(error)
		}
	}
}
